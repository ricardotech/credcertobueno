"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import GlobalHeader from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  AlertCircle,
  User,
  CreditCard,
  Building2,
  Phone,
  DollarSign,
  FileText,
  ChevronDown,
  ChevronUp,
  Home,
  ArrowRight,
  ArrowLeft,
  Car,
  Wallet,
} from "lucide-react";
import { formatCPF } from "@/lib/cpf";
import type { PromosysResponse } from "@/types/promosys";
import { consultarClientePromosys } from "@/app/actions/promosys";

function NotFoundView({ cpf, router }: { cpf: string | null; router: ReturnType<typeof useRouter> }) {
  return (
    <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white min-h-screen">
      <GlobalHeader />
      <section className="relative w-full py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
              <AlertCircle className="w-10 h-10 text-orange-500" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-4">
              Benefício Não Localizado
            </h1>
            <p className="text-xl text-[#1C4200]/70 max-w-2xl mx-auto">
              Não encontramos margem livre ou convênio ativo para o CPF{" "}
              <strong>{cpf ? formatCPF(cpf) : ""}</strong>.
              <br />
              <br />
              Mas não se preocupe! Temos excelentes alternativas de crédito em outras modalidades para você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 flex flex-col items-center text-center hover:border-[#8FDB00]/50 transition-colors">
              <div className="w-16 h-16 bg-[#8FDB00]/10 rounded-full flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-[#8FDB00]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C4200] mb-3">
                Garantia de Veículo
              </h3>
              <p className="text-[#1C4200]/70 mb-6 flex-1">
                Use seu carro ou moto quitado como garantia e consiga crédito rápido com taxas super baixas.
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/5562994108686?text=Olá,%20tenho%20interesse%20no%20Empréstimo%20com%20Garantia%20de%20Veículo",
                    "_blank"
                  )
                }
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold"
              >
                <Phone className="w-4 h-4 mr-2" /> Falar no WhatsApp
              </Button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 flex flex-col items-center text-center hover:border-[#8FDB00]/50 transition-colors">
              <div className="w-16 h-16 bg-[#8FDB00]/10 rounded-full flex items-center justify-center mb-6">
                <Home className="w-8 h-8 text-[#8FDB00]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C4200] mb-3">
                Garantia de Imóvel
              </h3>
              <p className="text-[#1C4200]/70 mb-6 flex-1">
                Seu imóvel vale muito! Utilize-o para alavancar um empréstimo maior e com longos prazos.
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/5562994108686?text=Olá,%20tenho%20interesse%20no%20Empréstimo%20com%20Garantia%20de%20Imóvel",
                    "_blank"
                  )
                }
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold"
              >
                <Phone className="w-4 h-4 mr-2" /> Falar no WhatsApp
              </Button>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 flex flex-col items-center text-center hover:border-[#8FDB00]/50 transition-colors">
              <div className="w-16 h-16 bg-[#8FDB00]/10 rounded-full flex items-center justify-center mb-6">
                <Wallet className="w-8 h-8 text-[#8FDB00]" />
              </div>
              <h3 className="text-xl font-bold text-[#1C4200] mb-3">
                Antecipação FGTS
              </h3>
              <p className="text-[#1C4200]/70 mb-6 flex-1">
                Trabalha com carteira assinada ou tem saldo? Antecipe até 10 parcelas do seu Saque-Aniversário.
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://wa.me/5562994108686?text=Olá,%20tenho%20interesse%20na%20Antecipação%20do%20FGTS",
                    "_blank"
                  )
                }
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold"
              >
                <Phone className="w-4 h-4 mr-2" /> Falar no WhatsApp
              </Button>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              onClick={() => router.push("/consulta-online")}
              className="bg-white hover:bg-gray-50 text-[#1C4200] font-bold text-lg py-6 px-8 rounded-xl border-2 border-gray-200"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Fazer Nova Consulta
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function ResultadoContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [dados, setDados] = useState<PromosysResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [expandedContratos, setExpandedContratos] = useState(false);
  const [errorType, setErrorType] = useState<"not-found" | null>(null);

  useEffect(() => {
    const cpf = searchParams.get("cpf");

    if (!cpf) {
      router.push("/consulta-online");
      return;
    }

    async function buscar() {
      try {
        const response = await consultarClientePromosys(cpf as string);
        if (response.Code === "000" || response.Code === "100") {
          setDados(response as PromosysResponse);
        } else if (response.Code === "404") {
          setErrorType("not-found");
        } else {
          alert(response.Msg || "Não foi possível resgatar os dados do benefício.");
          router.push("/consulta-online");
        }
      } catch (err) {
        console.error("Erro na consulta API:", err);
        alert("Erro processando a consulta. Tente novamente.");
        router.push("/consulta-online");
      } finally {
        setLoading(false);
      }
    }
    
    buscar();
  }, [searchParams, router]);

  if (loading) {
    return (
      <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white min-h-screen">
        <GlobalHeader />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <div className="w-20 h-20 border-8 border-[#8FDB00]/20 border-t-[#8FDB00] rounded-full animate-spin mx-auto mb-8"></div>
            <h2 className="text-3xl font-bold text-[#1C4200] mb-4">
              Consultando seus dados...
            </h2>
            <p className="text-xl text-[#1C4200]/70">
              Aguarde enquanto buscamos suas informações
            </p>
          </div>
        </div>
      </main>
    );
  }

  if (errorType === "not-found") {
    return <NotFoundView cpf={searchParams.get("cpf")} router={router} />;
  }

  if (!dados) {
    return null;
  }

  const { Consulta } = dados;
  const margemDisponivel = Consulta.BENEFICIO.ValorLiberadoMargem;
  const margemTotal = parseFloat(Consulta.MR) * 0.35;
  const percentualDisponivel = (margemDisponivel / margemTotal) * 100;

  // Determinar se é SIAPE por palavras-chave ou tamanho do ID de benefício
  const isSiape = Consulta.ESP?.toLowerCase().includes("siape") || 
                  Consulta.ESP?.toLowerCase().includes("federal") || 
                  Consulta.ESP?.toLowerCase().includes("servidor") || 
                  String(Consulta.BENEFICIO?.nb || "").length < 10;

  return (
    <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white">
      <GlobalHeader />

      {/* Hero Section - Resultado */}
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-[#8FDB00]/20 text-[#1C4200] px-6 py-3 rounded-full mb-6">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-semibold text-lg">Consulta Realizada</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1C4200] mb-4">
              Resultado da Consulta
            </h1>
            <p className="text-xl text-[#1C4200]/70">
              Confira abaixo todos os detalhes do seu benefício
            </p>
          </motion.div>
        </div>
      </section>

      {/* Margem Disponível - Destaque */}
      <section className="relative w-full py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-[#8FDB00]/30"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#1C4200] mb-2">
                Margem de Empréstimo Disponível
              </h2>
              <p className="text-[#1C4200]/70">
                Valor disponível para novo empréstimo
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Valor Disponível */}
              <div className="lg:col-span-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#8FDB00]/10 rounded-full mb-4">
                  <DollarSign className="w-10 h-10 text-[#8FDB00]" />
                </div>
                <p className="text-lg text-[#1C4200]/70 mb-2">
                  MARGEM DE EMPRÉSTIMO DISPONIVEL
                </p>
                <p className="text-5xl font-bold text-[#1C4200]">
                  R$ {margemDisponivel.toFixed(2).replace(".", ",")}
                </p>
              </div>

              {/* Barra de Progresso */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-[#1C4200]/70">
                    <span>Margem Utilizada</span>
                    <span>Margem Total</span>
                  </div>
                  <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${100 - percentualDisponivel}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-[#FF6B6B] to-[#FFA500]"
                    ></motion.div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-[#F9FAFB] p-4 rounded-xl">
                      <p className="text-sm text-[#1C4200]/70 mb-1">
                        Margem Utilizada
                      </p>
                      <p className="text-xl font-bold text-[#1C4200]">
                        R${" "}
                        {Consulta.BENEFICIO.ValorConsignado.toFixed(2).replace(
                          ".",
                          ","
                        )}
                      </p>
                    </div>
                    <div className="bg-[#F9FAFB] p-4 rounded-xl">
                      <p className="text-sm text-[#1C4200]/70 mb-1">
                        Margem Total
                      </p>
                      <p className="text-xl font-bold text-[#1C4200]">
                        R$ {margemTotal.toFixed(2).replace(".", ",")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {margemDisponivel > 100 ? (
              <div className="mt-8 bg-gradient-to-br from-[#1C4200] to-[#2d6800] p-8 rounded-2xl shadow-2xl border-4 border-[#8FDB00]">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8FDB00] rounded-full mb-4 shadow-lg">
                    <CheckCircle2 className="w-9 h-9 text-[#1C4200]" />
                  </div>
                  <div className="inline-block bg-[#8FDB00] text-[#1C4200] text-sm font-extrabold px-4 py-1 rounded-full uppercase tracking-widest mb-3">
                    PRÉ-APROVADO
                  </div>
                  <h3 className="text-3xl font-extrabold text-white mb-2">
                    Parabéns! Você foi APROVADO!
                  </h3>
                  <p className="text-white/80 text-base mb-6 max-w-md mx-auto">
                    Sua análise foi concluída e você está elegível para contratar seu empréstimo consignado agora mesmo. Não perca essa oportunidade!
                  </p>
                  <Button
                    onClick={() =>
                      router.push(
                        `/consulta-online/contratar?cpf=${Consulta.FULL_CPF}`
                      )
                    }
                    className="bg-[#8FDB00] hover:bg-[#9FEB10] text-black font-extrabold text-xl py-7 px-12 rounded-xl shadow-xl hover:scale-105 transition-all w-full sm:w-auto"
                  >
                    QUERO CONTRATAR AGORA
                    <ArrowRight className="w-6 h-6 ml-2" />
                  </Button>
                  <p className="text-white/50 text-xs mt-4">
                    Contratação 100% digital e sem burocracia
                  </p>
                </div>
              </div>
            ) : (
              <div className="mt-8 bg-orange-50 border-2 border-orange-300 p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-orange-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-orange-900 mb-2">
                      Margem comprometida
                    </h3>
                    <p className="text-orange-800">
                      No momento você não possui margem disponível para novos
                      empréstimos. Entre em contato para verificar outras
                      opções.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Dados Pessoais */}
      <section className="relative w-full py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1C4200] mb-6 flex items-center gap-3">
              <User className="w-8 h-8 text-[#8FDB00]" />
              Dados Pessoais
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">Nome Completo</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.NOME}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">CPF</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {formatCPF(Consulta.FULL_CPF)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">Idade</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.IDADE} anos
                  </p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-sm text-[#1C4200]/60 mb-1">Endereço</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.ENDERECO}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">Bairro</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.BAIRRO}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">Cidade/UF</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.CIDADE} - {Consulta.UF}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">CEP</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.CEP.replace(/(\d{5})(\d{3})/, "$1-$2")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dados do Benefício */}
      <section className="relative w-full py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1C4200] mb-6 flex items-center gap-3">
              <CreditCard className="w-8 h-8 text-[#8FDB00]" />
              Dados do Benefício {isSiape ? "Federal (SIAPE)" : "INSS"}
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">
                    {isSiape ? "Matrícula SIAPE" : "Número do Benefício"}
                  </p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.BENEFICIO.nb}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">Situação</p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="text-lg font-semibold text-[#1C4200]">
                      {Consulta.BENEFICIO.situacao}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">
                    Valor do Benefício
                  </p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    R$ {parseFloat(Consulta.MR).toFixed(2).replace(".", ",")}
                  </p>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                  <p className="text-sm text-[#1C4200]/60 mb-1">Espécie</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.ESP}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dados Bancários */}
      <section className="relative w-full py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-[#1C4200] mb-6 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-[#8FDB00]" />
              Dados Bancários
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-sm text-[#1C4200]/60 mb-1">Banco</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.DADOS_BANCARIOS.BANCO_COMPLETO}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">Tipo de Conta</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.DADOS_BANCARIOS.NOME_TIPO_PAGTO}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">Agência</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.DADOS_BANCARIOS.AGENCIA}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">Conta</p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.DADOS_BANCARIOS.CONTA}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-[#1C4200]/60 mb-1">
                    Data Início Benefício
                  </p>
                  <p className="text-lg font-semibold text-[#1C4200]">
                    {Consulta.DADOS_BANCARIOS.DIB_FORMATADO}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contratos Ativos */}
      {Consulta.CONTRATO && Consulta.CONTRATO.length > 0 && (
        <section className="relative w-full py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-[#1C4200] flex items-center gap-3">
                  <FileText className="w-8 h-8 text-[#8FDB00]" />
                  Contratos Ativos ({Consulta.CONTRATO.length})
                </h2>
                <Button
                  onClick={() => setExpandedContratos(!expandedContratos)}
                  className="bg-[#8FDB00]/10 hover:bg-[#8FDB00]/20 text-[#1C4200] font-semibold"
                >
                  {expandedContratos ? (
                    <>
                      Ocultar <ChevronUp className="w-5 h-5 ml-2" />
                    </>
                  ) : (
                    <>
                      Ver Todos <ChevronDown className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </div>

              <div className="space-y-4">
                {Consulta.CONTRATO.slice(
                  0,
                  expandedContratos ? undefined : 3
                ).map((contrato, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-all"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                      <div className="lg:col-span-1">
                        <p className="text-sm text-[#1C4200]/60 mb-1">Banco</p>
                        <p className="text-lg font-semibold text-[#1C4200]">
                          {contrato.Banco_Nome}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-[#1C4200]/60 mb-1">
                          Contrato
                        </p>
                        <p className="text-lg font-semibold text-[#1C4200]">
                          {contrato.Contrato}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-[#1C4200]/60 mb-1">
                          Valor Parcela
                        </p>
                        <p className="text-lg font-semibold text-[#1C4200]">
                          R${" "}
                          {parseFloat(contrato.Vl_Parcela.toString())
                            .toFixed(2)
                            .replace(".", ",")}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-[#1C4200]/60 mb-1">
                          Quitação Atual
                        </p>
                        <p className="text-lg font-semibold text-[#8FDB00]">
                          R${" "}
                          {parseFloat(contrato.QUITACAOATUAL)
                            .toFixed(2)
                            .replace(".", ",")}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {!expandedContratos && Consulta.CONTRATO.length > 3 && (
                <div className="mt-4 text-center">
                  <p className="text-[#1C4200]/60">
                    +{Consulta.CONTRATO.length - 3} contratos não exibidos
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative w-full py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-[#1C4200] to-[#2d6800] rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-2">
              {margemDisponivel > 100 ? "Você foi APROVADO!" : "Pronto para Contratar?"}
            </h2>
            {margemDisponivel > 100 && (
              <div className="inline-block bg-[#8FDB00] text-[#1C4200] text-sm font-extrabold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
                PRÉ-APROVADO
              </div>
            )}
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {margemDisponivel > 100
                ? "Sua análise foi concluída com sucesso! Finalize sua contratação agora e receba seu dinheiro rapidinho."
                : "Entre em contato conosco para verificar outras opções disponíveis para você."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {margemDisponivel > 100 ? (
                <Button
                  onClick={() =>
                    router.push(
                      `/consulta-online/contratar?cpf=${Consulta.FULL_CPF}`
                    )
                  }
                  className="bg-[#8FDB00] hover:bg-[#9FEB10] text-black font-extrabold text-xl py-8 px-12 rounded-xl shadow-xl hover:scale-105 transition-all"
                >
                  QUERO CONTRATAR AGORA
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              ) : null}
              <Button
                onClick={() => router.push("/consulta-online")}
                className="bg-white/10 hover:bg-white/20 text-white font-bold text-xl py-8 px-12 rounded-xl border-2 border-white/30 hover:scale-105 transition-all"
              >
                <Home className="w-6 h-6 mr-2" />
                Nova Consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ResultadoPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white min-h-screen">
          <GlobalHeader />
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="text-center">
              <div className="w-20 h-20 border-8 border-[#8FDB00]/20 border-t-[#8FDB00] rounded-full animate-spin mx-auto mb-8"></div>
              <h2 className="text-3xl font-bold text-[#1C4200]">
                Carregando...
              </h2>
            </div>
          </div>
        </main>
      }
    >
      <ResultadoContent />
    </Suspense>
  );
}
