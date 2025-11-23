"use client";

import GlobalHeader from "../components/Header";
import Footer from "../components/Footer";
import CreditSimulatorSection from "../components/CreditSimulatorSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  Award,
  TrendingDown,
  FileCheck,
  Lock,
  Users,
  Building2,
  Landmark,
  ArrowRight,
} from "lucide-react";

export default function SIAPEPage() {
  const categories = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Servidores Federais (SIAPE)",
      description: "Taxas especiais a partir de 1,45% a.m.",
      benefits: [
        "Margem consignável de até 35%",
        "Prazos de até 96 meses",
        "Portabilidade facilitada",
      ],
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Servidores Estaduais",
      description: "Condições diferenciadas por estado",
      benefits: [
        "Convênios com todos os estados",
        "Análise em até 24 horas",
        "Sem taxas abusivas",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Servidores Municipais",
      description: "Atendimento personalizado por prefeitura",
      benefits: [
        "Parcerias com prefeituras",
        "Processo simplificado",
        "Aprovação rápida",
      ],
    },
  ];

  const advantages = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Menores Taxas",
      description: "Condições especiais para servidores públicos",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança Total",
      description: "Parceiros autorizados e regulamentados",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Processo Simplificado",
      description: "Documentação mínima e aprovação rápida",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Estabilidade",
      description: "Sua estabilidade é nossa garantia",
    },
  ];

  return (
    <main className="bg-white">
      <GlobalHeader />

      {/* Hero Section - Institucional */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#1C4200] via-[#2d6800] to-[#1C4200] py-20">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-[#8FDB00]/20 text-[#8FDB00] px-6 py-3 rounded-full mb-8"
            >
              <Award className="w-5 h-5" />
              <span className="font-semibold">Especialistas em Servidor Público</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Crédito Consignado para Servidores Públicos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed"
            >
              Taxas especiais para SIAPE, servidores estaduais e municipais.
              Sua estabilidade merece as melhores condições do mercado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg px-10 py-7 rounded-lg shadow-xl hover:scale-105 transition-all">
                Consultar Margem
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold text-lg px-10 py-7 rounded-lg"
              >
                Simular Crédito
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">1,45%</div>
                <div className="text-sm text-white/80">Taxa a.m.*</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">96x</div>
                <div className="text-sm text-white/80">Parcelas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">35%</div>
                <div className="text-sm text-white/80">Margem</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">24h</div>
                <div className="text-sm text-white/80">Aprovação</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CreditSimulatorSection
        title="Simule seu consignado para servidor público"
        subtitle="Compare parcelas para SIAPE, servidores estaduais e municipais com condições especiais."
        productOptions={[
          { value: "siape", label: "SIAPE - Servidor Federal", rate: 1.45 },
          { value: "governo", label: "Servidor Estadual", rate: 1.55 },
          { value: "municipal", label: "Servidor Municipal", rate: 1.6 },
        ]}
        defaultProductType="siape"
        ctaLabel="Quero simular meu consignado"
      />

      {/* Categories Section */}
      <section className="relative w-full py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Atendemos Todos os Servidores Públicos
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Condições especiais e diferenciadas para cada categoria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <div className="p-4 bg-[#8FDB00]/10 text-[#1C4200] w-fit rounded-lg mb-6">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1C4200] mb-3">
                  {category.title}
                </h3>
                <p className="text-[#8FDB00] font-semibold mb-6">
                  {category.description}
                </p>
                <ul className="space-y-3">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                      <span className="text-[#1C4200]/70">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6 bg-[#8FDB00] hover:bg-[#7BC700] text-black font-semibold">
                  Consultar Condições
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
                Por que servidores públicos escolhem a CredCertoBueno?
              </h2>
              <p className="text-xl text-[#1C4200]/70 mb-8">
                Somos especialistas em crédito consignado para o setor público.
                Conhecemos as particularidades de cada órgão e categoria.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-3 bg-[#8FDB00]/10 text-[#1C4200] rounded-lg flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1C4200] mb-1">
                        {advantage.title}
                      </h4>
                      <p className="text-sm text-[#1C4200]/70">
                        {advantage.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80"
                alt="Servidor Público"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C4200]/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Convênios */}
      <section className="relative w-full py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Convênios e Órgãos Atendidos
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Trabalhamos com os principais órgãos públicos do Brasil
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Ministérios Federais",
              "Forças Armadas",
              "Poder Judiciário",
              "Poder Legislativo",
              "Governos Estaduais",
              "Prefeituras",
              "Autarquias Federais",
              "Empresas Públicas",
            ].map((organ, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-all"
              >
                <CheckCircle2 className="w-8 h-8 text-[#8FDB00] mx-auto mb-3" />
                <span className="font-semibold text-[#1C4200]">{organ}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#1C4200]/70 mb-6">
              Não encontrou seu órgão? Entre em contato conosco!
            </p>
            <Button className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg px-10 py-6 rounded-lg">
              Consultar Convênio
            </Button>
          </div>
        </div>
      </section>

      {/* Margem Consignável */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-br from-[#1C4200] to-[#2d6800] p-10 lg:p-16 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Consulte sua Margem Consignável
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Descubra quanto você pode solicitar de crédito com base no seu salário
              e margem disponível
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg px-10 py-7 rounded-lg shadow-xl hover:scale-105 transition-all">
                Consultar Margem Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold text-lg px-10 py-7 rounded-lg"
              >
                Falar com Especialista
              </Button>
            </div>
            <p className="text-white/60 text-sm mt-6">
              Consulta gratuita e sem compromisso
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
