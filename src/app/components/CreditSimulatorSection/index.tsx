"use client";

import React, { useEffect, useMemo, useState } from "react";
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

  return (
    <section
      id="simulacao"
      className="relative w-full flex items-center justify-center bg-gradient-to-br from-[#1C4200] to-[#2d6800] py-16 lg:py-24"
    >
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#8FDB00]/20 text-[#8FDB00] px-6 py-3 rounded-full mb-6">
            <Calculator className="w-5 h-5" />
            <span className="font-semibold">Simulador de Crédito</span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-semibold text-white mb-6">{title}</h2>
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Simulator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
                  <span className="text-2xl font-bold text-[#1C4200]">{installments}x</span>
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

          {/* Right Side - Summary */}
          <div className="bg-white/10 p-8 lg:p-10 rounded-2xl border border-white/20 text-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-10 h-10 text-[#8FDB00]" />
                  <div>
                    <p className="text-sm text-white/70">Taxa de Juros</p>
                    <p className="text-2xl font-bold text-white">{currentRate}% a.m.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Clock className="w-10 h-10 text-[#8FDB00]" />
                  <div>
                    <p className="text-sm text-white/70">Parcelas</p>
                    <p className="text-2xl font-bold text-white">{installments} meses</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/10 sm:col-span-2">
                <p className="text-sm text-white/70">Parcela estimada</p>
                <p className="text-4xl lg:text-5xl font-bold text-[#8FDB00]">
                  R$ {calculateInstallment()}
                </p>
                <p className="text-sm text-white/60 mt-2">Simulação com base na taxa média do mercado</p>
              </div>
            </div>

            <Button className="w-full bg-[#8FDB00] hover:bg-[#8FDB00]/90 text-[#1C4200] text-lg py-6 rounded-xl shadow-lg shadow-[#1C4200]/20">
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
