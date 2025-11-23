"use client";

import React, { useRef } from "react";
import { motion, useInView } from "@/lib/static-motion";
import {
  Plane,
  PiggyBank,
  GraduationCap,
  Home,
  Heart,
  TrendingUp,
} from "lucide-react";

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function UseCaseCard({ icon, title, description, index }: UseCaseCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative bg-white/10 backdrop-blur-sm p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={
          isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
        }
        transition={{
          duration: 0.6,
          delay: index * 0.1 + 0.2,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className="mb-6 p-4 bg-white/20 text-white w-fit group-hover:bg-white/30 transition-all duration-300"
      >
        {icon}
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="text-2xl font-semibold text-white mb-3"
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
        className="text-white/80 text-base leading-relaxed"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

export default function UseCasesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const useCases = [
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Realizar sonhos",
      description: "Viagem, festa, casamento, projeto especial",
    },
    {
      icon: <PiggyBank className="w-8 h-8" />,
      title: "Organizar finanças",
      description: "Quitar dívidas e equilibrar o orçamento",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Investir no futuro",
      description: "Educação e qualificação",
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Reformar a casa",
      description: "Melhorias e ampliação",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cuidar da saúde",
      description: "Tratamentos e bem-estar",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Empreender",
      description: "Abrir negócio ou capital de giro",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-gradient-to-br from-[#1C4200] to-[#2D6600] py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(143,219,0,0.1),transparent_50%)]"></div>
      </div>

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
            className="text-4xl lg:text-6xl font-semibold text-white mb-6"
          >
            Dinheiro para todos os momentos da Sua Vida
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
            className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto"
          >
            Transforme seus objetivos em realidade
          </motion.p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
