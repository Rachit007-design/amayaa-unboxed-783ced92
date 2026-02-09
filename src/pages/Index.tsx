import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background texture-dots">
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
