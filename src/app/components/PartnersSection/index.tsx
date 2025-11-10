"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface PartnerCardProps {
  name: string;
  logoUrl: string;
  index: number;
}

function PartnerCard({ name, logoUrl, index }: PartnerCardProps) {
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
      className="group relative flex items-center justify-center min-h-[120px] p-4"
    >
      <div className="relative w-full h-full lg:h-16 transition-all duration-300">
        <Image
          src={logoUrl}
          alt={`${name} - Parceiro CredCertoBueno`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 200px"
        />
      </div>
    </motion.div>
  );
}

export default function PartnersSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const partners = [
    { name: "Banco do Brasil", logoUrl: "/bb.png" },
    { name: "Banco BMG", logoUrl: "/bmg.png" },
    { name: "C6 Bank", logoUrl: "/c6.png" },
    { name: "Crefisa", logoUrl: "/crefisa.png" },
    { name: "Banco PAN", logoUrl: "/pan.png" },
    { name: "Caixa Econômica Federal", logoUrl: "/caixa.png" },
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
            Parceiros que garantem segurança e credibilidade
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
            Trabalhamos com as principais instituições financeiras do país
          </motion.p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <PartnerCard
              key={index}
              name={partner.name}
              logoUrl={partner.logoUrl}
              index={index}
            />
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{
            duration: 0.7,
            delay: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-16 text-center"
        >
          <p className="text-base text-[#1C4200]/60 max-w-2xl mx-auto">
            Todas as instituições parceiras são regulamentadas pelo Banco
            Central do Brasil, garantindo segurança e transparência em todas as
            operações.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
