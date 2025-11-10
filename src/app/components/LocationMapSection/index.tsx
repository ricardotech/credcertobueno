"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  index: number;
}

function InfoCard({ icon, title, content, index }: InfoCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex items-start gap-4 p-6 bg-white/50 backdrop-blur-sm border border-[#8FDB00]/20 hover:border-[#8FDB00]/40 transition-all duration-300"
    >
      <div className="flex-shrink-0 p-3 bg-[#8FDB00]/10 text-[#1C4200]">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-[#1C4200] mb-1">{title}</h4>
        <p className="text-[#1C4200]/70 text-base leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
}

export default function LocationMapSection() {
  const headerRef = useRef(null);
  const mapRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isMapInView = useInView(mapRef, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      content:
        "Av. Cachoeira Dourada, 20 - 040 - Vila São Joaquim, Anápolis - GO, 75145-040",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horário de Atendimento",
      content: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      content: "(62) 3098-0000 | WhatsApp: (62) 99999-9999",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "E-mail",
      content: "contato@credcertobueno.com.br",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-white py-16 lg:py-24">
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={
              isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-block border-l-4 border-[#8FDB00] pl-6 mb-6"
          >
            <h2 className="text-4xl lg:text-6xl font-semibold text-[#1C4200] text-left">
              Visite nossa loja
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
            className="text-lg lg:text-xl text-[#1C4200]/70 max-w-3xl mx-auto leading-relaxed"
          >
            Estamos prontos para atender você pessoalmente. Venha conhecer nossa
            estrutura e conversar com nossos especialistas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <InfoCard
                key={index}
                icon={info.icon}
                title={info.title}
                content={info.content}
                index={index}
              />
            ))}
          </div>

          {/* Google Maps Embed */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isMapInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative h-[400px] lg:h-[500px] overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.8367891234567!2d-48.9533!3d-16.3289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE5JzQ0LjAiUyA0OMKwNTcnMTIuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&q=Av.+Cachoeira+Dourada,+20+-+Vila+Sao+Joaquim,+Anápolis+-+GO,+75145-040"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização CredCertoBueno"
              className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
