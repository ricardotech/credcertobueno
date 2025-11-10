"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, index, isOpen, onToggle }: FAQItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="border-b border-gray-200 last:border-b-0"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left hover:opacity-80 transition-opacity duration-200 group"
      >
        <span className="text-lg lg:text-xl font-semibold text-[#1C4200] pr-8 group-hover:text-[#8FDB00] transition-colors duration-200">
          {question}
        </span>
        <div className="flex-shrink-0 w-8 h-8 bg-[#8FDB00]/10 flex items-center justify-center group-hover:bg-[#8FDB00]/20 transition-all duration-200">
          {isOpen ? (
            <Minus className="w-5 h-5 text-[#1C4200]" />
          ) : (
            <Plus className="w-5 h-5 text-[#1C4200]" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="text-base lg:text-lg text-[#1C4200]/70 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva para aprovar meu crédito?",
      answer:
        "A análise é feita em até 24 horas úteis. Após a aprovação, o valor é depositado na sua conta em até 1 dia útil.",
    },
    {
      question: "Preciso ter conta no banco parceiro?",
      answer:
        "Não necessariamente. Podemos trabalhar com transferência para sua conta em qualquer banco.",
    },
    {
      question: "Qual a taxa de juros?",
      answer:
        "As taxas variam conforme o tipo de crédito e perfil do cliente. Faça uma simulação para ver as condições personalizadas para você.",
    },
    {
      question: "Posso antecipar o pagamento?",
      answer:
        "Sim! Você pode quitar antecipadamente com desconto proporcional dos juros, sem multas ou taxas adicionais.",
    },
    {
      question: "Quais documentos preciso enviar?",
      answer:
        "RG, CPF, comprovante de residência e renda. Documentos específicos podem variar conforme o tipo de crédito escolhido.",
    },
    {
      question: "Meu nome está negativado. Posso conseguir crédito?",
      answer:
        "Sim! Algumas modalidades como crédito consignado aceitam pessoas com restrições no CPF, pois o desconto é feito direto na folha de pagamento.",
    },
    {
      question: "Como funciona o crédito com garantia?",
      answer:
        "Você oferece um bem (veículo ou imóvel) como garantia, o que permite taxas de juros menores. Importante: você continua usando o bem normalmente durante todo o período.",
    },
    {
      question: "Há cobrança de taxa de abertura?",
      answer:
        "Todas as taxas são informadas claramente antes da contratação. Não trabalhamos com taxas escondidas ou cobranças surpresa.",
    },
    {
      question: "Posso simular sem compromisso?",
      answer:
        "Sim! A simulação é 100% gratuita e não gera nenhum compromisso ou consulta ao seu CPF. É apenas para você conhecer as condições disponíveis.",
    },
    {
      question: "Como funciona a consultoria gratuita?",
      answer:
        "Nossa equipe de especialistas analisa seu perfil e necessidades para indicar a melhor solução de crédito, completamente sem custo algum para você.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full flex items-center justify-center bg-[#F9FAFB] py-16 lg:py-24">
      <div className="relative w-full max-w-4xl mx-auto px-4 lg:px-8">
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
            Perguntas Frequentes
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
            className="text-xl lg:text-2xl text-[#1C4200]/70"
          >
            Tire suas dúvidas sobre nossos serviços
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="overflow-hidden">
          <div className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.7,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="mt-12 text-center"
        >
          <p className="text-base lg:text-lg text-[#1C4200]/70 mb-4">
            Não encontrou o que procurava?
          </p>
          <p className="text-lg lg:text-xl text-[#1C4200] font-semibold">
            Entre em contato com nossa equipe para mais informações
          </p>
        </motion.div>
      </div>
    </section>
  );
}
