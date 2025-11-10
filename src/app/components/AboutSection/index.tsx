"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Zap, Eye, Award } from "lucide-react";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function PillarCard({ icon, title, description, index }: PillarCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm border border-[#8FDB00]/20 hover:border-[#8FDB00]/40 transition-all duration-300"
    >
      <div className="flex-shrink-0 p-3 bg-[#8FDB00]/10 text-[#1C4200]">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-[#1C4200] mb-2">{title}</h4>
        <p className="text-[#1C4200]/70 text-base">{description}</p>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const pillars = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Eficiência",
      description: "Processos digitais e aprovação rápida",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparência",
      description: "Sem taxas escondidas",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excelência",
      description: "Consultoria personalizada para cada cliente",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-white py-16 lg:py-24">
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative h-[400px] lg:h-[600px] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Equipe CredCertoBueno"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C4200]/20 to-transparent"></div>
          </motion.div>

          {/* Content Side */}
          <div ref={headerRef} className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.7,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="border-l-4 border-[#8FDB00] pl-6 mb-8"
            >
              <h2 className="text-4xl lg:text-6xl font-semibold text-[#1C4200] mb-6">
                Transformamos crédito em oportunidade
              </h2>
            </motion.div>

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
              Nossa equipe trabalha para oferecer soluções financeiras seguras,
              com transparência e excelência no atendimento.
            </motion.p>

            <div className="space-y-4">
              {pillars.map((pillar, index) => (
                <PillarCard
                  key={index}
                  icon={pillar.icon}
                  title={pillar.title}
                  description={pillar.description}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
