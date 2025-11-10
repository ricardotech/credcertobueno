"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";

export default function CTAContactSection() {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    creditType: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        creditType: "",
        message: "",
      });
    }, 3000);
  };

  const handleWhatsApp = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "5511999999999";
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre as soluções de crédito da CredCertoBueno."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

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
            Fale com um Especialista
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
            Pronto para conquistar seu crédito com segurança e as melhores taxas?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:gap-16 items-center">
          {/* Form Side */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative bg-[#F9FAFB] p-8 lg:p-10 border border-gray-100 max-w-[600px] w-full mx-auto"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <div className="w-16 h-16 bg-[#8FDB00] flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-[#1C4200] mb-3">
                  Mensagem enviada!
                </h3>
                <p className="text-[#1C4200]/70 text-center">
                  Obrigado pelo contato. Nossa equipe retornará em breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#1C4200] mb-2"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#8FDB00] focus:ring-2 focus:ring-[#8FDB00]/20 outline-none transition-all duration-200 bg-white"
                    placeholder="Digite seu nome"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#1C4200] mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#8FDB00] focus:ring-2 focus:ring-[#8FDB00]/20 outline-none transition-all duration-200 bg-white"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#1C4200] mb-2"
                  >
                    Telefone (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#8FDB00] focus:ring-2 focus:ring-[#8FDB00]/20 outline-none transition-all duration-200 bg-white"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                {/* Credit Type Select */}
                <div>
                  <label
                    htmlFor="creditType"
                    className="block text-sm font-semibold text-[#1C4200] mb-2"
                  >
                    Tipo de crédito *
                  </label>
                  <select
                    id="creditType"
                    name="creditType"
                    value={formData.creditType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#8FDB00] focus:ring-2 focus:ring-[#8FDB00]/20 outline-none transition-all duration-200 bg-white"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="veiculo">
                      Empréstimo com garantia de veículo
                    </option>
                    <option value="imovel">
                      Empréstimo com garantia de imóvel
                    </option>
                    <option value="consignado-privado">
                      Empréstimo consignado privado
                    </option>
                    <option value="fgts">Antecipação do FGTS</option>
                    <option value="consignado">Crédito Consignado</option>
                    <option value="clt">Consignado para CLT</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1C4200] mb-2"
                  >
                    Mensagem (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 focus:border-[#8FDB00] focus:ring-2 focus:ring-[#8FDB00]/20 outline-none transition-all duration-200 bg-white resize-none"
                    placeholder="Conte-nos mais sobre suas necessidades..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#8FDB00] hover:bg-[#7BC700] text-black font-semibold py-6 text-lg transition-all duration-300"
                >
                  Solicitar Contato
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
