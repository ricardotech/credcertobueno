"use client";

import GlobalHeader from "../components/Header";
import Footer from "../components/Footer";
import CreditSimulatorSection from "../components/CreditSimulatorSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Shield,
  TrendingDown,
  FileCheck,
  Landmark,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  Building2,
} from "lucide-react";

export default function ServidorEstadualPage() {
  const whatsappNumber = "5562994108686";
  const callNumber = "+5562994108686";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar meu crédito consignado."
  );
  const estados = [
    "São Paulo", "Rio de Janeiro", "Minas Gerais", "Bahia",
    "Paraná", "Rio Grande do Sul", "Pernambuco", "Ceará",
    "Pará", "Santa Catarina", "Goiás", "Maranhão",
    "Amazonas", "Espírito Santo", "Paraíba", "Rio Grande do Norte",
  ];

  const benefits = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Taxas Especiais",
      description: "A partir de 1,55% a.m. para servidores estaduais",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Aprovação Rápida",
      description: "Análise em até 24 horas úteis",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança Total",
      description: "Processo 100% seguro e regulamentado",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Documentação Simples",
      description: "Processo descomplicado e sem burocracia",
    },
  ];

  const convenios = [
    "Secretarias de Estado",
    "Polícia Militar",
    "Polícia Civil",
    "Corpo de Bombeiros",
    "Magistrados Estaduais",
    "Ministério Público Estadual",
    "Defensoria Pública",
    "Tribunal de Contas",
    "Assembleia Legislativa",
    "Autarquias Estaduais",
    "Fundações Estaduais",
    "Empresas Públicas Estaduais",
  ];

  return (
    <main className="bg-white">
      <GlobalHeader />

      {/* Hero Section */}
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
              <Landmark className="w-5 h-5" />
              <span className="font-semibold">Servidores Estaduais</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Crédito Consignado para Servidores Estaduais
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed"
            >
              Taxas diferenciadas para servidores públicos estaduais de todos os estados do Brasil.
              Sua estabilidade é nossa garantia.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button asChild className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg px-10 py-7 rounded-lg shadow-xl hover:scale-105 transition-all">
                <Link href="/consulta-online">
                  Consultar Margem
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold text-lg px-10 py-7 rounded-lg"
              >
                <a href="https://w.app/tfkx3w" target="_blank" rel="noopener noreferrer">Falar com Especialista</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">1,55%</div>
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
        title="Simule seu consignado para servidor estadual"
        subtitle="Calcule a parcela ideal com taxas diferenciadas para o seu estado."
        productOptions={[{ value: "governo", label: "Servidor Estadual", rate: 1.55 }]}
        defaultProductType="governo"
        ctaLabel="Quero simular agora"
      />

      {/* Benefits */}
      <section className="relative w-full py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Vantagens Exclusivas
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Condições especiais para quem dedica sua vida ao serviço público
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="p-4 bg-[#8FDB00]/10 text-[#1C4200] w-fit rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C4200] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#1C4200]/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Estados Atendidos */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Atendemos Todos os Estados
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Convênios com governos estaduais em todo o Brasil
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mb-12">
            {estados.map((estado, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#F9FAFB] to-white p-4 rounded-lg shadow-md border border-gray-100 text-center hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CheckCircle2 className="w-6 h-6 text-[#8FDB00] mx-auto mb-2" />
                <span className="font-semibold text-[#1C4200]">{estado}</span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#1C4200]/70 mb-6">
              Não encontrou seu estado? Entre em contato!
            </p>
            <Button asChild className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg px-10 py-6 rounded-lg">
              <Link href="/consulta-online">Consultar Disponibilidade</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Convênios */}
      <section className="relative w-full py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Órgãos e Categorias Atendidos
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Atendemos todas as categorias de servidores estaduais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {convenios.map((convenio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <Building2 className="w-8 h-8 text-[#8FDB00] mb-3" />
                <span className="font-semibold text-[#1C4200]">{convenio}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative w-full py-20 bg-gradient-to-br from-[#1C4200] to-[#2d6800]">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Fale com Nossos Especialistas
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Nossa equipe está pronta para atender você e encontrar as melhores condições
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xl py-8 rounded-xl shadow-xl hover:scale-105 transition-all"
            >
              <a
                href="https://w.app/ii4ndh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp: (62) 99410-8686
              </a>
            </Button>
            <Button
              asChild
              className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-xl py-8 rounded-xl shadow-xl hover:scale-105 transition-all"
            >
              <a
                href="https://w.app/ii4ndh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp: (62) 99410-8686
              </a>
            </Button>
          </div>

          <p className="text-white/70 text-lg">
            Atendimento presencial em Anápolis – GO
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
