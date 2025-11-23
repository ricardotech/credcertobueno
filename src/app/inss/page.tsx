"use client";

import GlobalHeader from "../components/Header";
import Footer from "../components/Footer";
import CreditSimulatorSection from "../components/CreditSimulatorSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Heart,
  Shield,
  Phone,
  MessageCircle,
  Clock,
  ThumbsUp,
  Star,
  Users,
  TrendingDown,
} from "lucide-react";

export default function INSSPage() {
  const whatsappNumber = "556293338331";
  const callNumber = "+556233874759";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar meu crédito consignado."
  );
  const steps = [
    {
      number: 1,
      title: "Entre em contato",
      description: "Ligue ou mande WhatsApp. Vamos te ajudar!",
      icon: <Phone className="w-8 h-8" />,
    },
    {
      number: 2,
      title: "Envie documentos",
      description: "RG, CPF e comprovante de benefício",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      number: 3,
      title: "Aguarde aprovação",
      description: "Resposta em até 1 dia útil",
      icon: <Clock className="w-8 h-8" />,
    },
    {
      number: 4,
      title: "Receba o dinheiro",
      description: "Direto na sua conta bancária",
      icon: <ThumbsUp className="w-8 h-8" />,
    },
  ];

  const benefits = [
    "Desconto automático no benefício",
    "Menores taxas do mercado",
    "Sem idade máxima",
    "Aprovação facilitada",
    "Sem consulta SPC/Serasa",
    "Atendimento humanizado",
  ];

  const testimonials = [
    {
      name: "Maria da Silva",
      age: 68,
      text: "Processo muito fácil! Fui muito bem atendida e consegui realizar o sonho de reformar minha casa.",
      rating: 5,
    },
    {
      name: "João Santos",
      age: 72,
      text: "As taxas são realmente as melhores. Recomendo para todos os aposentados que conheço.",
      rating: 5,
    },
    {
      name: "Ana Paula Oliveira",
      age: 65,
      text: "Atendimento excelente! Tiraram todas as minhas dúvidas com muita paciência.",
      rating: 5,
    },
  ];

  return (
    <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white">
      <GlobalHeader />

      {/* Hero Section - Acessível */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#E8F5E9] to-[#F1F8E9] py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 bg-[#8FDB00]/20 text-[#1C4200] px-6 py-4 rounded-full mb-8">
                <Heart className="w-6 h-6" />
                <span className="font-semibold text-lg">Feito para Você, Aposentado</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-[#1C4200] mb-8 leading-tight">
                Crédito Consignado INSS
              </h1>

              <p className="text-2xl lg:text-3xl text-[#1C4200]/80 mb-10 leading-relaxed">
                As melhores taxas para aposentados e pensionistas do INSS.
                Simples, seguro e sem complicação!
              </p>

              <div className="space-y-4 mb-10">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <CheckCircle2 className="w-7 h-7 text-[#8FDB00] flex-shrink-0" />
                    <span className="text-xl text-[#1C4200] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Contact Buttons - Destacado */}
              <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#8FDB00]/20 mb-8">
                <p className="text-xl font-semibold text-[#1C4200] mb-6 text-center">
                  Fale com a gente agora!
                </p>
                <div className="flex flex-col gap-4">
                  <Button
                    asChild
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xl py-8 rounded-xl shadow-lg hover:scale-105 transition-all"
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
                    className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-xl py-8 rounded-xl shadow-lg hover:scale-105 transition-all"
                  >
                    <a href={`tel:${callNumber}`}>
                      <Phone className="w-6 h-6 mr-3" />
                      Ligar: (62) 3387-4759
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[550px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&q=80"
                alt="Aposentados felizes"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C4200]/20 to-transparent"></div>

              {/* Floating Info Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-xl shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg text-[#1C4200]/70 mb-1">Taxa a partir de</p>
                    <p className="text-4xl font-bold text-[#1C4200]">1,65% a.m.</p>
                  </div>
                  <div className="p-4 bg-[#8FDB00]/10 rounded-full">
                    <TrendingDown className="w-8 h-8 text-[#8FDB00]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CreditSimulatorSection
        title="Simule seu crédito INSS"
        subtitle="Veja quanto cabe no seu benefício com taxas especiais para aposentados e pensionistas."
        productOptions={[{ value: "inss", label: "Benefício INSS", rate: 1.65 }]}
        defaultProductType="inss"
        ctaLabel="Quero simular agora"
      />

      {/* Passo a Passo Ilustrado */}
      <section className="relative w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1C4200] mb-6">
              Como funciona? É muito fácil!
            </h2>
            <p className="text-2xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Veja o passo a passo simples para ter seu crédito aprovado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="w-28 h-28 bg-gradient-to-br from-[#8FDB00] to-[#7BC700] text-white rounded-full flex items-center justify-center mx-auto text-4xl font-bold shadow-xl">
                    {step.number}
                  </div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full">
                    <div className="p-4 bg-white/90 rounded-full mx-auto w-fit">
                      <div className="text-[#1C4200]">{step.icon}</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1C4200] mb-4">
                  {step.title}
                </h3>
                <p className="text-xl text-[#1C4200]/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="relative w-full py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1C4200] mb-6">
              Por que escolher a CredCertoBueno?
            </h2>
            <p className="text-2xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Vantagens exclusivas para aposentados e pensionistas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#8FDB00]/20 hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <CheckCircle2 className="w-12 h-12 text-[#8FDB00] mb-6" />
                <h3 className="text-2xl font-bold text-[#1C4200]">{benefit}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="relative w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-[#8FDB00]/10 text-[#1C4200] px-6 py-4 rounded-full mb-6">
              <Users className="w-6 h-6" />
              <span className="font-semibold text-xl">O que dizem nossos clientes</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#1C4200] mb-6">
              Depoimentos de Aposentados
            </h2>
            <p className="text-2xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Veja o que aposentados como você têm a dizer
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-[#F9FAFB] p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#FFD700] text-[#FFD700]" />
                  ))}
                </div>
                <p className="text-xl text-[#1C4200]/80 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#8FDB00]/20 rounded-full flex items-center justify-center">
                    <Users className="w-7 h-7 text-[#1C4200]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1C4200] text-lg">{testimonial.name}</p>
                    <p className="text-[#1C4200]/60">{testimonial.age} anos</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative w-full py-24 bg-gradient-to-br from-[#1C4200] to-[#2d6800]">
        <div className="max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Pronto para começar?
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Milhares de aposentados já confiam na CredCertoBueno.
            Entre em contato agora e descubra as melhores condições!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-2xl py-10 rounded-2xl shadow-xl hover:scale-105 transition-all"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-7 h-7 mr-3" />
                (62) 93338-8331
              </a>
            </Button>
            <Button
              asChild
              className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-2xl py-10 rounded-2xl shadow-xl hover:scale-105 transition-all"
            >
              <a href={`tel:${callNumber}`}>
                <Phone className="w-7 h-7 mr-3" />
                (62) 3387-4759
              </a>
            </Button>
          </div>

          <p className="text-white/70 text-xl mb-2">
            Atendimento de segunda a sexta, das 8h às 18h
          </p>
          <p className="text-white/60 text-lg">
            📍 Av. Cachoeira Dourada, 20 – Vila São Joaquim, Anápolis – GO
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
