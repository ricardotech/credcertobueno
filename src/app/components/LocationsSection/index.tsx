"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { MapPin, Building2 } from "lucide-react";

interface LocationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  index: number;
}

function LocationCard({
  title,
  description,
  imageUrl,
  icon,
  index,
}: LocationCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#8FDB00]/40 overflow-hidden"
    >
      {/* Image Container with Overlay */}
      <div className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }
          }
          transition={{
            duration: 0.8,
            delay: index * 0.2 + 0.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="relative w-full h-full"
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 lg:group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C4200]/80 via-[#1C4200]/20 to-transparent group-hover:from-[#1C4200]/90 transition-all duration-500"></div>
        </motion.div>

        {/* Icon Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={
            isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }
          }
          transition={{
            duration: 0.6,
            delay: index * 0.2 + 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
          className="absolute top-6 right-6 p-4 bg-[#8FDB00] text-[#1C4200] shadow-lg lg:group-hover:scale-110 transition-transform duration-300"
        >
          {icon}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          delay: index * 0.2 + 0.5,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="p-8 lg:p-10"
      >
        <h3 className="text-2xl lg:text-3xl font-semibold text-[#1C4200] mb-4">
          {title}
        </h3>
        <p className="text-[#1C4200]/70 text-base lg:text-lg leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Decorative gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8FDB00]/0 to-[#8FDB00]/0 group-hover:from-[#8FDB00]/5 group-hover:to-[#1C4200]/5 transition-all duration-500 pointer-events-none"></div>
    </motion.div>
  );
}

export default function LocationsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const locations = [
    {
      title: "Nossa Sede",
      description: "Moderna, completa e pronta para receber você.",
      imageUrl: "/headquarter.webp",
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      title: "Loja Física",
      description:
        "Atendimento acolhedor, consultoria especializada e total transparência.",
      imageUrl: "/store-front.webp",
      icon: <MapPin className="w-8 h-8" />,
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-[#F9FAFB] py-16 lg:py-24">
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
              Conheça nossos espaços
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
            Ambientes pensados para atender você com conforto e segurança
          </motion.p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {locations.map((location, index) => (
            <LocationCard
              key={index}
              title={location.title}
              description={location.description}
              imageUrl={location.imageUrl}
              icon={location.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
