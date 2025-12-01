"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ChevronDown } from "lucide-react";

export default function GlobalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const products = [
    { name: "INSS", href: "/inss" },
    { name: "SIAPE - Servidor Federal", href: "/siape" },
    { name: "CLT e FGTS", href: "/clt-fgts" },
    { name: "Servidor Estadual", href: "/servidor-estadual" },
    { name: "Servidor Municipal", href: "/servidor-municipal" },
    {
      name: "Seguro Financiamento Veicular",
      href: "/seguro-financiamento-veicular",
    },
  ];

  return (
    <>
      <header className="w-full h-[70px] bg-[#FFF] flex items-center justify-between fixed z-50 shadow-sm">
        <div className="w-full flex mx-auto max-w-7xl justify-between items-center px-4 xl:px-0">
          <Link
            href="/"
            onClick={() => {
              setIsMenuOpen(false);
              setIsProductsOpen(false);
            }}
            className="flex items-center"
          >
            <Image
              src="/icon.png"
              alt="CredCertoBueno icon"
              height={40}
              width={40}
              className="mr-2"
            />
            <p className="text-xl text-black font-bold">CredCertoBueno</p>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                onMouseEnter={() => setIsProductsOpen(true)}
                className="flex items-center gap-2 text-black font-medium hover:text-[#1C4200] transition-colors"
              >
                Produtos
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-xl rounded-lg border border-gray-100 py-2"
                >
                  {products.map((product, index) => (
                    <a
                      key={index}
                      href={product.href}
                      className="block px-4 py-3 text-[#1C4200] hover:bg-[#8FDB00]/10 transition-colors"
                    >
                      <div className="font-medium">{product.name}</div>
                      <div className="text-xs text-gray-500">
                        Crédito Consignado
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#simulacao"
              className="text-black font-medium hover:text-[#1C4200] transition-colors"
            >
              Simulador
            </a>

            <Button className="bg-[#8FDB00] px-6 py-5 text-black font-semibold hover:bg-[#7BC700] transition-colors">
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex lg:hidden"
          >
            <AiOutlineMenu size={25} color="#000" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg lg:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <div>
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center justify-between w-full text-black font-medium py-2"
                >
                  Produtos
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {products.map((product, index) => (
                      <a
                        key={index}
                        href={product.href}
                        className="block py-2 text-[#1C4200]"
                      >
                        {product.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#simulacao"
                className="text-black font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Simulador
              </a>

              <Button className="bg-[#8FDB00] w-full text-black font-semibold hover:bg-[#7BC700]">
                Fale Conosco
              </Button>
            </div>
          </div>
        )}
      </header>
      <div className="h-[70px]" />
    </>
  );
}
