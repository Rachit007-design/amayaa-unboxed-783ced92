import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import { useLenis } from "@/hooks/useLenis";

const Index = () => {
  useLenis();

  return (
    <div className="min-h-screen bg-background texture-dots">
      {/* Film grain overlay */}
      <div className="grain-overlay pointer-events-none fixed inset-0 z-[999]" />
      
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ShowcaseSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
