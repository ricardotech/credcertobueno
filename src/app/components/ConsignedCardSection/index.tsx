"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  CreditCard,
  CheckCircle2,
  ShieldCheck,
  TrendingDown,
  Clock,
} from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function BenefitCard({ icon, title, description, index }: BenefitCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex items-start gap-4"
    >
      <div className="flex-shrink-0 p-3 bg-[#8FDB00]/10 text-[#1C4200] rounded-lg">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-[#1C4200] mb-2">{title}</h4>
        <p className="text-[#1C4200]/70 text-base leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default function ConsignedCardSection() {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Taxas Reduzidas",
      description:
        "As menores taxas do mercado para cartão de crédito consignado.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Aprovação Facilitada",
      description:
        "Sem consulta ao SPC/Serasa. Aprovação rápida e sem burocracia.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Desconto Automático",
      description:
        "Parcelas descontadas direto no benefício ou folha de pagamento.",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Limite Garantido",
      description:
        "Limite de crédito disponível conforme sua margem consignável.",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-gradient-to-br from-[#F9FAFB] to-white py-16 lg:py-24">
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isHeaderInView
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.8 }
          }
          transition={{
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-[#8FDB00]/20 text-[#1C4200] px-6 py-3 rounded-full">
            <CreditCard className="w-5 h-5" />
            <span className="font-semibold">Cartão Consignado</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div ref={headerRef} className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-4xl lg:text-6xl font-semibold text-[#1C4200] mb-6"
            >
              Cartão de Crédito Consignado RMC & RCC
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="text-lg lg:text-xl text-[#1C4200]/70 leading-relaxed mb-8"
            >
              Exclusivo para aposentados, pensionistas do INSS e servidores
              públicos federais. Tenha acesso a crédito com as melhores
              condições, sem comprometer seu orçamento mensal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="space-y-6 mb-8"
            >
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={index}
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.7,
                delay: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-semibold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Solicitar Cartão
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#1C4200] text-[#1C4200] hover:bg-[#1C4200] hover:text-white font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
              >
                Saiba Mais
              </Button>
            </motion.div>
          </div>

          {/* Image Side */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[600px] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                alt="Cartão de Crédito Consignado"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C4200]/30 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isImageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-[#8FDB00]/10 rounded-lg">
                  <CreditCard className="w-8 h-8 text-[#1C4200]" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Limite disponível</p>
                  <p className="text-2xl font-bold text-[#1C4200]">
                    até R$ 20.000
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{
            duration: 0.7,
            delay: 1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-16 p-8 bg-white rounded-2xl shadow-lg border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-[#1C4200] mb-4 text-center">
            Como funciona o Cartão Consignado?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#8FDB00] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-[#1C4200] mb-2">
                Solicite seu cartão
              </h4>
              <p className="text-[#1C4200]/70 text-sm">
                Preencha o cadastro e envie os documentos necessários
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#8FDB00] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-[#1C4200] mb-2">
                Análise e aprovação
              </h4>
              <p className="text-[#1C4200]/70 text-sm">
                Analisamos sua margem consignável em até 24 horas
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#8FDB00] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-[#1C4200] mb-2">
                Receba em casa
              </h4>
              <p className="text-[#1C4200]/70 text-sm">
                Cartão enviado para seu endereço com limite pré-aprovado
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
