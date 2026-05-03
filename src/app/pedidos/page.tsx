"use client";

import GlobalHeader from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  Headset,
  MessageCircle,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function PedidosPage() {
  const timeline = [
    {
      title: "Pedido recebido",
      description: "Confirmamos seus dados e iniciamos a análise do pedido.",
      icon: <ClipboardList className="w-6 h-6" />,
      status: "Em andamento",
    },
    {
      title: "Análise e documentação",
      description: "Validamos documentos e margens para seguir com segurança.",
      icon: <FileText className="w-6 h-6" />,
      status: "Processando",
    },
    {
      title: "Aprovação",
      description: "Retornamos com condições finais e contratos para assinatura.",
      icon: <ShieldCheck className="w-6 h-6" />,
      status: "Próximo passo",
    },
    {
      title: "Liberação do crédito",
      description: "Valor liberado e acompanhamento até o crédito cair na conta.",
      icon: <CheckCircle2 className="w-6 h-6" />,
      status: "Concluído",
    },
  ];

  const highlights = [
    {
      title: "Status em tempo real",
      description: "Veja cada etapa do seu pedido sem burocracia.",
      icon: <Clock3 className="w-12 h-12 text-[#8FDB00]" />,
    },
    {
      title: "Alertas inteligentes",
      description: "Receba notificações de documentos, assinaturas e aprovações.",
      icon: <Bell className="w-12 h-12 text-[#8FDB00]" />,
    },
    {
      title: "Atendimento dedicado",
      description: "Especialistas disponíveis no chat ou WhatsApp para ajudar.",
      icon: <Headset className="w-12 h-12 text-[#8FDB00]" />,
    },
  ];

  const faq = [
    {
      question: "Como acompanho meu pedido?",
      answer:
        "Use o número do protocolo enviado por e-mail ou fale com nossa equipe para atualizar o status em tempo real.",
    },
    {
      question: "Preciso reenviar documentos?",
      answer:
        "Sempre que houver necessidade avisaremos por notificação e e-mail, indicando exatamente o que falta.",
    },
    {
      question: "Quanto tempo leva a aprovação?",
      answer:
        "Após a análise documental, a aprovação costuma ocorrer em até 24 horas úteis, dependendo do produto solicitado.",
    },
  ];

  return (
    <main className="bg-gradient-to-b from-white via-[#F9FAFB] to-white">
      <GlobalHeader />

      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#1C4200] via-[#2d5b00] to-[#1C4200] py-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 bg-white/10 text-white px-6 py-3 rounded-full">
                <Smartphone className="w-5 h-5" />
                <span className="font-semibold">Pedidos em tempo real</span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Acompanhe seus pedidos com transparência total
              </h1>

              <p className="text-lg lg:text-2xl text-white/80 leading-relaxed">
                Monitoramento completo das etapas do crédito, avisos automáticos e equipe dedicada para que nada fique pendente.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-semibold text-lg px-8 py-6 rounded-lg">
                  Consultar pedido
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 font-semibold text-lg px-8 py-6 rounded-lg"
                >
                  Falar com especialista
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Protocolo imediato", "Alertas de documentos", "Atualizações por e-mail", "Suporte humano"].map((item) => (
                  <div
                    key={item}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-white"
                  >
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-white/70">Pedido atual</p>
                  <h3 className="text-2xl font-bold text-white">#CCB-2024-1287</h3>
                </div>
                <span className="px-4 py-2 rounded-full bg-[#8FDB00] text-black font-semibold text-sm">Em análise</span>
              </div>

              <div className="space-y-4">
                {timeline.map((step, index) => (
                  <div key={step.title} className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                        index === timeline.length - 1 ? "border-[#8FDB00] bg-[#8FDB00]/10" : "border-white/40"
                      }`}
                    >
                      <span className="text-white">{step.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-semibold text-white">{step.title}</h4>
                        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/20">
                          {step.status}
                        </span>
                      </div>
                      <p className="text-white/70 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F9FAFB] rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-[#1C4200] mb-3">{item.title}</h3>
                <p className="text-[#1C4200]/70 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-5xl font-bold text-[#1C4200] mb-4"
            >
              Linha do tempo do seu pedido
            </motion.h2>
            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-[#1C4200]/70"
            >
              Transparência em cada etapa para você saber exatamente o que está acontecendo.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {timeline.map((step, index) => (
              <motion.div
                key={`${step.title}-${index}`}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#8FDB00]/10 flex items-center justify-center text-[#1C4200]">
                    {step.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[#1C4200]/60">Etapa {index + 1}</p>
                    <h3 className="text-xl font-semibold text-[#1C4200]">{step.title}</h3>
                  </div>
                </div>
                <p className="text-[#1C4200]/70 leading-relaxed">{step.description}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1C4200]">
                  <span className="w-2 h-2 rounded-full bg-[#8FDB00]"></span>
                  {step.status}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-[#8FDB00]/20 text-[#1C4200] px-4 py-2 rounded-full">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Acompanhamento humano + digital</span>
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#1C4200] leading-tight">
                Comunicação clara em cada fase do seu pedido
              </h2>
              <p className="text-lg text-[#1C4200]/70 leading-relaxed">
                Sabemos que crédito é assunto sério. Por isso, combinamos notificações automáticas com um time disponível para
                tirar dúvidas, antecipar documentos e agilizar aprovações.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Checklist atualizado", "Notificações multicanal", "Registro de interações", "Equipe especializada"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#8FDB00]" />
                      <span className="text-[#1C4200] font-medium">{item}</span>
                    </div>
                  )
                )}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#1C4200] hover:bg-[#173600] text-white font-semibold px-6 py-4 rounded-lg">
                  Ver pedidos ativos
                </Button>
                <Button
                  variant="outline"
                  className="border-[#1C4200] text-[#1C4200] hover:bg-[#1C4200]/5 font-semibold px-6 py-4 rounded-lg"
                >
                  Falar no WhatsApp
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#F9FAFB] border border-gray-100 rounded-2xl p-8 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-[#1C4200]/60">Canal preferencial</p>
                  <h3 className="text-2xl font-bold text-[#1C4200]">Consultor dedicado</h3>
                </div>
                <span className="px-4 py-2 rounded-full bg-[#8FDB00]/20 text-[#1C4200] font-semibold text-sm">
                  SLA 24h úteis
                </span>
              </div>

              <div className="space-y-4">
                {["Reuniões rápidas por vídeo", "Checklist comentado", "Orientação sobre margem", "Acompanhamento pós liberação"].map(
                  (item, index) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-[#E5E7EB]">
                        <span className="text-sm font-semibold text-[#1C4200]">{index + 1}</span>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-[#1C4200]">{item}</p>
                        <p className="text-sm text-[#1C4200]/70 mt-1">
                          Priorizamos agilidade e clareza para que você acompanhe cada decisão.
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-[#F9FAFB]">
        <div className="max-w-5xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1C4200] mb-4">Perguntas frequentes sobre pedidos</h2>
            <p className="text-lg text-[#1C4200]/70">
              Entenda como funciona o acompanhamento e o que esperar de cada fase.
            </p>
          </div>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <motion.details
                key={item.question}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-gray-100 rounded-xl p-6 shadow-sm open:shadow-lg transition-all"
                open={index === 0}
              >
                <summary className="flex items-center justify-between cursor-pointer">
                  <span className="text-lg font-semibold text-[#1C4200]">{item.question}</span>
                  <span className="text-2xl text-[#1C4200]/60 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-[#1C4200]/70 leading-relaxed">{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="bg-gradient-to-r from-[#1C4200] to-[#2d5b00] rounded-2xl px-8 lg:px-12 py-12 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Precisa de ajuda com um pedido em andamento?
                </h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  Conte com nossa equipe para revisar documentos, atualizar dados ou abrir um novo pedido com condições
                  personalizadas.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-[#8FDB00] hover:bg-[#7BC700] text-black font-semibold px-6 py-4 rounded-lg">
                    Abrir novo pedido
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 font-semibold px-6 py-4 rounded-lg"
                  >
                    Agendar contato
                  </Button>
                </div>
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 space-y-4">
                {["Resumo de pedidos", "Prazos estimados", "Checklist pendente", "Canal direto com consultor"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-lg font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
