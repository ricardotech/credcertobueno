"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingDown,
  Zap,
  Smartphone,
  UserCheck,
  Shield,
  Settings,
} from "lucide-react";

interface DifferentialCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function DifferentialCard({
  icon,
  title,
  description,
  index,
}: DifferentialCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#8FDB00]/30 hover:-translate-y-2"
    >
      {/* Decorative gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8FDB00]/0 to-[#8FDB00]/0 group-hover:from-[#8FDB00]/5 group-hover:to-[#1C4200]/5 transition-all duration-300 -z-10"></div>

      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className="mb-6 p-4 bg-[#8FDB00]/10 text-[#1C4200] w-fit"
      >
        {icon}
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="text-2xl font-semibold text-[#1C4200] mb-4"
      >
        {title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.4,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="text-[#1C4200]/70 text-base leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default function DifferentialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const differentials = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: "Taxas competitivas",
      description: "As melhores condições do mercado",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Aprovação rápida",
      description: "Análise em até 24 horas úteis",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "100% online",
      description: "Contratação sem burocracia",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Consultoria gratuita",
      description: "Especialistas prontos para ajudar",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança garantida",
      description: "Parceiros autorizados pelo Banco Central",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Flexibilidade",
      description: "Prazos e parcelas que cabem no orçamento",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-[#F9FAFB] py-16 lg:py-24">
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
            Por que escolher a CredCertoBueno?
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
            className="text-xl lg:text-2xl text-[#1C4200]/70 max-w-3xl mx-auto"
          >
            Benefícios que fazem diferença no seu bolso
          </motion.p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((differential, index) => (
            <DifferentialCard
              key={index}
              icon={differential.icon}
              title={differential.title}
              description={differential.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
