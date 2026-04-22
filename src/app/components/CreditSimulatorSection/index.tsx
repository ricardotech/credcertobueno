"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingDown, Clock, CheckCircle2 } from "lucide-react";

type ProductOption = {
  value: string;
  label: string;
  rate?: number;
};

type CreditSimulatorSectionProps = {
  title?: string;
  subtitle?: string;
  productOptions?: ProductOption[];
  defaultProductType?: string;
  ctaLabel?: string;
};

const DEFAULT_PRODUCTS: Required<ProductOption>[] = [
  { value: "inss", label: "INSS", rate: 1.65 },
  { value: "siape", label: "SIAPE - Servidor Federal", rate: 1.45 },
  { value: "clt", label: "CLT e FGTS", rate: 1.75 },
  { value: "governo", label: "Servidor Estadual", rate: 1.55 },
  { value: "municipal", label: "Servidor Municipal", rate: 1.6 },
];

export default function CreditSimulatorSection({
  title = "Simule seu Crédito Consignado",
  subtitle = "Descubra quanto você pode solicitar e qual será sua parcela",
  productOptions,
  defaultProductType,
  ctaLabel = "Solicitar Agora",
}: CreditSimulatorSectionProps) {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const [amount, setAmount] = useState(10000);
  const [installments, setInstallments] = useState(24);

  const products = useMemo(() => {
    if (!productOptions || productOptions.length === 0) {
      return DEFAULT_PRODUCTS;
    }

    return productOptions.map((product) => ({
      ...product,
      rate:
        product.rate ??
        DEFAULT_PRODUCTS.find((defaultProduct) => defaultProduct.value === product.value)?.rate ??
        1.65,
    }));
  }, [productOptions]);

  const [productType, setProductType] = useState(() => {
    const fallback = products[0]?.value ?? DEFAULT_PRODUCTS[0].value;

    if (defaultProductType && products.some((product) => product.value === defaultProductType)) {
      return defaultProductType;
    }

    return fallback;
  });

  useEffect(() => {
    const fallback = products[0]?.value ?? DEFAULT_PRODUCTS[0].value;

    if (defaultProductType && products.some((product) => product.value === defaultProductType)) {
      setProductType(defaultProductType);
      return;
    }

    if (!products.some((product) => product.value === productType)) {
      setProductType(fallback);
    }
  }, [defaultProductType, productType, products]);

  const rates = useMemo(() => {
    return products.reduce<Record<string, number>>((map, product) => {
      map[product.value] = product.rate ?? 0;
      return map;
    }, {});
  }, [products]);

  const currentRate = rates[productType] ?? products[0]?.rate ?? 0;

  const calculateInstallment = () => {
    const rate = currentRate / 100;
    const installmentValue =
      (amount * rate * Math.pow(1 + rate, installments)) /
      (Math.pow(1 + rate, installments) - 1);
    return installmentValue.toFixed(2);
  };

  const handleSimulateClick = () => {
    if (productType === "inss" || productType === "siape") {
      window.location.href = "/consulta-online";
    } else if (productType === "governo") {
      window.open("https://w.app/ii4ndh", "_blank");
    } else if (productType === "municipal") {
      window.open("https://w.app/6m2c7s", "_blank");
    } else if (productType === "clt") {
      window.open("https://w.app/credcertobueno", "_blank");
    } else {
      window.open("https://w.app/tfkx3w", "_blank");
    }
  };

  return (
    <section
      id="simulacao"
      className="relative w-full flex items-center justify-center bg-gradient-to-br from-[#1C4200] to-[#2d6800] py-16 lg:py-24"
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isHeaderInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="inline-flex items-center gap-2 bg-[#8FDB00]/20 text-[#8FDB00] px-6 py-3 rounded-full mb-6"
          >
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">Simulador de Crédito</span>
          </motion.div>

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
            {title}
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
            className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Simulator Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
          }
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left Side - Form */}
          <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-2xl">
            <div className="space-y-6">
              {/* Product Type */}
              <div>
                <label className="block text-sm font-semibold text-[#1C4200] mb-3">
                  Tipo de Crédito Consignado
                </label>
                <select
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8FDB00] focus:outline-none transition-colors text-[#1C4200] font-medium"
                >
                  {products.map((product) => (
                    <option key={product.value} value={product.value}>
                      {product.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm font-semibold text-[#1C4200] mb-3">
                  Quanto você precisa?
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1C4200] font-bold text-lg">
                    R$
                  </span>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="hidden"
                  />
                  <input
                    type="text"
                    value={amount.toLocaleString("pt-BR")}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, "");
                      setAmount(Number(value));
                    }}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#8FDB00] focus:outline-none transition-colors text-[#1C4200] font-bold text-lg"
                  />
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full mt-3 accent-[#8FDB00]"
                />
              </div>

              {/* Installments */}
              <div>
                <label className="block text-sm font-semibold text-[#1C4200] mb-3">
                  Em quantas parcelas?
                </label>
                <input
                  type="range"
                  min="6"
                  max="84"
                  step="6"
                  value={installments}
                  onChange={(e) => setInstallments(Number(e.target.value))}
                  className="w-full accent-[#8FDB00]"
                />
                <div className="text-center mt-2">
                  <span className="text-2xl font-bold text-[#1C4200]">
                    {installments}x
                  </span>
                </div>
              </div>

              {/* Benefits */}
              <div className="pt-6 border-t border-gray-200">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[#1C4200]">
                    <CheckCircle2 className="w-5 h-5 text-[#8FDB00] flex-shrink-0" />
                    <span className="text-sm">Taxa a partir de {currentRate}% a.m.</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#1C4200]">
                    <CheckCircle2 className="w-5 h-5 text-[#8FDB00] flex-shrink-0" />
                    <span className="text-sm">Aprovação em até 24 horas</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#1C4200]">
                    <CheckCircle2 className="w-5 h-5 text-[#8FDB00] flex-shrink-0" />
                    <span className="text-sm">100% online e sem burocracia</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Results */}
          <div className="flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 p-8 lg:p-10 rounded-2xl">
              <div className="text-center mb-8">
                <p className="text-white/80 text-lg mb-2">Valor da parcela</p>
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  R$ {calculateInstallment()}
                </div>
                <p className="text-white/60 text-sm">em {installments} parcelas</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-[#8FDB00] mb-2">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-xs font-semibold">Taxa</span>
                  </div>
                  <p className="text-white text-xl font-bold">{currentRate}% a.m.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-[#8FDB00] mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-semibold">Prazo</span>
                  </div>
                  <p className="text-white text-xl font-bold">{installments} meses</p>
                </div>
              </div>

              <Button 
                onClick={handleSimulateClick}
                className="w-full bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {ctaLabel}
              </Button>

              <p className="text-white/60 text-xs text-center mt-4">
                * Valores e taxas sujeitos a análise de crédito
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
