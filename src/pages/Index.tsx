import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Especialidades from "@/components/Especialidades";
import SobreElDoctor from "@/components/SobreElDoctor";
import Publicaciones from "@/components/Publicaciones";
import Certificaciones from "@/components/Certificaciones";
import Testimonios from "@/components/Testimonios";
import Hospital from "@/components/Hospital";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Especialidades />
      <SobreElDoctor />
      <Publicaciones />
      <Certificaciones />
      <Testimonios />
      <Hospital />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppButton phoneNumber="522381234567" />
    </div>
  );
};

export default Index;
