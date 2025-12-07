import GlobalHeader from "./components/Header";
import HomeHeroSection from "./components/HomeHeroSection";
import CreditSimulatorSection from "./components/CreditSimulatorSection";
import StatisticsSection from "./components/StatisticsSection";
import AboutSection from "./components/AboutSection";
import LocationsSection from "./components/LocationsSection";
import LocationMapSection from "./components/LocationMapSection";
import ServicesSection from "./components/ServicesSection";
import ConsignedCardSection from "./components/ConsignedCardSection";
import DifferentialsSection from "./components/DifferentialsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import UseCasesSection from "./components/UseCasesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PartnersSection from "./components/PartnersSection";
import FAQSection from "./components/FAQSection";
import CTAContactSection from "./components/CTAContactSection";
import Footer from "./components/Footer";
import LeadForm from "./components/LeadForm";

export default function MainPage() {
  return (
    <main>
      <GlobalHeader />
      <HomeHeroSection />
      <CreditSimulatorSection />
      <StatisticsSection />
      <AboutSection />
      <ServicesSection />
      <ConsignedCardSection />
      <DifferentialsSection />
      <HowItWorksSection />
      <UseCasesSection />
      <LocationsSection />
      <LocationMapSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTAContactSection />

      {/* Lead Form Section */}
      <section className="relative w-full py-16 lg:py-24 bg-gradient-to-br from-[#F9FAFB] to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#1C4200] mb-6">
                Solicite seu crédito consignado agora
              </h2>
              <p className="text-xl text-[#1C4200]/70 mb-8">
                Preencha o formulário e nossa equipe entrará em contato via WhatsApp para oferecer as melhores condições do mercado.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#8FDB00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[#1C4200]">Atendimento personalizado e rápido</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#8FDB00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[#1C4200]">As menores taxas do mercado</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#8FDB00] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-[#1C4200]">Aprovação em até 24 horas</span>
                </li>
              </ul>
            </div>
            <LeadForm
              landingPage="Home - CredCertoBueno"
              title="Fale conosco"
              subtitle="Preencha seus dados e receba nossa proposta via WhatsApp"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
