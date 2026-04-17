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
      return {
        Code: "404",
        Msg: "Nenhum benefício encontrado para o CPF informado.",
        Consulta: null,
      };
    }

    // Solicita o benefício para processar e consulta
    const principalNb = beneficios[0];

    // O Fluxo Offline às vezes exige invocar solicitarBeneficio antes, pode dar Code: 100
    await solicitarBeneficio(token, principalNb);

    // Na sequência faz a consulta offline
    const dadosConsulta = await consultaOffline(token, principalNb);

    if (dadosConsulta.Code === "000") {
      // Se a estrutura que vier não bater perfeitamente com a que a interface espera,
      // será necessário remapear ou a UI deverá ser iterada para tratar os campos.
      // O frontend mockado usava campos ex: Consulta.BENEFICIO.ValorLiberadoMargem
      // Que parece ser a estrutura real deles.
      return {
        Code: "000",
        Msg: "Sucesso",
        Consulta: dadosConsulta.Consulta || dadosConsulta, // Trata variação caso o PHP não envelope em "Consulta": {}
      };
    }

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
