"use client";

import React from "react";
import Image from "next/image";
import { Zap, Eye, Award } from "lucide-react";

interface PillarCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

function PillarCard({ icon, title, description }: PillarCardProps) {
  return (
    <div className="flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm border border-[#8FDB00]/20 hover:border-[#8FDB00]/40 transition-all duration-300">
      <div className="flex-shrink-0 p-3 bg-[#8FDB00]/10 text-[#1C4200]">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-semibold text-[#1C4200] mb-2">{title}</h4>
        <p className="text-[#1C4200]/70 text-base">{description}</p>
      </div>
    </div>
  );
}

export default function AboutSection() {
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
          <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
            <Image
              src="/feliz.jpg"
              alt="Equipe CredCertoBueno"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C4200]/20 to-transparent"></div>
          </div>

          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <div className="border-l-4 border-[#8FDB00] pl-6 mb-8">
              <h2 className="text-4xl lg:text-6xl font-semibold text-[#1C4200] mb-6">
                Crédito Consignado Especializado
              </h2>
            </div>

            <p className="text-lg lg:text-xl text-[#1C4200]/70 leading-relaxed mb-8">
              Somos especialistas em crédito consignado para aposentados do INSS,
              servidores públicos federais (SIAPE), estaduais e municipais, além de
              trabalhadores CLT. Oferecemos as melhores taxas e condições do mercado
              com total transparência e atendimento personalizado.
            </p>

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
