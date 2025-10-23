"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUsers, FaStar, FaCalendarAlt, FaBuilding } from "react-icons/fa";

interface KPICardProps {
  prefix?: string;
  value: string;
  label: string;
  index: number;
}

function KPICard({ prefix, value, label, index }: KPICardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const icons = [
    <FaUsers className="text-[#1C4200] text-4xl mb-4 mx-auto" />,
    <FaBuilding className="text-[#1C4200] text-4xl mb-4 mx-auto" />,
    <FaStar className="text-[#1C4200] text-4xl mb-4 mx-auto" />,
    <FaCalendarAlt className="text-[#1C4200] text-4xl mb-4 mx-auto" />,
  ];

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
      className="relative text-center"
    >
      <div className="relative p-6 lg:p-8">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={isInView ? { scale: 1 } : { scale: 0.9 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="relative z-10"
        >
          {icons[index]}
          <h3 className="text-4xl lg:text-6xl font-bold text-[#1C4200] mb-3 lg:mb-4">
            {prefix && <span className="block">{prefix}</span>}
            {value}
          </h3>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-xs mx-auto">
            {label}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function KPIsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const kpis = [
    {
      value: "+200mil",
      label: "clientes satisfeitos",
    },
    {
      value: "+20",
      label: "colaboradores",
    },
    {
      prefix: "",
      value: "4.9",
      label: "de avaliação no Google",
    },
    {
      prefix: "",
      value: "15",
      label: "anos facilitando crédito",
    },
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold text-[#1C4200] mb-4 lg:mb-6">
            Números que falam por si só
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nossa experiência e credibilidade construídas ao longo dos anos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {kpis.map((kpi, index) => (
            <KPICard
              key={index}
              prefix={kpi.prefix}
              value={kpi.value}
              label={kpi.label}
              index={index}
            />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#8FDB00]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-[#1C4200]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
