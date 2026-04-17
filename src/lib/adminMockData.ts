import { formatCPF } from "./cpf";
import type { PromosysResponse } from "@/types/promosys";

export const MOCK_CPFS = ["12345678909", "98765432100"];

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

export function gerarListaAdmin(): AdminCPFItem[] {
  return [
    {
      id: "1",
      cpf: "12345678909",
      cpfFormatted: "123.456.789-09",
      nome: "Cliente API Real",
      idade: 45,
      cidade: "São Paulo",
      uf: "SP",
      margemDisponivel: 1500,
      valorBeneficio: 3500,
      situacao: "Ativo",
      numeroBeneficio: "123456",
      dataConsulta: new Date().toLocaleDateString("pt-BR"),
      hasMargemDisponivel: true,
    }
  ];
}

export function buscarDadosCompletoCPF(cpf: string): any {
  return null;
}

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
  return {
    totalCPFs: 1,
    cpfsComMargem: 1,
    cpfsSemMargem: 0,
    margemTotalDisponivel: 1500,
    ticketMedio: 1500,
    consultasHoje: 1,
    consultasSemana: 1,
    consultasMes: 1,
  };
}
