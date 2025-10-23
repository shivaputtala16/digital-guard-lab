import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AuthFactors from "@/components/AuthFactors";
import BiometricSection from "@/components/BiometricSection";
import MFASection from "@/components/MFASection";
import BestPractices from "@/components/BestPractices";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AuthFactors />
        <BiometricSection />
        <MFASection />
        <BestPractices />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
