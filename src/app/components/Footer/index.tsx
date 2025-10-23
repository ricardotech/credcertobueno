"use client";

import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#1C4200] text-white">
      {/* Main Footer Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Institucional */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Institucional
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Soluções */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Soluções</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#services"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Crédito Consignado
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Antecipação FGTS
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Empréstimo com Garantia de Veículo
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Empréstimo com Garantia de Imóvel
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Consignado Privado
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm"
                >
                  Crédito Pessoal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contato@credcertobueno.com.br"
                  className="flex items-start gap-3 text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm group"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-[#8FDB00]" />
                  <span>contato@credcertobueno.com.br</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+551140004000"
                  className="flex items-start gap-3 text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-[#8FDB00]" />
                  <span>(11) 4000-4000</span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-[#8FDB00] transition-colors duration-200 text-sm group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-[#8FDB00]" />
                  <span>WhatsApp: (11) 99999-9999</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/80 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4 - Redes Sociais */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">
              Redes Sociais
            </h3>
            <p className="text-white/80 text-sm mb-6">
              Acompanhe nossas novidades e dicas financeiras
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8FDB00] transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8FDB00] transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8FDB00] transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#8FDB00] transition-all duration-300 group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} CredCertoBueno. Todos os direitos reservados.
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/privacy"
                className="text-white/60 hover:text-[#8FDB00] text-sm transition-colors duration-200"
              >
                Política de Privacidade
              </Link>
              <span className="text-white/40">•</span>
              <Link
                href="/terms"
                className="text-white/60 hover:text-[#8FDB00] text-sm transition-colors duration-200"
              >
                Termos de Uso
              </Link>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/50 text-xs leading-relaxed text-center md:text-left">
              A CredCertoBueno é uma plataforma digital que atua como
              correspondente bancário para facilitar o processo de contratação
              de produtos financeiros. Como correspondente bancário, seguimos as
              diretrizes do Banco Central do Brasil, nos termos da Resolução nº
              3.954, de 24 de fevereiro de 2011. Toda avaliação de crédito será
              realizada conforme a política de crédito da Instituição Financeira
              escolhida pelo usuário. Antes da contratação de qualquer serviço,
              você receberá todas as condições e informações de forma completa e
              transparente.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
