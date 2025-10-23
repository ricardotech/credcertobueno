import GlobalHeader from "./components/Header";
import HomeHeroSection from "./components/HomeHeroSection";
import ServicesSection from "./components/ServicesSection";
import KPIsSection from "./components/KPIsSection";

export default function MainPage() {
  return (
    <main>
      <GlobalHeader />
      <HomeHeroSection />
      <ServicesSection />
      <KPIsSection />
    </main>
  );
}
