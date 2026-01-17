// Dados mocados para o painel administrativo
// Lista de 50 CPFs válidos com seus resultados

import { gerarDadosFicticios, formatCPF, type MockResponse } from "./mockDataGenerator";

// Lista de 50 CPFs válidos gerados
export const MOCK_CPFS = [
  "12345678909",
  "98765432100",
  "11122233344",
  "55566677788",
  "99988877766",
  "12312312312",
  "45645645645",
  "78978978978",
  "32132132132",
  "65465465465",
  "14714714714",
  "25825825825",
  "36936936936",
  "74174174174",
  "85285285285",
  "96396396396",
  "15915915915",
  "35735735735",
  "75375375375",
  "95195195195",
  "10210210210",
  "20320320320",
  "30430430430",
  "40540540540",
  "50650650650",
  "60760760760",
  "70870870870",
  "80980980980",
  "91091091091",
  "12412412412",
  "23523523523",
  "34634634634",
  "45745745745",
  "56856856856",
  "67967967967",
  "78078078078",
  "89189189189",
  "90290290290",
  "11211211211",
  "22322322322",
  "33433433433",
  "44544544544",
  "55655655655",
  "66766766766",
  "77877877877",
  "88988988988",
  "10310310310",
  "20420420420",
  "30530530530",
  "40640640640",
];

// Interface para item da lista do admin
export interface AdminCPFItem {
  id: string;
  cpf: string;
  cpfFormatted: string;
  nome: string;
  idade: number;
  cidade: string;
  uf: string;
  margemDisponivel: number;
  valorBeneficio: number;
  situacao: string;
  numeroBeneficio: string;
  dataConsulta: string;
  hasMargemDisponivel: boolean;
}

// Gera lista de itens para o admin
export function gerarListaAdmin(): AdminCPFItem[] {
  const hoje = new Date();

  return MOCK_CPFS.map((cpf, index) => {
    const dados = gerarDadosFicticios(cpf);
    const consulta = dados.Consulta;
    const beneficio = consulta.BENEFICIO;

    // Varia a data da consulta nos últimos 30 dias
    const dataConsulta = new Date(hoje);
    dataConsulta.setDate(dataConsulta.getDate() - (index % 30));

    return {
      id: `${cpf}-${index}`,
      cpf: cpf,
      cpfFormatted: formatCPF(cpf),
      nome: consulta.NOME,
      idade: consulta.IDADE,
      cidade: consulta.CIDADE,
      uf: consulta.UF,
      margemDisponivel: beneficio.ValorLiberadoMargem,
      valorBeneficio: parseFloat(consulta.MR),
      situacao: beneficio.situacao,
      numeroBeneficio: beneficio.nb,
      dataConsulta: dataConsulta.toLocaleDateString("pt-BR"),
      hasMargemDisponivel: beneficio.ValorLiberadoMargem > 100,
    };
  });
}

// Busca dados completos de um CPF
export function buscarDadosCompletoCPF(cpf: string): MockResponse {
  const cpfLimpo = cpf.replace(/\D/g, "");
  return gerarDadosFicticios(cpfLimpo);
}

// Estatísticas do dashboard
export interface DashboardStats {
  totalCPFs: number;
  cpfsComMargem: number;
  cpfsSemMargem: number;
  margemTotalDisponivel: number;
  ticketMedio: number;
  consultasHoje: number;
  consultasSemana: number;
  consultasMes: number;
}

export function calcularEstatisticas(): DashboardStats {
  const lista = gerarListaAdmin();
  const hoje = new Date();
  const inicioSemana = new Date(hoje);
  inicioSemana.setDate(hoje.getDate() - 7);
  const inicioMes = new Date(hoje);
  inicioMes.setDate(hoje.getDate() - 30);

  const cpfsComMargem = lista.filter((item) => item.hasMargemDisponivel);
  const margemTotal = cpfsComMargem.reduce(
    (acc, item) => acc + item.margemDisponivel,
    0
  );

  return {
    totalCPFs: lista.length,
    cpfsComMargem: cpfsComMargem.length,
    cpfsSemMargem: lista.length - cpfsComMargem.length,
    margemTotalDisponivel: margemTotal,
    ticketMedio: margemTotal / cpfsComMargem.length,
    consultasHoje: Math.floor(lista.length * 0.1),
    consultasSemana: Math.floor(lista.length * 0.4),
    consultasMes: lista.length,
  };
}
