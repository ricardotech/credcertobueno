"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Briefcase, Star } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  index: number;
  suffix?: string;
}

function StatCard({ icon, value, label, index, suffix = "" }: StatCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  // Extract numeric value for animation
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const hasPlus = value.includes("+");

  useEffect(() => {
    if (isInView && numericValue) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = numericValue / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  const formatCount = (num: number) => {
    if (numericValue >= 1000) {
      return `${(num / 1000).toFixed(0)}k`;
    }
    return num.toString();
  };

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
      className="flex flex-col items-center text-center p-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.2,
          ease: [0.34, 1.56, 0.64, 1],
        }}
        className="mb-4 p-4 bg-[#8FDB00]/10 text-[#1C4200]"
      >
        {icon}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.3,
        }}
        className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-2"
      >
        {numericValue ? (
          <>
            {hasPlus && "+"}
            {formatCount(count)}
            {suffix}
          </>
        ) : (
          value
        )}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.4,
        }}
        className="text-base lg:text-lg text-[#1C4200]/70"
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export default function StatisticsSection() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "+25000",
      label: "Empréstimos aprovados",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: "+10",
      label: "Anos de experiência",
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: "5",
      label: "Avaliação no Google",
      suffix: "/5.0",
    },
  ];

  return (
    <section className="relative w-full flex items-center justify-center bg-[#F9FAFB] py-16 lg:py-24">
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              index={index}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
