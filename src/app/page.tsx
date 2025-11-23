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
      <Footer />
    </main>
  );
}
