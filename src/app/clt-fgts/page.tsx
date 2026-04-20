"use client";

import GlobalHeader from "../components/Header";
import Footer from "../components/Footer";
import CreditSimulatorSection from "../components/CreditSimulatorSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Zap,
  Shield,
  Calculator,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

export default function CLTFGTSPage() {
  const [fgtsMonths, setFgtsMonths] = useState(6);
  const [monthlyValue, setMonthlyValue] = useState(500);

  const calculateFGTS = () => {
    return (monthlyValue * fgtsMonths * 0.9).toFixed(2);
  };

  return (
    <main className="bg-gradient-to-b from-white to-[#F9FAFB]">
      <GlobalHeader />

      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#1C4200] via-[#2d6800] to-[#1C4200] py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#8FDB00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#8FDB00] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#8FDB00]/20 text-[#8FDB00] px-6 py-3 rounded-full mb-6">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Aprovação Rápida</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Crédito para Trabalhadores CLT
              </h1>

              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                Empréstimo consignado com desconto em folha e antecipação do FGTS.
                Processo 100% digital, rápido e sem burocracia!
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#8FDB00]" />
                  <span className="text-white font-medium">Sem consulta ao SPC</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#8FDB00]" />
                  <span className="text-white font-medium">Taxa a partir de 1,75%</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#8FDB00]" />
                  <span className="text-white font-medium">100% Online</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-all">
                  <Link href="/consulta-online">
                    Solicitar Agora
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold text-lg px-8 py-6 rounded-full"
                >
                  <Link href="/consulta-online">Simular Crédito</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
                  alt="Trabalhador CLT"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C4200]/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CreditSimulatorSection
        title="Simule seu crédito consignado CLT ou FGTS"
        subtitle="Calcule a parcela ideal para desconto em folha ou antecipação do FGTS."
        productOptions={[
          { value: "clt", label: "Desconto em folha CLT", rate: 1.75 },
          { value: "fgts", label: "Antecipação do FGTS", rate: 1.85 },
        ]}
        defaultProductType="clt"
      />

      {/* Empréstimo Consignado CLT */}
      <section className="relative w-full py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Empréstimo Consignado CLT
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Crédito com desconto direto na folha de pagamento. Ideal para você que trabalha com carteira assinada!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#F9FAFB] to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="p-4 bg-[#8FDB00]/10 w-fit rounded-lg mb-6">
                <TrendingDown className="w-8 h-8 text-[#1C4200]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1C4200] mb-4">
                Taxas Reduzidas
              </h3>
              <p className="text-[#1C4200]/70 mb-4">
                A partir de 1,75% ao mês, as menores taxas do mercado
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1C4200]/70">Sem tarifas abusivas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1C4200]/70">Parcelas fixas</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F9FAFB] to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="p-4 bg-[#8FDB00]/10 w-fit rounded-lg mb-6">
                <Zap className="w-8 h-8 text-[#1C4200]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1C4200] mb-4">
                Aprovação em 24h
              </h3>
              <p className="text-[#1C4200]/70 mb-4">
                Processo rápido e descomplicado
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1C4200]/70">Análise automática</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1C4200]/70">Resposta rápida</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#F9FAFB] to-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all">
              <div className="p-4 bg-[#8FDB00]/10 w-fit rounded-lg mb-6">
                <Shield className="w-8 h-8 text-[#1C4200]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1C4200] mb-4">
                Sem Consulta SPC
              </h3>
              <p className="text-[#1C4200]/70 mb-4">
                Nome negativado não é problema
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1C4200]/70">Segurança garantida</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#1C4200]/70">Desconto em folha</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FGTS Calculator */}
      <section className="relative w-full py-16 lg:py-24 bg-gradient-to-br from-[#8FDB00]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#8FDB00]/20 text-[#1C4200] px-6 py-3 rounded-full mb-6">
                <Calculator className="w-5 h-5" />
                <span className="font-semibold">Antecipação FGTS</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
                Antecipe seu FGTS Saque Aniversário
              </h2>

              <p className="text-xl text-[#1C4200]/70 mb-8">
                Receba até 10 parcelas antecipadas do seu FGTS. Dinheiro na conta no mesmo dia!
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C4200] block">Até 10 parcelas antecipadas</span>
                    <span className="text-[#1C4200]/70">Receba o valor de vários anos de uma só vez</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C4200] block">Dinheiro no mesmo dia</span>
                    <span className="text-[#1C4200]/70">Após aprovação, o valor cai direto na sua conta</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C4200] block">100% online</span>
                    <span className="text-[#1C4200]/70">Sem precisar sair de casa</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1C4200] mb-6">
                Calcule sua Antecipação
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1C4200] mb-3">
                    Valor mensal do FGTS
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1C4200] font-bold text-lg">
                      R$
                    </span>
                    <input
                      type="text"
                      value={monthlyValue}
                      onChange={(e) => setMonthlyValue(Number(e.target.value.replace(/\D/g, "")))}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8FDB00] focus:outline-none transition-colors text-[#1C4200] font-bold text-lg"
                    />
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={monthlyValue}
                    onChange={(e) => setMonthlyValue(Number(e.target.value))}
                    className="w-full mt-3 accent-[#8FDB00]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1C4200] mb-3">
                    Quantas parcelas antecipar?
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={fgtsMonths}
                    onChange={(e) => setFgtsMonths(Number(e.target.value))}
                    className="w-full accent-[#8FDB00]"
                  />
                  <div className="text-center mt-2">
                    <span className="text-2xl font-bold text-[#1C4200]">
                      {fgtsMonths} parcelas
                    </span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#8FDB00]/10 to-[#8FDB00]/5 p-6 rounded-xl border-2 border-[#8FDB00]/20">
                  <p className="text-sm text-[#1C4200]/70 mb-2">Você receberá aproximadamente</p>
                  <p className="text-4xl font-bold text-[#1C4200]">
                    R$ {calculateFGTS()}
                  </p>
                  <p className="text-xs text-[#1C4200]/60 mt-2">* Valor estimado, sujeito a análise</p>
                </div>

                <Button className="w-full bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg py-6 rounded-xl shadow-lg hover:scale-105 transition-all">
                  Solicitar Antecipação
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="relative w-full py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Processo 100% Digital
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Simples, rápido e sem burocracia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#8FDB00] text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1C4200] mb-3">Simule Online</h3>
              <p className="text-[#1C4200]/70">
                Use nossa calculadora e veja quanto pode receber
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#8FDB00] text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1C4200] mb-3">Envie Documentos</h3>
              <p className="text-[#1C4200]/70">
                Tire foto dos documentos pelo celular
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#8FDB00] text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1C4200] mb-3">Aprovação em 24h</h3>
              <p className="text-[#1C4200]/70">
                Análise rápida e resposta no mesmo dia
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#8FDB00] text-white rounded-full flex items-center justify-center mx-auto text-3xl font-bold shadow-lg">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1C4200] mb-3">Dinheiro na Conta</h3>
              <p className="text-[#1C4200]/70">
                Receba o valor direto na sua conta bancária
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full py-16 lg:py-24 bg-gradient-to-br from-[#1C4200] to-[#2d6800]">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Pronto para solicitar seu crédito?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de trabalhadores que já aproveitaram as melhores taxas do mercado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg px-10 py-7 rounded-full shadow-xl hover:scale-105 transition-all">
              <Link href="/consulta-online">
                Solicitar Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold text-lg px-10 py-7 rounded-full"
            >
              <Link href="/consulta-online">Falar com Consultor</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
