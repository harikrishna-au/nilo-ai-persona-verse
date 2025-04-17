
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TechStackSection from "@/components/TechStackSection";
import UseCasesSection from "@/components/UseCasesSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <UseCasesSection />
        <TechStackSection />
        <BusinessModelSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
