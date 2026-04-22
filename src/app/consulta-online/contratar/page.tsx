"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import GlobalHeader from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowLeft,
  Calculator,
  FileText,
  User,
  Phone,
  Mail,
  Shield,
  AlertCircle,
  Award,
  Sparkles,
} from "lucide-react";
import { formatCPF } from "@/lib/cpf";
import type { PromosysResponse } from "@/types/promosys";
import { consultarClientePromosys } from "@/app/actions/promosys";

function ContratarContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [dados, setDados] = useState<PromosysResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulação de empréstimo
  const [valorDesejado, setValorDesejado] = useState(0);
  const [prazo, setPrazo] = useState(84);
  const [taxa] = useState(1.65);

  // Formulário
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    telefone: "",
    confirmaEndereco: true,
    aceitaTermos: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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
          const dadosReais = response as PromosysResponse;
          setDados(dadosReais);

          const margemDisponivel = dadosReais?.Consulta?.BENEFICIO?.ValorLiberadoMargem || 0;
          if (margemDisponivel > 100) {
            setValorDesejado(Math.floor(margemDisponivel * 0.5));
          }
        } else {
          alert(response.Msg || "Não foi possível resgatar os dados do benefício.");
          router.push("/consulta-online");
        }
      } catch (err) {
        console.error("Erro na consulta API:", err);
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
              Carregando simulação...
            </h2>
          </div>
        </div>
      </main>
    );
  }

  if (!dados) {
    return null;
  }

  const { Consulta } = dados;
  const margemDisponivel = Consulta.BENEFICIO.ValorLiberadoMargem;

  const isSiape = Consulta.ESP === "SIAPE";

  // Para SIAPE: taxa 1,80% e prazo fixo de 96 meses
  // Para INSS: usa taxa e prazo do estado
  const taxaEfetiva = isSiape ? 1.8 : taxa;
  const prazoEfetivo = isSiape ? 96 : prazo;

  // Cálculos do empréstimo
  const taxaDecimal = taxaEfetiva / 100;
  const fatorMultiplicador = Math.pow(1 + taxaDecimal, prazoEfetivo);

  // SIAPE: margemDisponivel É a parcela (desconto em folha), calcula o valor do empréstimo
  // INSS: margemDisponivel é o teto; usuário escolhe quanto pegar e calculamos a parcela
  const parcelaMensal = isSiape
    ? margemDisponivel
    : (valorDesejado * taxaDecimal * fatorMultiplicador) / (fatorMultiplicador - 1);

  const valorEmprestimo = isSiape
    ? (margemDisponivel * (fatorMultiplicador - 1)) / (taxaDecimal * fatorMultiplicador)
    : valorDesejado;

  const totalAPagar = parcelaMensal * prazoEfetivo;
  const totalJuros = totalAPagar - valorEmprestimo;
  const cetAno = Math.pow(1 + taxaDecimal, 12) - 1;

  const handleValorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = parseFloat(e.target.value) || 0;
    setValorDesejado(Math.min(valor, margemDisponivel));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Prepara os dados para o e-mail
      const payload = {
        formData,
        simulationData: {
          valorEmprestimo,
          prazo: prazoEfetivo,
          parcela: parcelaMensal,
          taxa: taxaEfetiva,
          totalPagar: totalAPagar,
        },
        clientData: {
          nome: Consulta.NOME,
          cpf: Consulta.FULL_CPF,
          idade: Consulta.IDADE,
          endereco: Consulta.ENDERECO,
          bairro: Consulta.BAIRRO,
          cidade: Consulta.CIDADE,
          uf: Consulta.UF,
          cep: Consulta.CEP,
          beneficioNb: Consulta.BENEFICIO.nb,
          beneficioSituacao: Consulta.BENEFICIO.situacao,
          especie: Consulta.ESP,
          bancoCompleto: Consulta.DADOS_BANCARIOS?.BANCO_COMPLETO || "Não informado",
          agencia: Consulta.DADOS_BANCARIOS?.AGENCIA || "Não informada",
          conta: Consulta.DADOS_BANCARIOS?.CONTA || "Não informada",
          tipoConta: Consulta.DADOS_BANCARIOS?.NOME_TIPO_PAGTO || "Não informado",
        },
      };

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar o email");
      }

      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      console.error("Erro ao enviar proposta:", error);
      alert("Houve um erro ao enviar sua proposta. Por favor, tente novamente mais tarde ou entre em contato via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white min-h-screen">
        <GlobalHeader />
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-12 text-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#8FDB00]/10 rounded-full mb-6">
              <CheckCircle2 className="w-16 h-16 text-[#8FDB00]" />
            </div>
            <h1 className="text-4xl font-bold text-[#1C4200] mb-4">
              Proposta Enviada com Sucesso!
            </h1>
            <p className="text-xl text-[#1C4200]/70 mb-8">
              Recebemos sua proposta de contratação. Nossa equipe entrará em
              contato em breve para finalizar o processo.
            </p>

            <div className="bg-[#F9FAFB] rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C4200] mb-6">
                Resumo da Proposta
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-[#1C4200]/70">Valor Solicitado</span>
                  <span className="text-xl font-bold text-[#1C4200]">
                    R$ {valorEmprestimo.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-[#1C4200]/70">Parcelas</span>
                  <span className="text-xl font-bold text-[#1C4200]">
                    {prazoEfetivo}x de R$ {parcelaMensal.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#1C4200]/70">Taxa de Juros</span>
                  <span className="text-xl font-bold text-[#1C4200]">
                    {taxaEfetiva}% a.m.
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-[#1C4200]/70">
                Enviamos um email de confirmação para:
                <br />
                <span className="font-semibold text-[#1C4200]">
                  {formData.email}
                </span>
              </p>
              <p className="text-sm text-[#1C4200]/60">
                Protocolo: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => router.push("/consulta-online")}
                className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg py-6 px-8 rounded-xl"
              >
                Nova Consulta
              </Button>
              <Button
                onClick={() => router.push("/")}
                className="bg-white hover:bg-gray-50 text-[#1C4200] font-bold text-lg py-6 px-8 rounded-xl border-2 border-gray-200"
              >
                Voltar ao Início
              </Button>
            </div>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white">
      <GlobalHeader />

      {/* Header */}
      <section className="relative w-full bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <Button
            onClick={() => router.back()}
            className="mb-6 bg-white/50 hover:bg-white text-[#1C4200] border border-[#1C4200]/20"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar
          </Button>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-[#8FDB00]/20 text-[#1C4200] px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-6 h-6" />
              <span className="font-semibold text-lg">Contratação Online</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#1C4200] mb-4">
              Simule e Contrate
            </h1>
            <p className="text-xl text-[#1C4200]/70">
              Configure seu empréstimo da forma que melhor se adequa a você
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="relative w-full bg-white py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-4">
                <div
                  className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all ${
                    step >= s
                      ? "bg-[#8FDB00] text-black"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      step >= s ? "bg-black/10" : "bg-gray-200"
                    }`}
                  >
                    {s}
                  </div>
                  <span className="font-semibold hidden sm:inline">
                    {s === 1 && "Simulação"}
                    {s === 2 && "Dados"}
                    {s === 3 && "Confirmação"}
                  </span>
                </div>
                {s < 3 && (
                  <div className="w-12 h-1 bg-gray-200 hidden sm:block"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="relative w-full py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Simulador */}
            <div className="lg:col-span-2">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#1C4200] mb-6 flex items-center gap-3">
                      <Calculator className="w-8 h-8 text-[#8FDB00]" />
                      Simule seu Empréstimo
                    </h2>

                    <div className="space-y-8">
                      {/* Valor Desejado */}
                      <div>
                        <label className="block text-lg font-semibold text-[#1C4200] mb-4">
                          {isSiape ? "Valor do Empréstimo" : "Quanto você precisa?"}
                        </label>
                        {isSiape ? (
                          <div className="bg-[#F9FAFB] rounded-xl p-6 text-center">
                            <p className="text-sm text-[#1C4200]/60 mb-2">
                              Calculado com base na sua margem disponível
                            </p>
                            <p className="text-3xl font-bold text-[#1C4200]">
                              R$ {valorEmprestimo.toFixed(2).replace(".", ",")}
                            </p>
                          </div>
                        ) : (
                          <div className="bg-[#F9FAFB] rounded-xl p-6">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-sm text-[#1C4200]/60">
                                R$ 100
                              </span>
                              <span className="text-2xl font-bold text-[#8FDB00]">
                                R$ {valorDesejado.toFixed(2).replace(".", ",")}
                              </span>
                              <span className="text-sm text-[#1C4200]/60">
                                R$ {margemDisponivel.toFixed(2).replace(".", ",")}
                              </span>
                            </div>
                            <input
                              type="range"
                              min="100"
                              max={margemDisponivel}
                              step="100"
                              value={valorDesejado}
                              onChange={handleValorChange}
                              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#8FDB00]"
                            />
                            <div className="mt-4">
                              <input
                                type="number"
                                value={valorDesejado}
                                onChange={handleValorChange}
                                className="w-full px-4 py-3 text-xl border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#8FDB00]"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Prazo */}
                      <div>
                        <label className="block text-lg font-semibold text-[#1C4200] mb-4">
                          Em quantas parcelas?
                        </label>
                        {isSiape ? (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="p-4 rounded-xl border-2 font-semibold bg-[#8FDB00] border-[#8FDB00] text-black text-center">
                              96x
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {[60, 72, 84, 96].map((p) => (
                              <button
                                key={p}
                                onClick={() => setPrazo(p)}
                                className={`p-4 rounded-xl border-2 font-semibold transition-all ${
                                  prazo === p
                                    ? "bg-[#8FDB00] border-[#8FDB00] text-black"
                                    : "bg-white border-gray-300 text-[#1C4200] hover:border-[#8FDB00]"
                                }`}
                              >
                                {p}x
                              </button>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Detalhes da Simulação */}
                      <div className="bg-gradient-to-br from-[#8FDB00]/10 to-[#7BC700]/10 rounded-2xl p-6 border-2 border-[#8FDB00]/30">
                        <h3 className="text-xl font-bold text-[#1C4200] mb-6 flex items-center gap-2">
                          <FileText className="w-6 h-6" />
                          Resumo da Simulação
                        </h3>
                        <div className="space-y-4">
                          <div className="flex justify-between items-center pb-4 border-b border-[#8FDB00]/20">
                            <span className="text-[#1C4200]/70">
                              Valor do Empréstimo
                            </span>
                            <span className="text-xl font-bold text-[#1C4200]">
                              R$ {valorEmprestimo.toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-4 border-b border-[#8FDB00]/20">
                            <span className="text-[#1C4200]/70">
                              Parcela Mensal
                            </span>
                            <span className="text-2xl font-bold text-[#8FDB00]">
                              R$ {parcelaMensal.toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-4 border-b border-[#8FDB00]/20">
                            <span className="text-[#1C4200]/70">
                              Número de Parcelas
                            </span>
                            <span className="text-xl font-bold text-[#1C4200]">
                              {prazoEfetivo}x
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-4 border-b border-[#8FDB00]/20">
                            <span className="text-[#1C4200]/70">
                              Taxa de Juros
                            </span>
                            <span className="text-xl font-bold text-[#1C4200]">
                              {taxaEfetiva}% a.m.
                            </span>
                          </div>
                          <div className="flex justify-between items-center pb-4 border-b border-[#8FDB00]/20">
                            <span className="text-[#1C4200]/70">Total Juros</span>
                            <span className="text-xl font-bold text-[#1C4200]">
                              R$ {totalJuros.toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[#1C4200]/70">
                              Total a Pagar
                            </span>
                            <span className="text-xl font-bold text-[#1C4200]">
                              R$ {totalAPagar.toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => setStep(2)}
                        disabled={!isSiape && valorDesejado < 100}
                        className="w-full bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-xl py-8 rounded-xl shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100"
                      >
                        Continuar para Dados
                        <CheckCircle2 className="w-6 h-6 ml-2" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#1C4200] mb-6 flex items-center gap-3">
                      <User className="w-8 h-8 text-[#8FDB00]" />
                      Confirme seus Dados
                    </h2>

                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                      {/* Dados Pessoais (pré-preenchidos) */}
                      <div className="bg-[#F9FAFB] rounded-xl p-6">
                        <h3 className="font-bold text-[#1C4200] mb-4">
                          Dados Pessoais
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm text-[#1C4200]/70 mb-1">
                              Nome Completo
                            </label>
                            <input
                              type="text"
                              value={Consulta.NOME}
                              disabled
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                            />
                          </div>
                          <div>
                            <label className="block text-sm text-[#1C4200]/70 mb-1">
                              CPF
                            </label>
                            <input
                              type="text"
                              value={formatCPF(Consulta.FULL_CPF)}
                              disabled
                              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contato */}
                      <div>
                        <label className="block text-lg font-semibold text-[#1C4200] mb-2">
                          E-mail para Contato *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="seu@email.com"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#8FDB00]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-semibold text-[#1C4200] mb-2">
                          Telefone para Contato *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            required
                            value={formData.telefone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                telefone: e.target.value,
                              })
                            }
                            placeholder="(00) 00000-0000"
                            className="w-full pl-12 pr-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#8FDB00]"
                          />
                        </div>
                      </div>

                      {/* Endereço */}
                      <div className="bg-[#F9FAFB] rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <input
                            type="checkbox"
                            id="confirmaEndereco"
                            checked={formData.confirmaEndereco}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                confirmaEndereco: e.target.checked,
                              })
                            }
                            className="w-5 h-5 mt-1 accent-[#8FDB00]"
                          />
                          <label
                            htmlFor="confirmaEndereco"
                            className="flex-1 cursor-pointer"
                          >
                            <span className="font-semibold text-[#1C4200] block mb-2">
                              Confirmo que meu endereço está correto
                            </span>
                            <p className="text-sm text-[#1C4200]/70">
                              {Consulta.ENDERECO}, {Consulta.BAIRRO} -{" "}
                              {Consulta.CIDADE}/{Consulta.UF} - CEP:{" "}
                              {Consulta.CEP.replace(/(\d{5})(\d{3})/, "$1-$2")}
                            </p>
                          </label>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          onClick={() => setStep(1)}
                          className="flex-1 bg-gray-200 hover:bg-gray-300 text-[#1C4200] font-bold text-lg py-6 rounded-xl"
                        >
                          <ArrowLeft className="w-5 h-5 mr-2" />
                          Voltar
                        </Button>
                        <Button
                          onClick={() => setStep(3)}
                          disabled={
                            !formData.email ||
                            !formData.telefone ||
                            !formData.confirmaEndereco
                          }
                          className="flex-1 bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg py-6 rounded-xl disabled:opacity-50"
                        >
                          Continuar
                          <CheckCircle2 className="w-5 h-5 ml-2" />
                        </Button>
                      </div>
                    </form>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#1C4200] mb-6 flex items-center gap-3">
                      <FileText className="w-8 h-8 text-[#8FDB00]" />
                      Confirme e Envie
                    </h2>

                    <div className="space-y-6">
                      {/* Resumo Completo */}
                      <div className="bg-[#F9FAFB] rounded-xl p-6">
                        <h3 className="font-bold text-[#1C4200] mb-4">
                          Resumo da Proposta
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#1C4200]/70">
                              Valor Solicitado
                            </span>
                            <span className="font-semibold">
                              R$ {valorEmprestimo.toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#1C4200]/70">Parcelas</span>
                            <span className="font-semibold">{prazoEfetivo}x</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#1C4200]/70">
                              Valor da Parcela
                            </span>
                            <span className="font-semibold text-[#8FDB00] text-lg">
                              R$ {parcelaMensal.toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#1C4200]/70">Taxa</span>
                            <span className="font-semibold">{taxaEfetiva}% a.m.</span>
                          </div>
                          <div className="flex justify-between pt-3 border-t">
                            <span className="text-[#1C4200]/70">
                              Total a Pagar
                            </span>
                            <span className="font-semibold">
                              R$ {totalAPagar.toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Informações importantes */}
                      <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                          <div className="text-sm text-blue-900">
                            <p className="font-semibold mb-2">
                              Informações Importantes
                            </p>
                            <ul className="space-y-1 list-disc list-inside">
                              <li>
                                As parcelas serão descontadas automaticamente do
                                seu benefício
                              </li>
                              <li>
                                A aprovação está sujeita à análise cadastral
                              </li>
                              <li>
                                O dinheiro será depositado na conta cadastrada no
                                INSS
                              </li>
                              <li>CET (Custo Efetivo Total): {(cetAno * 100).toFixed(2)}% a.a.</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Termos */}
                      <div className="border-2 border-gray-300 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <input
                            type="checkbox"
                            id="termos"
                            checked={formData.aceitaTermos}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                aceitaTermos: e.target.checked,
                              })
                            }
                            className="w-5 h-5 mt-1 accent-[#8FDB00]"
                          />
                          <label htmlFor="termos" className="flex-1 cursor-pointer">
                            <span className="text-sm text-[#1C4200]">
                              Li e aceito os{" "}
                              <a href="/terms" className="text-[#8FDB00] hover:underline">
                                termos e condições
                              </a>
                              ,{" "}
                              <a href="/privacy" className="text-[#8FDB00] hover:underline">
                                política de privacidade
                              </a>{" "}
                              e autorizo a CredCertoBueno a utilizar meus dados
                              para análise de crédito.
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          onClick={() => setStep(2)}
                          className="flex-1 bg-gray-200 hover:bg-gray-300 text-[#1C4200] font-bold text-lg py-6 rounded-xl"
                        >
                          <ArrowLeft className="w-5 h-5 mr-2" />
                          Voltar
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          disabled={!formData.aceitaTermos || submitting}
                          className="flex-1 bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg py-6 rounded-xl disabled:opacity-50"
                        >
                          {submitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2"></div>
                              Enviando...
                            </>
                          ) : (
                            <>
                              Enviar Proposta
                              <CheckCircle2 className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar - Benefícios */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Card de Vantagens */}
                <div className="bg-gradient-to-br from-[#1C4200] to-[#2d6800] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <Award className="w-7 h-7" />
                    Vantagens
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Taxas a partir de 1,65% a.m.",
                      "Até 96 meses para pagar",
                      "Sem consulta ao SPC/Serasa",
                      "Aprovação rápida",
                      "Dinheiro na conta em 24h",
                      "Atendimento humanizado",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card de Segurança */}
                <div className="bg-white rounded-2xl p-6 border-2 border-[#8FDB00]/20 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#8FDB00]/10 rounded-full">
                      <Shield className="w-6 h-6 text-[#8FDB00]" />
                    </div>
                    <h3 className="font-bold text-[#1C4200]">100% Seguro</h3>
                  </div>
                  <p className="text-sm text-[#1C4200]/70">
                    Seus dados estão protegidos com criptografia de ponta. Somos
                    certificados e seguimos todas as normas de segurança bancária.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default function ContratarPage() {
  return (
    <Suspense
      fallback={
        <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white min-h-screen">
          <GlobalHeader />
          <div className="flex items-center justify-center min-h-[80vh]">
            <div className="text-center">
              <div className="w-20 h-20 border-8 border-[#8FDB00]/20 border-t-[#8FDB00] rounded-full animate-spin mx-auto mb-8"></div>
              <h2 className="text-3xl font-bold text-[#1C4200]">Carregando...</h2>
            </div>
          </div>
        </main>
      }
    >
      <ContratarContent />
    </Suspense>
  );
}
