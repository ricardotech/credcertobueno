// Gerador de dados fictícios para consulta de CPF
// Gera dados consistentes baseados no CPF fornecido

export interface BeneficioData {
  FormaPagamento: null;
  situacao: string;
  nb: string;
  pa: string;
  bloqemp: string;
  possuirepresentantelegal: string;
  MargemCalculada: string;
  margemdispcartao: number;
  margemdispcartaoBen: number;
  MargemAumento: number;
  MargemIR: null;
  MargensAumentoIR: number;
  IsMargemCalculada: boolean;
  ValorRCC: string;
  ValorRMC: string;
  Bloqueado: boolean;
  valormr: string;
  vlbasecalc: string;
  MargemCalculadaBen: number;
  MargemCartaoLoas: null;
  ValorConsignado: number;
  MaximoComprometimentoPermitido: number;
  TotalComprometido: number;
  DescontoContribuicao: {
    Descricao: string;
    Valor: number;
  };
  ValorLiberadoMargem: number;
  ValorLiberadoTotal: number;
}

export interface ContratoData {
  InicioDesconto?: string;
  FinalDesconto?: string;
  ParcPagas?: string | number;
  Prazo?: string;
  Banco: string;
  Contrato: string;
  dt_averbacao: string;
  SituacaoCode?: string;
  Situacao: string;
  Vl_Emprestimo: string | number;
  Vl_Parcela: string | number;
  Tipo_Emprestimo: number;
  Banco_Nome: string;
  TaxaJuros?: string | null;
  TaxaJurosDefault?: boolean;
  TaxaJurosPonderada?: string;
  TaxaMSG?: string;
  QUITACAOATUAL: string;
  ValorLiberado?: number | null;
  HasBank?: boolean;
}

export interface ConsultaData {
  ENDERECO: string;
  NASCTO: number;
  BAIRRO: string;
  CIDADE: string;
  UF: string;
  CEP: string;
  ESP: string;
  ESP_Consignavel: string;
  FULL_CPF: string;
  CacheDate: number;
  NOME: string;
  MR: string;
  BENEFICIO: BeneficioData;
  DADOS_BANCARIOS: {
    HasSincronismo: boolean;
    AGENCIA: string;
    AGENCIA_COMPLETO: string;
    ENDERECO_AGENCIA: null;
    CONTA: string;
    CONTA_PAGTO: string;
    DIB_FORMATADO: string;
    BANCO: string;
    NOME_BANCO: string;
    NOME_AGENCIA: string;
    END_AGENCIA: null;
    BANCO_PAGTO: string;
    NOME_BANCO_PAGTO: string;
    BANCO_COMPLETO: string;
    NOME_TIPO_PAGTO: string;
  };
  REPRESENTANTE: {
    CPF: null;
    NOME: null;
  };
  CONTRATO: ContratoData[];
  ContratosAtualizadosAte: string;
  IDADE: number;
  UsaSimulacao: boolean;
  Msg: string;
  WHATSAPP_1: string;
  WHATSAPP_1_FORMATADO: string;
  TEL_1: string;
  WHATSAPP_2: string;
  WHATSAPP_2_FORMATADO: string;
  TEL_2: string;
  NaFila: boolean;
  DataUltimaAtualizacao: null;
  Prioridade: {
    HasPriority: boolean;
    Msg: string;
  };
}

export interface MockResponse {
  Code: string;
  Msg: string;
  Consulta: ConsultaData;
}

// Lista de nomes fictícios
const nomes = [
  "MARIA DA SILVA SANTOS",
  "JOÃO PEREIRA OLIVEIRA",
  "ANA PAULA COSTA LIMA",
  "JOSÉ CARLOS SOUZA",
  "FRANCISCA ALVES RODRIGUES",
  "ANTONIO FERNANDES GOMES",
  "LUCINEA FIARES AVELINO",
  "PEDRO HENRIQUE MARTINS",
  "HELENA CRISTINA BARBOSA",
  "MARCOS ANTONIO FERREIRA",
  "ROSA MARIA CARDOSO",
  "SEBASTIÃO JOSE ALMEIDA",
];

const ruas = [
  "RUA DAS FLORES",
  "AV BRASIL",
  "RUA CALAMA",
  "RUA PADRE CICERO",
  "AV PAULISTA",
  "RUA SAO JOSE",
  "RUA SANTOS DUMONT",
  "AV CENTRAL",
];

const bairros = [
  "CENTRO",
  "GUADALUPE",
  "JARDIM AMERICA",
  "VILA NOVA",
  "SAO JOSE",
  "SANTA CRUZ",
  "BOM RETIRO",
  "ALTO DA BOA VISTA",
];

const cidades = [
  { cidade: "RIO DE JANEIRO", uf: "RJ" },
  { cidade: "SAO PAULO", uf: "SP" },
  { cidade: "BELO HORIZONTE", uf: "MG" },
  { cidade: "BRASILIA", uf: "DF" },
  { cidade: "GOIANIA", uf: "GO" },
  { cidade: "ANAPOLIS", uf: "GO" },
];

const bancos = [
  { codigo: "389", nome: "MERCANTIL DO BRASIL" },
  { codigo: "104", nome: "CAIXA ECONOMICA" },
  { codigo: "121", nome: "AGIBANK" },
  { codigo: "623", nome: "PAN" },
  { codigo: "254", nome: "PARANA BANCO" },
  { codigo: "12", nome: "INBURSA" },
];

const especieBeneficios = [
  "32 - APOSENTADORIA POR INVALIDEZ PREVIDENCIARIA",
  "41 - APOSENTADORIA POR IDADE",
  "42 - APOSENTADORIA POR TEMPO DE CONTRIBUICAO",
  "46 - APOSENTADORIA ESPECIAL",
  "21 - PENSAO POR MORTE PREVIDENCIARIA",
];

// Função para gerar número pseudo-aleatório baseado em seed
function seededRandom(seed: number): number {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Função para gerar hash do CPF
function hashCPF(cpf: string): number {
  let hash = 0;
  for (let i = 0; i < cpf.length; i++) {
    hash = (hash << 5) - hash + cpf.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash);
}

// Formata CPF
export function formatCPF(cpf: string): string {
  const cleaned = cpf.replace(/\D/g, "");
  return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

// Valida CPF
export function validateCPF(cpf: string): boolean {
  const cleaned = cpf.replace(/\D/g, "");

  if (cleaned.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(cleaned)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleaned.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleaned.substring(10, 11))) return false;

  return true;
}

// Gera telefone fictício
function gerarTelefone(seed: number, ddd: string): string {
  const numero = Math.floor(seededRandom(seed) * 90000000) + 910000000;
  return `(${ddd}) ${numero.toString().substring(0, 5)}-${numero.toString().substring(5)}`;
}

// Gera data de nascimento baseada na idade
function gerarDataNascimento(idade: number): number {
  const hoje = new Date();
  const anoNasc = hoje.getFullYear() - idade;
  const mesNasc = Math.floor(Math.random() * 12);
  const diaNasc = Math.floor(Math.random() * 28) + 1;
  return new Date(anoNasc, mesNasc, diaNasc).getTime();
}

// Gera contratos fictícios
function gerarContratos(seed: number): ContratoData[] {
  const numContratos = Math.floor(seededRandom(seed) * 5) + 2; // 2 a 6 contratos
  const contratos: ContratoData[] = [];

  for (let i = 0; i < numContratos; i++) {
    const seedContrato = seed + i * 1000;
    const banco = bancos[Math.floor(seededRandom(seedContrato) * bancos.length)];
    const valorEmprestimo = Math.floor(seededRandom(seedContrato + 1) * 3000) + 500;
    const prazo = [60, 72, 84, 96][Math.floor(seededRandom(seedContrato + 2) * 4)];
    const taxa = (1.3 + seededRandom(seedContrato + 3) * 0.5).toFixed(2);
    const valorParcela = Math.floor(valorEmprestimo * (1 + parseFloat(taxa) / 100 * prazo) / prazo);

    const ano = 2023 + Math.floor(seededRandom(seedContrato + 4) * 2);
    const mes = Math.floor(seededRandom(seedContrato + 5) * 12) + 1;
    const dataAverbacao = `${ano}-${mes.toString().padStart(2, "0")}-${Math.floor(seededRandom(seedContrato + 6) * 28 + 1).toString().padStart(2, "0")}`;

    const parcPagas = Math.floor(seededRandom(seedContrato + 7) * 20);
    const inicioDesconto = `${ano}${mes.toString().padStart(2, "0")}`;
    const messFim = mes + prazo;
    const anoFim = ano + Math.floor(messFim / 12);
    const mesFim = messFim % 12 || 12;
    const finalDesconto = `${anoFim}${mesFim.toString().padStart(2, "0")}`;

    const quitacaoAtual = ((prazo - parcPagas) * valorParcela * 0.95).toFixed(2);

    contratos.push({
      InicioDesconto: inicioDesconto,
      FinalDesconto: finalDesconto,
      ParcPagas: parcPagas.toString(),
      Prazo: prazo.toString(),
      Banco: banco.codigo,
      Contrato: Math.floor(seededRandom(seedContrato + 8) * 900000000 + 100000000).toString(),
      dt_averbacao: dataAverbacao,
      SituacaoCode: "1",
      Situacao: "Ativo",
      Vl_Emprestimo: valorEmprestimo.toFixed(2),
      Vl_Parcela: valorParcela.toFixed(2),
      Tipo_Emprestimo: 98,
      Banco_Nome: banco.nome,
      TaxaJuros: taxa,
      TaxaJurosDefault: true,
      TaxaJurosPonderada: taxa,
      TaxaMSG: "Taxa de juros média fixada para este banco, pois não é possível calcularmos a taxa de juros com as informações deste contrato.",
      QUITACAOATUAL: quitacaoAtual,
      ValorLiberado: parseFloat(quitacaoAtual) > 1000 ? -Math.floor(seededRandom(seedContrato + 9) * 500) : null,
    });
  }

  return contratos;
}

// Função principal para gerar dados fictícios
export function gerarDadosFicticios(cpf: string): MockResponse {
  const cpfLimpo = cpf.replace(/\D/g, "");
  const seed = hashCPF(cpfLimpo);

  // Gera dados baseados no CPF
  const nomeIndex = seed % nomes.length;
  const cidadeIndex = seed % cidades.length;
  const ruaIndex = seed % ruas.length;
  const bairroIndex = seed % bairros.length;
  const especieIndex = seed % especieBeneficios.length;

  const cidade = cidades[cidadeIndex];
  const idade = 60 + Math.floor(seededRandom(seed) * 15); // 60 a 75 anos
  const valorMR = (1500 + seededRandom(seed + 1) * 3000).toFixed(2); // R$ 1.500 a R$ 4.500
  const margemDisponivel = parseFloat(valorMR) * 0.35; // 35% de margem consignável
  const valorConsignado = seededRandom(seed + 2) * margemDisponivel * 0.9;
  const margemLiberada = margemDisponivel - valorConsignado;

  const ddd = cidade.uf === "RJ" ? "21" : cidade.uf === "SP" ? "11" : cidade.uf === "GO" ? "62" : "31";

  const contratos = gerarContratos(seed);

  const bancoIndex = seed % bancos.length;
  const banco = bancos[bancoIndex];

  const totalComprometido = contratos.reduce((acc, c) => acc + parseFloat(c.Vl_Parcela.toString()), 0);
  const maximoComprometimento = parseFloat(valorMR) * 0.45;

  return {
    Code: "000",
    Msg: "",
    Consulta: {
      ENDERECO: `${ruas[ruaIndex]} ${Math.floor(seededRandom(seed + 3) * 9000 + 1000).toString().padStart(6, "0")}`,
      NASCTO: gerarDataNascimento(idade),
      BAIRRO: bairros[bairroIndex],
      CIDADE: cidade.cidade,
      UF: cidade.uf,
      CEP: Math.floor(seededRandom(seed + 4) * 90000000 + 10000000).toString().substring(0, 8),
      ESP: especieBeneficios[especieIndex],
      ESP_Consignavel: "S",
      FULL_CPF: cpfLimpo,
      CacheDate: Math.floor(Date.now() / 1000),
      NOME: nomes[nomeIndex],
      MR: valorMR,
      BENEFICIO: {
        FormaPagamento: null,
        situacao: "ATIVO",
        nb: Math.floor(seededRandom(seed + 5) * 900000000 + 1000000000).toString(),
        pa: "Não",
        bloqemp: "Não",
        possuirepresentantelegal: "Não",
        MargemCalculada: margemLiberada.toFixed(2),
        margemdispcartao: 0,
        margemdispcartaoBen: 0,
        MargemAumento: 35,
        MargemIR: null,
        MargensAumentoIR: 35,
        IsMargemCalculada: true,
        ValorRCC: (margemDisponivel * 0.05).toFixed(2),
        ValorRMC: (margemDisponivel * 0.05).toFixed(2),
        Bloqueado: false,
        valormr: valorMR,
        vlbasecalc: valorMR,
        MargemCalculadaBen: margemLiberada,
        MargemCartaoLoas: null,
        ValorConsignado: valorConsignado,
        MaximoComprometimentoPermitido: maximoComprometimento,
        TotalComprometido: totalComprometido,
        DescontoContribuicao: {
          Descricao: "CONTRIBUICAO SINDNAPI",
          Valor: parseFloat(valorMR) * 0.025,
        },
        ValorLiberadoMargem: margemLiberada,
        ValorLiberadoTotal: margemLiberada,
      },
      DADOS_BANCARIOS: {
        HasSincronismo: false,
        AGENCIA: Math.floor(seededRandom(seed + 6) * 9000 + 1000).toString(),
        AGENCIA_COMPLETO: Math.floor(seededRandom(seed + 6) * 9000 + 1000).toString() + " ",
        ENDERECO_AGENCIA: null,
        CONTA: Math.floor(seededRandom(seed + 7) * 90000000 + 10000000).toString(),
        CONTA_PAGTO: Math.floor(seededRandom(seed + 7) * 90000000 + 10000000).toString(),
        DIB_FORMATADO: `${Math.floor(seededRandom(seed + 8) * 28 + 1).toString().padStart(2, "0")}/${Math.floor(seededRandom(seed + 9) * 12 + 1).toString().padStart(2, "0")}/${1990 + Math.floor(seededRandom(seed + 10) * 20)}`,
        BANCO: banco.codigo,
        NOME_BANCO: banco.nome,
        NOME_AGENCIA: "",
        END_AGENCIA: null,
        BANCO_PAGTO: banco.codigo,
        NOME_BANCO_PAGTO: banco.nome,
        BANCO_COMPLETO: `${banco.codigo} ${banco.nome}`,
        NOME_TIPO_PAGTO: "CONTA CORRENTE",
      },
      REPRESENTANTE: {
        CPF: null,
        NOME: null,
      },
      CONTRATO: contratos,
      ContratosAtualizadosAte: new Date().toLocaleDateString("pt-BR"),
      IDADE: idade,
      UsaSimulacao: false,
      Msg: "",
      WHATSAPP_1: "S",
      WHATSAPP_1_FORMATADO: `55${ddd}${Math.floor(seededRandom(seed + 11) * 90000000 + 910000000)}`,
      TEL_1: gerarTelefone(seed + 11, ddd),
      WHATSAPP_2: "S",
      WHATSAPP_2_FORMATADO: `55${ddd}${Math.floor(seededRandom(seed + 12) * 90000000 + 910000000)}`,
      TEL_2: gerarTelefone(seed + 12, ddd),
      NaFila: false,
      DataUltimaAtualizacao: null,
      Prioridade: {
        HasPriority: true,
        Msg: "",
      },
    },
  };
}
