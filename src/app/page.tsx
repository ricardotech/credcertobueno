import GlobalHeader from "./components/Header";
import HomeHeroSection from "./components/HomeHeroSection";
import StatisticsSection from "./components/StatisticsSection";
import AboutSection from "./components/AboutSection";
import LocationsSection from "./components/LocationsSection";
import ServicesSection from "./components/ServicesSection";
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
      <StatisticsSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <HowItWorksSection />
      <UseCasesSection />
      <LocationsSection />
      <TestimonialsSection />
      <PartnersSection />
      <FAQSection />
      <CTAContactSection />
      <Footer />
    </main>
  );
}
