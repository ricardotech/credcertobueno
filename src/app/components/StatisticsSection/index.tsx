"use client";

import React from "react";
import { Users, Briefcase, Star } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  suffix?: string;
}

function StatCard({ icon, value, label, suffix = "" }: StatCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="mb-4 p-4 bg-[#8FDB00]/10 text-[#1C4200]">{icon}</div>
      <div className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-2">
        {value}
        {suffix}
      </div>
      <p className="text-base lg:text-lg text-[#1C4200]/70">{label}</p>
    </div>
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
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
