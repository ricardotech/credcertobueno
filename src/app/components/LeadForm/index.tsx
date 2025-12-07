"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, CheckCircle2 } from "lucide-react";

interface LeadFormProps {
  landingPage: string;
  title?: string;
  subtitle?: string;
  showEmail?: boolean;
  showMessage?: boolean;
  buttonText?: string;
  successMessage?: string;
  className?: string;
}

export default function LeadForm({
  landingPage,
  title = "Solicite seu crédito agora",
  subtitle = "Preencha o formulário e entraremos em contato via WhatsApp",
  showEmail = true,
  showMessage = true,
  buttonText = "Enviar solicitação",
  successMessage = "Solicitação enviada! Em breve entraremos em contato via WhatsApp.",
  className = "",
}: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 10) {
      return numbers.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    }
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({
      ...prev,
      phone: formatted,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/send-whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          landingPage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar formulário");
      }

      setSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao enviar formulário. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        className={`bg-gradient-to-br from-[#8FDB00]/10 to-white p-8 lg:p-12 rounded-3xl shadow-2xl border-2 border-[#8FDB00]/30 ${className}`}
      >
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#8FDB00] rounded-full mb-6">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#1C4200] mb-4">
            Enviado com sucesso!
          </h3>
          <p className="text-lg text-[#1C4200]/70">{successMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-gradient-to-br from-white to-[#F9FAFB] p-8 lg:p-12 rounded-3xl shadow-2xl border border-gray-100 ${className}`}
    >
      <div className="mb-8">
        <h3 className="text-3xl lg:text-4xl font-bold text-[#1C4200] mb-3">
          {title}
        </h3>
        <p className="text-lg text-[#1C4200]/70">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#8FDB00] focus:outline-none transition-colors text-[#1C4200]"
            placeholder="Digite seu nome completo"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-[#1C4200] mb-2"
          >
            Telefone / WhatsApp *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            required
            maxLength={15}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#8FDB00] focus:outline-none transition-colors text-[#1C4200]"
            placeholder="(00) 00000-0000"
          />
        </div>

        {showEmail && (
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#1C4200] mb-2"
            >
              Email {!showEmail && "(opcional)"}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#8FDB00] focus:outline-none transition-colors text-[#1C4200]"
              placeholder="seu@email.com"
            />
          </div>
        )}

        {showMessage && (
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
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#8FDB00] focus:outline-none transition-colors text-[#1C4200] resize-none"
              placeholder="Conte-nos um pouco sobre o que você precisa..."
            />
          </div>
        )}

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
            <p className="text-red-600 text-sm font-medium">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-lg py-6 rounded-xl shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              {buttonText}
            </>
          )}
        </Button>

        <p className="text-xs text-[#1C4200]/60 text-center">
          Ao enviar, você concorda em receber contato via WhatsApp
        </p>
      </form>
    </div>
  );
}
