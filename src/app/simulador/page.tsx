import GlobalHeader from "../components/Header";
import CreditSimulatorSection from "../components/CreditSimulatorSection";
import Footer from "../components/Footer";

export default function SimuladorPage() {
  return (
    <main>
      <GlobalHeader />
      <CreditSimulatorSection />
      <section className="relative w-full bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-bold text-[#1C4200] mb-6">
              Como funciona o Crédito Consignado?
            </h2>
            <p className="text-lg lg:text-xl text-[#1C4200]/70 max-w-3xl mx-auto">
              Entenda o processo simples e rápido para solicitar seu crédito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-[#F9FAFB] rounded-2xl">
              <div className="w-16 h-16 bg-[#8FDB00] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-[#1C4200] mb-4">
                Simule e Escolha
              </h3>
              <p className="text-[#1C4200]/70">
                Use o simulador acima para calcular o valor e as parcelas que cabem no seu bolso
              </p>
            </div>
            <div className="text-center p-8 bg-[#F9FAFB] rounded-2xl">
              <div className="w-16 h-16 bg-[#8FDB00] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-[#1C4200] mb-4">
                Envie Documentos
              </h3>
              <p className="text-[#1C4200]/70">
                Processo 100% online. Envie seus documentos de forma segura e rápida
              </p>
            </div>
            <div className="text-center p-8 bg-[#F9FAFB] rounded-2xl">
              <div className="w-16 h-16 bg-[#8FDB00] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-[#1C4200] mb-4">
                Receba o Dinheiro
              </h3>
              <p className="text-[#1C4200]/70">
                Aprovação em até 24h e dinheiro direto na sua conta bancária
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-4xl font-bold text-[#1C4200] mb-8 text-center">
              Perguntas Frequentes
            </h3>
            <div className="space-y-4">
              <details className="bg-[#F9FAFB] p-6 rounded-lg">
                <summary className="font-semibold text-[#1C4200] cursor-pointer">
                  Quem pode solicitar crédito consignado?
                </summary>
                <p className="mt-4 text-[#1C4200]/70">
                  Aposentados e pensionistas do INSS, servidores públicos federais, estaduais e municipais, e trabalhadores CLT de empresas conveniadas.
                </p>
              </details>
              <details className="bg-[#F9FAFB] p-6 rounded-lg">
                <summary className="font-semibold text-[#1C4200] cursor-pointer">
                  Qual a taxa de juros?
                </summary>
                <p className="mt-4 text-[#1C4200]/70">
                  As taxas variam de acordo com o tipo de crédito e começam a partir de 1,45% ao mês, sendo as mais competitivas do mercado.
                </p>
              </details>
              <details className="bg-[#F9FAFB] p-6 rounded-lg">
                <summary className="font-semibold text-[#1C4200] cursor-pointer">
                  Quanto tempo demora a aprovação?
                </summary>
                <p className="mt-4 text-[#1C4200]/70">
                  A análise é feita em até 24 horas úteis após o envio da documentação completa.
                </p>
              </details>
              <details className="bg-[#F9FAFB] p-6 rounded-lg">
                <summary className="font-semibold text-[#1C4200] cursor-pointer">
                  Precisa ter nome limpo?
                </summary>
                <p className="mt-4 text-[#1C4200]/70">
                  Não! O crédito consignado não consulta SPC/Serasa, pois o desconto é feito direto na folha de pagamento ou benefício.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
