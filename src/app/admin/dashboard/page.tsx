"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import {
  LogOut,
  Search,
  Upload,
  Users,
  DollarSign,
  FileText,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import {
  gerarListaAdmin,
  calcularEstatisticas,
  buscarDadosCompletoCPF,
  type AdminCPFItem,
} from "@/lib/adminMockData";
import { formatCPF } from "@/lib/cpf";
import type { PromosysResponse } from "@/types/promosys";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [cpfList, setCpfList] = useState<AdminCPFItem[]>([]);
  const [filteredList, setFilteredList] = useState<AdminCPFItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"todos" | "com-margem" | "sem-margem">("todos");
  const [selectedCPF, setSelectedCPF] = useState<PromosysResponse | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [importText, setImportText] = useState("");
  const [stats, setStats] = useState(calcularEstatisticas());

  useEffect(() => {
    setMounted(true);

    // Verifica autenticação fake
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("admin_token");
      if (!token) {
        router.push("/admin");
        return;
      }
    }

    // Carrega dados
    const dados = gerarListaAdmin();
    setCpfList(dados);
    setFilteredList(dados);
  }, [router]);

  useEffect(() => {
    let filtered = cpfList;

    // Filtro por texto
    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.cpfFormatted.includes(searchTerm) ||
          item.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.cidade.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtro por status
    if (filterStatus === "com-margem") {
      filtered = filtered.filter((item) => item.hasMargemDisponivel);
    } else if (filterStatus === "sem-margem") {
      filtered = filtered.filter((item) => !item.hasMargemDisponivel);
    }

    setFilteredList(filtered);
  }, [searchTerm, filterStatus, cpfList]);

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_user");
    router.push("/admin");
  };

  const handleViewDetails = (cpf: string) => {
    const dados = buscarDadosCompletoCPF(cpf);
    setSelectedCPF(dados);
    setDialogOpen(true);
  };

  const handleImportCPFs = () => {
    if (!importText.trim()) return;

    // Simula importação de CPFs
    const cpfs = importText
      .split(/[\n,;]/)
      .map((c) => c.trim().replace(/\D/g, ""))
      .filter((c) => c.length === 11);

    if (cpfs.length === 0) {
      alert("Nenhum CPF válido encontrado");
      return;
    }

    alert(`${cpfs.length} CPF(s) importado(s) com sucesso!`);
    setImportDialogOpen(false);
    setImportText("");

    // Recarrega dados (na prática, adicionaria os novos CPFs)
    const novosStats = calcularEstatisticas();
    setStats(novosStats);
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-[#F9FAFB] to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-[#1C4200]">
                Painel Administrativo
              </h1>
              <p className="text-sm text-[#1C4200]/70 mt-1">
                Bem-vindo, {typeof window !== "undefined" && localStorage.getItem("admin_user")}
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-2 border-[#1C4200]/20 hover:bg-red-50 hover:border-red-300 hover:text-red-600"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="border-2 border-[#8FDB00]/20 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#1C4200]/70">
                  Total de CPFs
                </CardTitle>
                <Users className="h-5 w-5 text-[#8FDB00]" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#1C4200]">
                  {stats.totalCPFs}
                </div>
                <p className="text-xs text-[#1C4200]/60 mt-1">
                  CPFs cadastrados
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="border-2 border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#1C4200]/70">
                  Com Margem
                </CardTitle>
                <CheckCircle2 className="h-5 w-5 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">
                  {stats.cpfsComMargem}
                </div>
                <p className="text-xs text-[#1C4200]/60 mt-1">
                  {((stats.cpfsComMargem / stats.totalCPFs) * 100).toFixed(0)}%
                  do total
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="border-2 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#1C4200]/70">
                  Sem Margem
                </CardTitle>
                <XCircle className="h-5 w-5 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-orange-600">
                  {stats.cpfsSemMargem}
                </div>
                <p className="text-xs text-[#1C4200]/60 mt-1">
                  {((stats.cpfsSemMargem / stats.totalCPFs) * 100).toFixed(0)}%
                  do total
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Card className="border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-[#1C4200]/70">
                  Margem Total
                </CardTitle>
                <DollarSign className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">
                  {formatCurrency(stats.margemTotalDisponivel)}
                </div>
                <p className="text-xs text-[#1C4200]/60 mt-1">
                  Ticket: {formatCurrency(stats.ticketMedio)}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="bg-white rounded-xl shadow-md p-6 mb-6 border-2 border-gray-100"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex-1 w-full lg:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar por CPF, nome ou cidade..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-2"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setFilterStatus("todos")}
                variant={filterStatus === "todos" ? "default" : "outline"}
                className={
                  filterStatus === "todos"
                    ? "bg-[#8FDB00] hover:bg-[#7BC700] text-black"
                    : ""
                }
              >
                Todos ({cpfList.length})
              </Button>
              <Button
                onClick={() => setFilterStatus("com-margem")}
                variant={filterStatus === "com-margem" ? "default" : "outline"}
                className={
                  filterStatus === "com-margem"
                    ? "bg-green-600 hover:bg-green-700 text-white"
                    : "border-green-300 text-green-700 hover:bg-green-50"
                }
              >
                Com Margem ({stats.cpfsComMargem})
              </Button>
              <Button
                onClick={() => setFilterStatus("sem-margem")}
                variant={filterStatus === "sem-margem" ? "default" : "outline"}
                className={
                  filterStatus === "sem-margem"
                    ? "bg-orange-600 hover:bg-orange-700 text-white"
                    : "border-orange-300 text-orange-700 hover:bg-orange-50"
                }
              >
                Sem Margem ({stats.cpfsSemMargem})
              </Button>
            </div>

            <Button
              onClick={() => setImportDialogOpen(true)}
              className="bg-[#1C4200] hover:bg-[#2d6800] text-white"
            >
              <Upload className="w-4 h-4 mr-2" />
              Importar CPFs
            </Button>
          </div>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-white rounded-xl shadow-md border-2 border-gray-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-[#F9FAFB] hover:bg-[#F9FAFB]">
                  <TableHead className="font-bold text-[#1C4200]">CPF</TableHead>
                  <TableHead className="font-bold text-[#1C4200]">Nome</TableHead>
                  <TableHead className="font-bold text-[#1C4200]">Idade</TableHead>
                  <TableHead className="font-bold text-[#1C4200]">Cidade/UF</TableHead>
                  <TableHead className="font-bold text-[#1C4200]">Margem Disponível</TableHead>
                  <TableHead className="font-bold text-[#1C4200]">Status</TableHead>
                  <TableHead className="font-bold text-[#1C4200]">Data Consulta</TableHead>
                  <TableHead className="font-bold text-[#1C4200] text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredList.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center py-12 text-[#1C4200]/60">
                      Nenhum CPF encontrado
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredList.map((item) => (
                    <TableRow key={item.id} className="hover:bg-[#F9FAFB]/50">
                      <TableCell className="font-mono text-sm">
                        {item.cpfFormatted}
                      </TableCell>
                      <TableCell className="font-medium">{item.nome}</TableCell>
                      <TableCell>{item.idade} anos</TableCell>
                      <TableCell>
                        {item.cidade}/{item.uf}
                      </TableCell>
                      <TableCell className="font-bold text-green-600">
                        {formatCurrency(item.margemDisponivel)}
                      </TableCell>
                      <TableCell>
                        {item.hasMargemDisponivel ? (
                          <Badge variant="success" className="gap-1">
                            <CheckCircle2 className="w-3 h-3" />
                            Disponível
                          </Badge>
                        ) : (
                          <Badge variant="warning" className="gap-1">
                            <XCircle className="w-3 h-3" />
                            Indisponível
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-[#1C4200]/70">
                        {item.dataConsulta}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button
                          onClick={() => handleViewDetails(item.cpf)}
                          size="sm"
                          variant="outline"
                          className="border-[#8FDB00] text-[#1C4200] hover:bg-[#8FDB00]/10"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          Ver
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination Info */}
          <div className="border-t border-gray-200 px-6 py-4 bg-[#F9FAFB]">
            <p className="text-sm text-[#1C4200]/70">
              Mostrando <strong>{filteredList.length}</strong> de{" "}
              <strong>{cpfList.length}</strong> CPFs
            </p>
          </div>
        </motion.div>
      </div>

      {/* Dialog - Detalhes do CPF */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#1C4200]">
              Detalhes da Consulta
            </DialogTitle>
            <DialogDescription>
              Informações completas do beneficiário
            </DialogDescription>
          </DialogHeader>

          {selectedCPF && (
            <div className="space-y-6">
              {/* Dados Pessoais */}
              <div>
                <h3 className="text-lg font-bold text-[#1C4200] mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#8FDB00]" />
                  Dados Pessoais
                </h3>
                <div className="grid grid-cols-2 gap-4 bg-[#F9FAFB] p-4 rounded-lg">
                  <div>
                    <p className="text-sm text-[#1C4200]/60">Nome</p>
                    <p className="font-semibold text-[#1C4200]">
                      {selectedCPF.Consulta.NOME}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#1C4200]/60">CPF</p>
                    <p className="font-semibold text-[#1C4200] font-mono">
                      {formatCPF(selectedCPF.Consulta.FULL_CPF)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#1C4200]/60">Idade</p>
                    <p className="font-semibold text-[#1C4200]">
                      {selectedCPF.Consulta.IDADE} anos
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-[#1C4200]/60">Cidade/UF</p>
                    <p className="font-semibold text-[#1C4200]">
                      {selectedCPF.Consulta.CIDADE}/{selectedCPF.Consulta.UF}
                    </p>
                  </div>
                </div>
              </div>

              {/* Margem Disponível */}
              <div>
                <h3 className="text-lg font-bold text-[#1C4200] mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-[#8FDB00]" />
                  Margem Disponível
                </h3>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-200">
                  <p className="text-sm text-[#1C4200]/70 mb-2">
                    Valor Disponível para Empréstimo
                  </p>
                  <p className="text-4xl font-bold text-green-600">
                    {formatCurrency(
                      selectedCPF.Consulta.BENEFICIO.ValorLiberadoMargem
                    )}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-[#1C4200]/60">Valor Benefício</p>
                      <p className="font-bold text-[#1C4200]">
                        {formatCurrency(parseFloat(selectedCPF.Consulta.MR))}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-[#1C4200]/60">Valor Consignado</p>
                      <p className="font-bold text-orange-600">
                        {formatCurrency(
                          selectedCPF.Consulta.BENEFICIO.ValorConsignado
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contratos */}
              {selectedCPF.Consulta.CONTRATO &&
                selectedCPF.Consulta.CONTRATO.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-[#1C4200] mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-[#8FDB00]" />
                      Contratos Ativos ({selectedCPF.Consulta.CONTRATO.length})
                    </h3>
                    <div className="space-y-2">
                      {selectedCPF.Consulta.CONTRATO.slice(0, 3).map(
                        (contrato, index) => (
                          <div
                            key={index}
                            className="bg-[#F9FAFB] p-4 rounded-lg border border-gray-200"
                          >
                            <div className="grid grid-cols-3 gap-4">
                              <div>
                                <p className="text-xs text-[#1C4200]/60">Banco</p>
                                <p className="font-semibold text-[#1C4200] text-sm">
                                  {contrato.Banco_Nome}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-[#1C4200]/60">
                                  Valor Parcela
                                </p>
                                <p className="font-semibold text-[#1C4200] text-sm">
                                  {formatCurrency(
                                    parseFloat(contrato.Vl_Parcela.toString())
                                  )}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-[#1C4200]/60">Quitação</p>
                                <p className="font-semibold text-green-600 text-sm">
                                  {formatCurrency(
                                    parseFloat(contrato.QUITACAOATUAL)
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                      {selectedCPF.Consulta.CONTRATO.length > 3 && (
                        <p className="text-sm text-[#1C4200]/60 text-center">
                          +{selectedCPF.Consulta.CONTRATO.length - 3} contratos
                          não exibidos
                        </p>
                      )}
                    </div>
                  </div>
                )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Dialog - Importar CPFs */}
      <Dialog open={importDialogOpen} onOpenChange={setImportDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#1C4200]">
              Importar CPFs
            </DialogTitle>
            <DialogDescription>
              Cole uma lista de CPFs separados por linha, vírgula ou ponto e vírgula
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="123.456.789-09&#10;987.654.321-00&#10;111.222.333-44"
              className="w-full h-64 p-4 border-2 border-gray-300 rounded-lg focus:border-[#8FDB00] focus:outline-none font-mono text-sm"
            />

            <div className="flex gap-3 justify-end">
              <Button
                onClick={() => setImportDialogOpen(false)}
                variant="outline"
              >
                Cancelar
              </Button>
              <Button
                onClick={handleImportCPFs}
                className="bg-[#8FDB00] hover:bg-[#7BC700] text-black"
              >
                <Upload className="w-4 h-4 mr-2" />
                Importar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}
