import GlobalHeader from "./components/Header";
import HomeHeroSection from "./components/HomeHeroSection";
import ServicesSection from "./components/ServicesSection";
import BankPartnersSection from "./components/BankPartnersSection";

export default function MainPage() {
  return (
    <main>
      <GlobalHeader />
      <HomeHeroSection />
      <ServicesSection />
      <BankPartnersSection />
    </main>
  );
}
