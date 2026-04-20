"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, FileText, CheckCircle, Wallet } from "lucide-react";

interface StepCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  index: number;
  isLast?: boolean;
}

function StepCard({
  number,
  title,
  description,
  index,
}: StepCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex flex-row lg:flex-row items-start gap-4 lg:gap-8"
      >
        {/* Number Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2 + 0.2,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="flex-shrink-0 w-16 h-16 lg:w-36 lg:h-36 bg-gradient-to-br from-[#8FDB00] to-[#7BC700] flex items-center justify-center text-white font-bold text-2xl lg:text-3xl shadow-lg"
        >
          {number}
        </motion.div>

        {/* Content */}
        <div className="flex-1 text-left">
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="mb-4 inline-flex p-3 bg-[#8FDB00]/10 text-[#1C4200]"
          >
            {icon}
          </motion.div> */}
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-2xl lg:text-3xl font-semibold text-[#1C4200] mb-1"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2 + 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-[#1C4200]/70 text-base leading-relaxed"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default function HowItWorksSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const steps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Simule Online",
      description: "Faça uma simulação em segundos, sem compromisso.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Envie seus Documentos",
      description: "Upload rápido e seguro direto pela plataforma.",
      imageUrl:
        "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&q=80",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Análise Rápida",
      description: "Encontramos a melhor oferta de acordo com seu perfil.",
      imageUrl:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80",
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Receba o Crédito",
      description:
        "Após aprovação, o valor cai em sua conta em até 24 horas úteis.",
      imageUrl:
        "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400&q=80",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-white py-16 lg:py-24">
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
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
            Como Funciona?
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
            className="text-lg lg:text-xl text-[#1C4200]/70 max-w-3xl mx-auto leading-relaxed"
          >
            Crédito rápido e simples em 4 passos
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-24">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              imageUrl={step.imageUrl}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
