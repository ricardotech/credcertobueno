"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  User,
  Eye,
  EyeOff,
  AlertCircle,
  TrendingUp,
} from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validação fake: admin/admin
    if (username.toLowerCase() !== "admin" || password !== "admin") {
      setError("Usuário ou senha incorretos");
      return;
    }

    setLoading(true);

    // Simula loading de autenticação
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // "Salva" o token fake no localStorage
    localStorage.setItem("admin_token", "fake-admin-token");
    localStorage.setItem("admin_user", username);

    // Redireciona para o dashboard
    router.push("/admin/dashboard");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#E8F5E9] via-[#F1F8E9] to-[#E8F5E9] flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231C4200' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Lado Esquerdo - Informações */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-3 bg-[#8FDB00]/20 text-[#1C4200] px-6 py-4 rounded-full mb-8">
            <Shield className="w-6 h-6" />
            <span className="font-semibold text-lg">Área Administrativa</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-[#1C4200] mb-6 leading-tight">
            Painel Admin
          </h1>

          <p className="text-2xl lg:text-3xl text-[#1C4200]/80 mb-10 leading-relaxed">
            Gerencie consultas de CPF e acompanhe resultados em tempo real
          </p>

          <div className="grid grid-cols-1 gap-6 max-w-md mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[#8FDB00]/20"
            >
              <TrendingUp className="w-8 h-8 text-[#8FDB00] mb-3" />
              <h3 className="font-bold text-[#1C4200] mb-2">
                Dashboard Completo
              </h3>
              <p className="text-sm text-[#1C4200]/70">
                Visualize estatísticas e dados de consultas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-[#8FDB00]/20"
            >
              <Shield className="w-8 h-8 text-[#8FDB00] mb-3" />
              <h3 className="font-bold text-[#1C4200] mb-2">
                Gestão de CPFs
              </h3>
              <p className="text-sm text-[#1C4200]/70">
                Importe e consulte CPFs com facilidade
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Lado Direito - Formulário de Login */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border-2 border-[#8FDB00]/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#8FDB00]/10 rounded-full mb-4">
                <Lock className="w-10 h-10 text-[#8FDB00]" />
              </div>
              <h2 className="text-3xl font-bold text-[#1C4200] mb-3">
                Login Administrativo
              </h2>
              <p className="text-lg text-[#1C4200]/70">
                Acesse o painel de controle
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo de Usuário */}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-[#1C4200] font-semibold">
                  Usuário
                </Label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1C4200]/50" />
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Digite seu usuário"
                    className="pl-12 h-14 text-lg border-2 border-gray-300 focus:border-[#8FDB00] rounded-xl"
                    disabled={loading}
                    required
                  />
                </div>
              </div>

              {/* Campo de Senha */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[#1C4200] font-semibold">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1C4200]/50" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    className="pl-12 pr-12 h-14 text-lg border-2 border-gray-300 focus:border-[#8FDB00] rounded-xl"
                    disabled={loading}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#1C4200]/50 hover:text-[#1C4200] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mensagem de Erro */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 border-2 border-red-300 rounded-xl p-4 flex items-start gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800 font-medium">{error}</p>
                </motion.div>
              )}

              {/* Botão de Login */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#8FDB00] hover:bg-[#7BC700] text-black font-bold text-xl py-7 rounded-xl shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
                    Entrando...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-3">
                    <Lock className="w-6 h-6" />
                    Entrar no Painel
                  </span>
                )}
              </Button>
            </form>

            {/* Informação de Teste */}
            <div className="mt-8 p-4 bg-[#F9FAFB] rounded-xl border border-gray-200">
              <p className="text-sm text-[#1C4200]/70 text-center">
                <strong className="text-[#1C4200]">Ambiente de Demonstração</strong>
                <br />
                Use: <span className="font-mono bg-white px-2 py-1 rounded">admin</span> / <span className="font-mono bg-white px-2 py-1 rounded">admin</span>
              </p>
            </div>

            {/* Badge de Segurança */}
            <div className="mt-6 flex items-center justify-center gap-4 text-[#1C4200]/60">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span className="text-xs font-medium">Acesso Seguro</span>
              </div>
              <div className="w-1 h-1 bg-[#1C4200]/30 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-medium">Dados Protegidos</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
