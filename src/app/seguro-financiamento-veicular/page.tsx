"use client";

import GlobalHeader from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Scale,
  FileText,
  MessageCircle,
  Phone,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Building2,
  Sparkles,
} from "lucide-react";

export default function SeguroFinanciamentoVeicularPage() {
  const whatsappNumber = "556293338331";
  const callNumber = "+556233874759";
  const whatsappMessage = encodeURIComponent(
    "Olá! Fui cobrado por seguro no meu financiamento de veículo e quero recuperar o valor."
  );

  const benefits = [
    {
      title: "Estorno em dobro garantido",
      description:
        "Aplicamos o Código de Defesa do Consumidor para reaver tudo o que foi cobrado de forma abusiva.",
      icon: <Scale className="w-10 h-10 text-[#8FDB00]" />,
    },
    {
      title: "Indenização pelo dano sofrido",
      description:
        "Buscamos compensação financeira adicional pelos transtornos e prejuízos causados.",
      icon: <ShieldCheck className="w-10 h-10 text-[#8FDB00]" />,
    },
    {
      title: "Equipe jurídica especializada",
      description:
        "Atendimento humanizado, revisão do contrato e estratégia sob medida para seu caso.",
      icon: <HeartHandshake className="w-10 h-10 text-[#8FDB00]" />,
    },
  ];

  const steps = [
    {
      title: "Converse com um especialista",
      description:
        "Explique o que aconteceu no financiamento e envie seus dados de contato.",
      icon: <MessageCircle className="w-8 h-8" />,
    },
    {
      title: "Envie contrato e comprovantes",
      description:
        "Analisamos boletos, contrato e extratos para identificar cobranças indevidas.",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      title: "Receba o plano de ação",
      description:
        "Mostramos como solicitar estorno em dobro, cancelar o seguro e buscar indenização.",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Acompanhe até o reembolso",
      description:
        "Mantemos você informado até a devolução do valor pago e a conclusão do processo.",
      icon: <Clock className="w-8 h-8" />,
    },
  ];

  const rights = [
    "Devolução em dobro do seguro cobrado sem autorização",
    "Cancelamento definitivo do seguro acoplado ao financiamento",
    "Indenização por danos morais quando há cobrança abusiva",
    "Análise individualizada do contrato para identificar outras taxas",
    "Atendimento rápido pelo WhatsApp e acompanhamento completo",
  ];

  const successHighlights = [
    {
      label: "Consumidores atendidos",
      value: "+3.500",
      detail: "Casos de cobranças abusivas em financiamentos revisados",
    },
    {
      label: "Devoluções conquistadas",
      value: "R$ 2,8 mi",
      detail: "Valores recuperados entre estornos e indenizações",
    },
    {
      label: "Tempo médio",
      value: "7 dias",
      detail: "Para apresentar estratégia e iniciar o pedido de ressarcimento",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white">
      <GlobalHeader showProducts={false} />

      <section className="relative w-full min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#F0F8EC] via-[#F8FFF0] to-[#E8F5E9] py-20">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(143,219,0,0.25),transparent_25%),radial-gradient(circle_at_80%_0,rgba(28,66,0,0.25),transparent_25%)]"></div>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 bg-[#8FDB00]/20 text-[#1C4200] px-5 py-3 rounded-full font-semibold">
                <Sparkles className="w-5 h-5" />
                <span>Ressarcimento de seguro em financiamento de veículo</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[#1C4200] leading-tight">
                Recupere em dobro o seguro cobrado no financiamento do seu carro
              </h1>
              <p className="text-xl lg:text-2xl text-[#1C4200]/80 leading-relaxed">
                Avaliamos seu contrato, contestamos a cobrança e buscamos estorno imediato com possibilidade de indenização pelo dano sofrido. Tudo de forma rápida e transparente.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex gap-3 p-4 bg-white rounded-xl border border-[#8FDB00]/30 shadow-sm"
                  >
                    <div className="flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#1C4200]">{benefit.title}</h3>
                      <p className="text-sm text-[#1C4200]/80">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg px-7 py-6 rounded-xl shadow-lg"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" /> Falar no WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#1C4200] text-[#1C4200] hover:bg-[#1C4200] hover:text-white font-semibold text-lg px-7 py-6 rounded-xl"
                >
                  <a href={`tel:${callNumber}`}>
                    <Phone className="w-5 h-5 mr-2" /> Ligar agora
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1547744036-0af353dfd060?w=900&q=80"
                  alt="Carro popular brasileiro similar a um Onix ou HB20"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C4200]/50 to-transparent" />
              </div>
              <div className="absolute -bottom-8 left-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-5 w-[85%]">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-[#8FDB00]" />
                  <p className="text-sm font-semibold text-[#1C4200]">
                    Cobrança identificada e estorno solicitado
                  </p>
                </div>
                <p className="text-sm text-[#1C4200]/80">
                  Revisamos as parcelas, destacamos o seguro embutido e iniciamos a restituição em dobro conforme prevê o CDC.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white" id="como-funciona">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
            <div>
              <p className="text-sm uppercase tracking-wider text-[#1C4200]/70 font-semibold">
                Passo a passo
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4200]">
                Processo rápido para recuperar o valor do seguro
              </h2>
            </div>
            <div className="flex items-center gap-4 bg-[#F6FFF0] border border-[#8FDB00]/30 rounded-2xl px-6 py-4">
              <Clock className="w-5 h-5 text-[#1C4200]" />
              <p className="text-[#1C4200]/80 text-sm">
                Em poucos dias apresentamos o plano de ressarcimento e começamos o pedido.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-[#F9FAFB] border border-[#8FDB00]/30 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#8FDB00]/50">
                    {step.icon}
                  </div>
                  <span className="text-sm font-semibold text-[#1C4200]/70">
                    Etapa {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#1C4200] mb-2">{step.title}</h3>
                <p className="text-sm text-[#1C4200]/80 leading-relaxed">
                  {step.description}
                </p>
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#8FDB00] text-[#1C4200] font-bold rounded-full flex items-center justify-center shadow-md">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-[#F6FFF0]">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-wider text-[#1C4200]/70 font-semibold">
                Seus direitos
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4200] leading-tight">
                Transparência total para recuperar o que é seu por direito
              </h2>
              <p className="text-lg text-[#1C4200]/80 leading-relaxed">
                Revisamos o contrato do financiamento e demonstramos a cobrança do seguro. Com isso, protocolamos o pedido de estorno em dobro e buscamos indenização pela conduta abusiva do banco ou financeira.
              </p>

              <div className="space-y-3">
                {rights.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#8FDB00] flex-shrink-0 mt-0.5" />
                    <p className="text-[#1C4200] font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {successHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#8FDB00]/30 rounded-2xl p-5 shadow-sm"
                >
                  <p className="text-sm text-[#1C4200]/70 font-semibold">
                    {highlight.label}
                  </p>
                  <p className="text-3xl font-bold text-[#1C4200] my-2">{highlight.value}</p>
                  <p className="text-sm text-[#1C4200]/80 leading-relaxed">
                    {highlight.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-wider text-[#1C4200]/70 font-semibold">
                Atendimento dedicado
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4200] leading-tight">
                Fale com quem resolve a cobrança do seguro de forma humana e rápida
              </h2>
              <p className="text-lg text-[#1C4200]/80 leading-relaxed">
                Nós centralizamos toda a comunicação com a financeira ou banco, evitamos que você continue pagando o seguro e apresentamos os próximos passos com clareza. Você acompanha tudo pelo WhatsApp.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border border-[#8FDB00]/30 rounded-xl bg-[#F9FAFB]">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-5 h-5 text-[#1C4200]" />
                    <p className="text-[#1C4200] font-semibold">Financeiras e bancos</p>
                  </div>
                  <p className="text-sm text-[#1C4200]/80">
                    Experiência com casos em grandes instituições e financeiras regionais.
                  </p>
                </div>
                <div className="p-4 border border-[#8FDB00]/30 rounded-xl bg-[#F9FAFB]">
                  <div className="flex items-center gap-3 mb-2">
                    <HeartHandshake className="w-5 h-5 text-[#1C4200]" />
                    <p className="text-[#1C4200] font-semibold">Sem burocracia</p>
                  </div>
                  <p className="text-sm text-[#1C4200]/80">
                    Solução guiada, com coleta digital de documentos e acompanhamento próximo.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#1C4200] hover:bg-[#163400] text-white font-semibold px-7 py-6 rounded-xl"
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Iniciar atendimento agora
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-[#8FDB00] text-[#1C4200] hover:bg-[#8FDB00] hover:text-black font-semibold px-7 py-6 rounded-xl"
                >
                  <a href={`tel:${callNumber}`}>Quero falar por telefone</a>
                </Button>
              </div>
            </div>

            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1547744036-0af353dfd060?w=900&q=80"
                alt="Carro popular hatchback parecido com um Onix ou HB20"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C4200]/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#1C4200] text-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#8FDB00] font-semibold">
              prontos para ajudar
            </p>
            <h3 className="text-2xl lg:text-3xl font-bold mt-2">
              Conte com a CredCertoBueno para reaver o seguro cobrado no financiamento
            </h3>
            <p className="text-white/80 mt-3 max-w-3xl">
              Atuação nacional, especialistas em consumo financeiro e um processo claro para você recuperar o que pagou a mais. Nosso time se dedica a cada etapa até o dinheiro voltar para o seu bolso.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <Button
              asChild
              className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold px-7 py-6 rounded-xl"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Chamar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1C4200] font-semibold px-7 py-6 rounded-xl"
            >
              <a href={`tel:${callNumber}`}>
                <Phone className="w-5 h-5 mr-2" /> Ligar agora
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
