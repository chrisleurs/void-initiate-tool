import Hero from "@/components/Hero";
import Especialidades from "@/components/Especialidades";
import Certificaciones from "@/components/Certificaciones";
import Testimonios from "@/components/Testimonios";
import Publicaciones from "@/components/Publicaciones";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Especialidades />
      <Certificaciones />
      <Testimonios />
      <Publicaciones />
      <CTA />
      <Footer />
      <WhatsAppButton phoneNumber="522381234567" />
    </div>
  );
};

export default Index;
