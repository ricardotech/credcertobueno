export interface BeneficioData {
  FormaPagamento: null | string;
  situacao: string;
  nb: string;
  pa: string;
  bloqemp: string;
  possuirepresentantelegal: string;
  MargemCalculada: string;
  margemdispcartao: number;
  margemdispcartaoBen: number;
  MargemAumento: number;
  MargemIR: null | string;
  MargensAumentoIR: number;
  IsMargemCalculada: boolean;
  ValorRCC: string;
  ValorRMC: string;
  Bloqueado: boolean;
  valormr: string;
  vlbasecalc: string;
  MargemCalculadaBen: number;
  MargemCartaoLoas: null | string;
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
    ENDERECO_AGENCIA: null | string;
    CONTA: string;
    CONTA_PAGTO: string;
    DIB_FORMATADO: string;
    BANCO: string;
    NOME_BANCO: string;
    NOME_AGENCIA: string;
    END_AGENCIA: null | string;
    BANCO_PAGTO: string;
    NOME_BANCO_PAGTO: string;
    BANCO_COMPLETO: string;
    NOME_TIPO_PAGTO: string;
  };
  REPRESENTANTE: {
    CPF: null | string;
    NOME: null | string;
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
  DataUltimaAtualizacao: null | string;
  Prioridade: {
    HasPriority: boolean;
    Msg: string;
  };
}

export interface PromosysResponse {
  Code: string;
  Msg: string;
  Consulta: ConsultaData;
}
