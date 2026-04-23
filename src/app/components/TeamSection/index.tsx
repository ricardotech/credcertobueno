"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  index: number;
}

function TeamMemberCard({ name, role, imageUrl, index }: TeamMemberProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative flex flex-col items-center bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-[#8FDB00]/30"
    >
      {/* Decorative gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8FDB00]/0 to-[#8FDB00]/0 group-hover:from-[#8FDB00]/5 group-hover:to-[#1C4200]/5 transition-all duration-300 pointer-events-none"></div>

      <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-full bg-gray-50 border-4 border-gray-50 group-hover:border-[#8FDB00]/20 transition-all duration-500 max-w-[200px]">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="text-center z-10">
        <h3 className="text-2xl font-semibold text-[#1C4200] mb-2">{name}</h3>
        <p className="text-[#1C4200]/60 text-sm tracking-wider uppercase font-medium">{role}</p>
      </div>
    </motion.div>
  );
}

export default function TeamSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const team = [
    {
      name: "Funcionário 1",
      role: "Especialista em Crédito",
      imageUrl: "/f1.jpeg",
    },
    {
      name: "Funcionário 2",
      role: "Consultoria Financeira",
      imageUrl: "/f2.jpeg",
    },
    {
      name: "Funcionário 3",
      role: "Atendimento ao Cliente",
      imageUrl: "/f3.jpeg",
    },
    {
      name: "Funcionário 4",
      role: "Analista de Operações",
      imageUrl: "/f4.jpeg",
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
            Nossa Equipe
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
            Conheça os profissionais dedicados a oferecer as melhores soluções com transparência e atendimento personalizado.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <TeamMemberCard
              key={index}
              index={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
