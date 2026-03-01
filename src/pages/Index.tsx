import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TechStackSection from "@/components/TechStackSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
