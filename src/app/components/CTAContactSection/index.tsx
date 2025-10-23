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
            Pronto para dar o próximo passo?
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
            Fale com um especialista e descubra a melhor solução para você
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
            className="relative bg-[#F9FAFB] rounded-2xl p-8 lg:p-10 border border-gray-100"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12"
              >
                <div className="w-16 h-16 bg-[#8FDB00] rounded-full flex items-center justify-center mb-6">
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8FDB00] focus:ring-2 focus:ring-[#8FDB00]/20 outline-none transition-all duration-200 bg-white"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8FDB00] focus:ring-2 focus:ring-[#8FDB00]/20 outline-none transition-all duration-200 bg-white"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8FDB00] focus:ring-2 focus:ring-[#8FDB00]/20 outline-none transition-all duration-200 bg-white"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8FDB00] focus:ring-2 focus:ring-[#8FDB00]/20 outline-none transition-all duration-200 bg-white"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#8FDB00] focus:ring-2 focus:ring-[#8FDB00]/20 outline-none transition-all duration-200 bg-white resize-none"
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

                {/* WhatsApp Alternative */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-[#F9FAFB] text-[#1C4200]/60">
                      ou
                    </span>
                  </div>
                </div>

                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 text-lg transition-all duration-300"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  Falar no WhatsApp
                </Button>
              </form>
            )}
          </motion.div>

          {/* Image/Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
            }
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80"
                alt="Atendimento CredCertoBueno"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C4200]/40 to-transparent"></div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-semibold text-[#1C4200]">
                Por que entrar em contato?
              </h3>
              <ul className="space-y-4">
                {[
                  "Consultoria gratuita e personalizada",
                  "Análise completa do seu perfil",
                  "Apresentação das melhores opções",
                  "Atendimento ágil e transparente",
                  "Suporte em todas as etapas",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isFormInView
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="flex items-center gap-3 text-[#1C4200]/80 text-lg"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#8FDB00]"></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
