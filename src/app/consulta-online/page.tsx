"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import GlobalHeader from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  Clock,
  Smartphone,
  Lock,
  FileCheck,
  TrendingUp,
  Users,
  Zap,
  Award,
  CreditCard,
  DollarSign,
} from "lucide-react";
import { formatCPF, validateCPF } from "@/lib/cpf";

export default function ConsultaOnlinePage() {
  const router = useRouter();
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      setCpf(formatCPF(value));
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cpfLimpo = cpf.replace(/\D/g, "");

    if (!validateCPF(cpfLimpo)) {
      setError("CPF inválido. Por favor, verifique e tente novamente.");
      return;
    }

    setLoading(true);
    setError("");

    // Simula loading da API
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redireciona para página de resultados
    router.push(`/consulta-online/resultado?cpf=${cpfLimpo}`);
  };

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "100% Online",
      description: "Consulte e contrate sem sair de casa",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Resposta Imediata",
      description: "Saiba sua margem em segundos",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Seguro e Confiável",
      description: "Seus dados protegidos com criptografia",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Melhores Taxas",
      description: "A partir de 1,65% ao mês",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Digite seu CPF",
      description: "Insira seu CPF para consultar sua margem disponível",
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      number: 2,
      title: "Veja sua margem",
      description: "Confira quanto você pode contratar de forma instantânea",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: 3,
      title: "Escolha o valor",
      description: "Selecione o valor e prazo que melhor se adequam a você",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      number: 4,
      title: "Contrate online",
      description: "Finalize tudo online e receba o dinheiro na conta",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const features = [
    "Sem consulta ao SPC/Serasa",
    "Parcelas descontadas direto no benefício",
    "Taxas reduzidas e competitivas",
    "Atendimento humanizado",
    "Sem idade máxima para contratar",
    "Processo 100% digital e seguro",
  ];

  return (
    <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white">
      <GlobalHeader />

      {/* Hero Section com Formulário */}
      <section id="consulta-form" className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lado Esquerdo - Informações */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-[#8FDB00]/20 text-[#1C4200] px-6 py-4 rounded-full mb-8">
                <Smartphone className="w-6 h-6" />
                <span className="font-semibold text-lg">Consulta 100% Online</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-[#1C4200] mb-8 leading-tight">
                Consulte seu Crédito Consignado
              </h1>

              <p className="text-2xl lg:text-3xl text-[#1C4200]/80 mb-10 leading-relaxed">
                Descubra sua margem disponível em segundos. Rápido, seguro e sem
                burocracia!
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-[#8FDB00]/20"
                  >
                    <div className="text-[#8FDB00] mb-3">{benefit.icon}</div>
                    <h3 className="font-bold text-[#1C4200] mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#1C4200]/70">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Lado Direito - Formulário */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-[#8FDB00]/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#8FDB00]/10 rounded-full mb-4">
                    <Lock className="w-10 h-10 text-[#8FDB00]" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#1C4200] mb-3">
                    Consulte Agora
                  </h2>
                  <p className="text-lg text-[#1C4200]/70">
                    Digite seu CPF e descubra quanto pode contratar
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="cpf"
                      className="block text-lg font-semibold text-[#1C4200] mb-3"
                    >
                      CPF do Beneficiário
                    </label>
                    <input
                      type="text"
                      id="cpf"
                      value={cpf}
                      onChange={handleCPFChange}
                      placeholder="000.000.000-00"
                      className={`w-full px-6 py-5 text-2xl border-2 rounded-xl focus:outline-none focus:ring-4 transition-all ${
                        error
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                          : "border-gray-300 focus:border-[#8FDB00] focus:ring-[#8FDB00]/20"
                      }`}
                      disabled={loading}
                    />
                    {error && (
                      <p className="mt-2 text-red-600 font-medium">{error}</p>
                    )}
                  </div>

                  <div className="bg-[#F9FAFB] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[#1C4200]/70">
                        Seus dados estão protegidos e serão usados apenas para
                        consulta de margem consignável. Não compartilhamos suas
                        informações.
                      </p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={loading || cpf.length < 14}
                    className="w-full bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-2xl py-8 rounded-xl shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-3">
                        <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
                        Consultando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        <Zap className="w-6 h-6" />
                        Consultar Margem
                      </span>
                    )}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-[#1C4200]/60">
                    Ao consultar, você concorda com nossa{" "}
                    <a href="#" className="text-[#8FDB00] hover:underline">
                      Política de Privacidade
                    </a>
                  </p>
                </div>
              </div>

              {/* Badge de Confiança */}
              <div className="mt-6 flex items-center justify-center gap-4 text-[#1C4200]/70">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  <span className="text-sm font-medium">Dados Protegidos</span>
                </div>
                <div className="w-1 h-1 bg-[#1C4200]/30 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="text-sm font-medium">100% Seguro</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="relative w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1C4200] mb-6">
              Como Funciona?
            </h2>
            <p className="text-2xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Processo 100% digital em 4 passos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#8FDB00] to-[#7BC700] text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-xl">
                      {step.number}
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                      <div className="p-3 bg-white/90 rounded-full">
                        <div className="text-[#1C4200]">{step.icon}</div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1C4200] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#1C4200]/70">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#8FDB00] to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="relative w-full py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-[#8FDB00]/10 text-[#1C4200] px-6 py-4 rounded-full mb-6">
              <Users className="w-6 h-6" />
              <span className="font-semibold text-xl">Vantagens Exclusivas</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1C4200] mb-6">
              Por Que Escolher a CredCertoBueno?
            </h2>
            <p className="text-2xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Benefícios pensados especialmente para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#8FDB00]/20 hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <CheckCircle2 className="w-12 h-12 text-[#8FDB00] mb-6" />
                <h3 className="text-xl font-bold text-[#1C4200]">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative w-full py-24 bg-gradient-to-br from-[#1C4200] to-[#2d6800]">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Pronto para Consultar?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Descubra agora quanto você pode contratar de crédito consignado com as
            melhores taxas do mercado!
          </p>

          <Button
            asChild
            className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-2xl py-10 px-16 rounded-2xl shadow-xl hover:scale-105 transition-all"
          >
            <a href="#consulta-form">
              <Zap className="w-7 h-7 mr-3" />
              Fazer Consulta Agora
            </a>
          </Button>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6" />
              <span>Seguro e Confiável</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6" />
              <span>Resposta em Segundos</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-6 h-6" />
              <span>Melhores Taxas</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
