"use server";

// src/app/actions/promosys.ts
// Integração real com a API da Promosys

// Credentials (In a real scenario, should be in .env but as hardcoded per user instructions)
const API_USER = "CDBU";
const API_PASS = "iUrT15gwY1JUI29Q";
const BASE_URL = "https://jcf.promosysweb.com/services";

/**
 * Obtém o Token de acesso
 */
async function gerarToken() {
  const params = new URLSearchParams();
  params.append("usuario", API_USER);
  params.append("senha", API_PASS);

  const response = await fetch(`${BASE_URL}/token.php`, {
    method: "POST",
    body: params,
    cache: "no-store",
  });

  const data = await response.json();
  if (data.Code !== "000") {
    throw new Error(data.Msg || "Erro ao obter token da Promosys");
  }

  return data.Token;
}

/**
 * Busca a lista de benefícios (NBs) de um dado CPF
 */
async function buscarBeneficios(token: string, cpf: string) {
  const params = new URLSearchParams();
  params.append("token", token);
  params.append("cpf", cpf);

  const response = await fetch(`${BASE_URL}/beneficios.php`, {
    method: "POST",
    body: params,
    cache: "no-store",
  });

  const data = await response.json();
  if (data.Code !== "000" && data.Code !== "100") {
    // 100 or 000 means success for them usually
    return [];
  }

  return data.Beneficios || [];
}

/**
 * Solicita processamento de um Benefício (Requisitado em alguns cenários offline)
 */
async function solicitarBeneficio(token: string, beneficio: string) {
  const params = new URLSearchParams();
  params.append("token", token);
  params.append("beneficio", beneficio);

  const response = await fetch(`${BASE_URL}/solicitaBeneficio.php`, {
    method: "POST",
    body: params,
    cache: "no-store",
  });

  return await response.json();
}

/**
 * Consulta Extra/Dados Offline do Benefício
 */
async function consultaOffline(token: string, beneficio: string) {
  const params = new URLSearchParams();
  params.append("token", token);
  params.append("beneficio", beneficio);

  const response = await fetch(`${BASE_URL}/consultaOffline.php`, {
    method: "POST",
    body: params,
    cache: "no-store",
  });

  const data = await response.json();
  return data;
}

/**
 * Consulta SIAPE Offline pelo CPF
 */
async function consultaOfflineSiape(token: string, cpf: string) {
  const params = new URLSearchParams();
  params.append("token", token);
  params.append("cpf", cpf);

  const response = await fetch(`${BASE_URL}/consultaOfflineSiape.php`, {
    method: "POST",
    body: params,
    cache: "no-store",
  });

  const data = await response.json();
  return data;
}

/**
 * Orquestra todo o fluxo:
 * 1. Pega Token
 * 2. Pega Benefícios do CPF
 * 3. Faz Consulta Offline do 1º benefício
 */
export async function consultarClientePromosys(cpf: string) {
  try {
    const limpo = cpf.replace(/\D/g, "");
    if (!limpo || limpo.length !== 11) {
      throw new Error("CPF inválido");
    }

    const token = await gerarToken();
    const beneficios = await buscarBeneficios(token, limpo);

    if (!beneficios || beneficios.length === 0) {
      // INSS não retornou benefícios. Vamos tentar a API do SIAPE!
      try {
        const siapeResponse = await consultaOfflineSiape(token, limpo);
        
        if (siapeResponse.Code === "000" && Array.isArray(siapeResponse.Consulta) && siapeResponse.Consulta.length > 0) {
          // Busca a matrícula com a melhor margem
          let melhorSiape: any = siapeResponse.Consulta[0];
          let melhorMargemSiape = -1;

          for (const item of siapeResponse.Consulta) {
            const margem = Number(item.MATRICULA?.MargemEmprestimo) || 0;
            if (margem > melhorMargemSiape) {
              melhorMargemSiape = margem;
              melhorSiape = item;
            }
          }

          // Adapta o objeto do SIAPE para o formato do INSS esperado pelo Frontend
          const consultaFormatada = {
            ...melhorSiape,
            ESP: "SIAPE", // Importante para o frontend identificar a label
            MR: melhorSiape.MATRICULA?.RendimentoBruto || "0",
            BENEFICIO: {
              nb: melhorSiape.MATRICULA?.Codigo || "",
              ValorLiberadoMargem: Number(melhorSiape.MATRICULA?.MargemEmprestimo) || 0,
              ValorLiberadoTotal: Number(melhorSiape.MATRICULA?.MargemEmprestimo) || 0,
              valormr: melhorSiape.MATRICULA?.RendimentoBruto || "0",
              situacao: melhorSiape.MATRICULA?.SituacaoFunc || "Ativo",
              MargemCalculadaBen: Number(melhorSiape.MATRICULA?.MargemEmprestimo) || 0,
              MargemCartaoLoas: null,
              ValorConsignado: 0,
              MargemCalculada: String(melhorSiape.MATRICULA?.MargemEmprestimo || 0),
              margemdispcartao: Number(melhorSiape.MATRICULA?.MargemCartaoRmc) || 0,
              ValorRCC: String(melhorSiape.MATRICULA?.MargemCartaoRcc || 0),
              ValorRMC: String(melhorSiape.MATRICULA?.MargemCartaoRmc || 0),
              vlbasecalc: melhorSiape.MATRICULA?.RendimentoBruto || "0",
              pa: "N/A"
            }
          };

          return {
            Code: "000",
            Msg: "Sucesso (SIAPE)",
            Consulta: consultaFormatada,
          };
        }
      } catch (siapeErr) {
        console.error("Erro ao consultar SIAPE:", siapeErr);
      }

      // Se falhar INSS e SIAPE
      return {
        Code: "404",
        Msg: "Nenhum benefício encontrado para o CPF informado (INSS ou SIAPE).",
        Consulta: null,
      };
    }

    // Avalia todos os benefícios retornados para encontrar o válido ou com melhor margem
    let melhorConsulta: any = null;
    let melhorMargem = -1;

    for (const nb of beneficios) {
      try {
        await solicitarBeneficio(token, nb);
        const dadosConsulta = await consultaOffline(token, nb);

        if (dadosConsulta.Code === "000") {
          const consultaObj = dadosConsulta.Consulta || dadosConsulta;
          const margem = Number(consultaObj?.BENEFICIO?.ValorLiberadoMargem) || 0;

          if (margem > melhorMargem) {
            melhorMargem = margem;
            melhorConsulta = dadosConsulta;
          }
        }
      } catch (err) {
        console.error(`Erro ao consultar benefício ${nb}:`, err);
      }
    }

    if (melhorConsulta) {
      return {
        Code: "000",
        Msg: "Sucesso",
        Consulta: melhorConsulta.Consulta || melhorConsulta,
      };
    }

    // Se falhar a busca na lista, tenta uma última consulta no primário
    const dadosConsulta = await consultaOffline(token, beneficios[0]);
    return dadosConsulta;
  } catch (err: unknown) {
    console.error("Erro em consultarClientePromosys:", err);
    return {
      Code: "500",
      Msg: err instanceof Error ? err.message : "Ocorreu um erro ao processar a consulta API.",
      Consulta: null,
    };
  }
}
