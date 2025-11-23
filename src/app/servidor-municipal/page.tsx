"use client";

import GlobalHeader from "../components/Header";
import Footer from "../components/Footer";
import CreditSimulatorSection from "../components/CreditSimulatorSection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Shield,
  TrendingDown,
  FileCheck,
  Users,
  Building2,
  ArrowRight,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
} from "lucide-react";

export default function ServidorMunicipalPage() {
  const whatsappNumber = "556293338331";
  const callNumber = "+556233874759";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar meu crédito consignado."
  );
  const prefeituras = [
    "São Paulo - SP",
    "Rio de Janeiro - RJ",
    "Brasília - DF",
    "Salvador - BA",
    "Fortaleza - CE",
    "Belo Horizonte - MG",
    "Manaus - AM",
    "Curitiba - PR",
    "Recife - PE",
    "Goiânia - GO",
    "Belém - PA",
    "Porto Alegre - RS",
    "Anápolis - GO",
    "Guarulhos - SP",
    "Campinas - SP",
    "São Luís - MA",
  ];

  const benefits = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Taxas Competitivas",
      description: "A partir de 1,60% a.m. para servidores municipais",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Processo Ágil",
      description: "Aprovação em até 24 horas",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "100% Seguro",
      description: "Parceiros regulamentados",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Sem Burocracia",
      description: "Documentação simplificada",
    },
  ];

  const categorias = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Servidores Administrativos",
      description: "Todas as secretarias municipais",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Educação e Saúde",
      description: "Professores, médicos e enfermeiros",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Guarda Municipal",
      description: "Agentes de segurança pública",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Autarquias",
      description: "Funcionários de autarquias municipais",
    },
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
              <Building2 className="w-5 h-5" />
              <span className="font-semibold">Servidores Municipais</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Crédito Consignado para Servidores Municipais
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed"
            >
              Atendimento personalizado para funcionários de prefeituras de todo o Brasil.
              Condições especiais e aprovação rápida.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg px-10 py-7 rounded-lg shadow-xl hover:scale-105 transition-all">
                Consultar Disponibilidade
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold text-lg px-10 py-7 rounded-lg"
              >
                Falar com Consultor
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">1,60%</div>
                <div className="text-sm text-white/80">Taxa a.m.*</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">84x</div>
                <div className="text-sm text-white/80">Parcelas</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">30%</div>
                <div className="text-sm text-white/80">Margem</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <div className="text-3xl font-bold text-white mb-1">24h</div>
                <div className="text-sm text-white/80">Resposta</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CreditSimulatorSection
        title="Simule seu consignado para servidor municipal"
        subtitle="Descubra a parcela que cabe no seu orçamento com condições especiais para prefeituras parceiras."
        productOptions={[{ value: "municipal", label: "Servidor Municipal", rate: 1.6 }]}
        defaultProductType="municipal"
        ctaLabel="Simular agora"
      />

      {/* Benefits */}
      <section className="relative w-full py-20 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Por que escolher a CredCertoBueno?
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Especialistas em crédito consignado para servidores municipais
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
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-1"
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

      {/* Categorias */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Categorias Atendidas
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Atendemos todas as categorias de servidores municipais
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categorias.map((categoria, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#F9FAFB] to-white p-8 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="p-4 bg-[#8FDB00]/10 text-[#1C4200] w-fit rounded-lg mx-auto mb-6">
                  {categoria.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1C4200] mb-3">
                  {categoria.title}
                </h3>
                <p className="text-[#1C4200]/70">{categoria.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prefeituras */}
      <section className="relative w-full py-20 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Principais Prefeituras Atendidas
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Trabalhamos com prefeituras de todo o Brasil
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {prefeituras.map((prefeitura, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <MapPin className="w-5 h-5 text-[#8FDB00] mx-auto mb-2" />
                <span className="text-sm font-semibold text-[#1C4200] block text-center">
                  {prefeitura}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-[#1C4200]/70 mb-6 text-lg">
              Sua prefeitura não está na lista? Entre em contato para consultar disponibilidade!
            </p>
            <Button className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg px-10 py-6 rounded-lg">
              Consultar Minha Prefeitura
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="relative w-full py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Como Funciona?
            </h2>
            <p className="text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Processo simples e rápido em 4 passos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Entre em Contato",
                description: "Ligue ou envie WhatsApp",
              },
              {
                step: "2",
                title: "Envie Documentos",
                description: "RG, CPF e contracheque",
              },
              {
                step: "3",
                title: "Aguarde Aprovação",
                description: "Resposta em até 24h",
              },
              {
                step: "4",
                title: "Receba o Dinheiro",
                description: "Direto na sua conta",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#8FDB00] to-[#7BC700] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-[#1C4200] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#1C4200]/70">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative w-full py-20 bg-gradient-to-br from-[#1C4200] to-[#2d6800]">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Solicite Seu Crédito Agora
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Fale com nossos especialistas e descubra as melhores condições para você
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xl py-8 rounded-xl shadow-xl hover:scale-105 transition-all"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp: (62) 93338-8331
              </a>
            </Button>
            <Button
              asChild
              className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-xl py-8 rounded-xl shadow-xl hover:scale-105 transition-all"
            >
              <a href={`tel:${callNumber}`}>
                <Phone className="w-6 h-6 mr-3" />
                Ligar: (62) 3387-4759
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
