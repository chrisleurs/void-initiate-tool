import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen, Phone, CheckCircle } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "522381234567";
    const message = encodeURIComponent("Hola Dr. Peña, me gustaría ponerme en contacto");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20 md:pt-24">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        {/* Main Content - Flex Layout with Custom Order */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:items-center">
            {/* Título - Order 1 en mobile */}
            <div className="order-1 lg:order-2 animate-fade-in-up text-center lg:text-left">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                Atención especializada en Cardioneumología, Medicina Crítica y Medicina Interna en Tehuacán
              </h1>
            </div>

            {/* Foto del Doctor - Order 2 en mobile, Order 1 en desktop */}
            <div className="order-2 lg:order-1 lg:row-span-4 animate-fade-in">
              <div className="relative rounded-card overflow-hidden shadow-premium">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-32 h-32 mx-auto text-primary/30 mb-4" />
                    <p className="text-muted-foreground">Foto profesional del Dr. Peña</p>
                    <p className="text-sm text-muted-foreground mt-2">(Retrato premium con fondo cálido)</p>
                  </div>
                </div>
                {/* Borde con degradado */}
                <div className="absolute inset-0 border-4 border-transparent bg-gradient-to-br from-primary/30 to-accent/30 rounded-card" style={{ WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude", padding: "4px" }}></div>
              </div>
            </div>

            {/* Subtítulo - Order 3 en mobile */}
            <div className="order-3 lg:order-2 animate-fade-in-up text-center lg:text-left">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Más de 15 años de experiencia brindando atención médica de excelencia, 
                con diagnóstico claro y trato humano.
              </p>
            </div>

            {/* CTAs - Order 4 en mobile */}
            <div className="order-4 lg:order-2 animate-fade-in-up">
              <div className="flex justify-center lg:justify-start pt-4">
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-primary hover:bg-primary-light text-primary-foreground font-bold text-base md:text-lg px-8 py-6 md:py-7 rounded-button shadow-medium hover:shadow-premium transition-all duration-300 group"
                >
                  Contáctame en WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Elementos de confianza - Order 5 en mobile */}
            <div className="order-5 lg:order-2 animate-fade-in-up">
              <div className="space-y-3 pt-6 text-center lg:text-left">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">Cédula Profesional: [NÚMERO]</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">Fellow American College of Chest</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm md:text-base text-muted-foreground">Certificado AMCCE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators - Bottom */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 md:pt-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 p-4 md:p-6 rounded-card bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300">
              <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-playfair">500+</p>
              <p className="text-xs md:text-sm text-muted-foreground text-center">Pacientes Atendidos</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-4 md:p-6 rounded-card bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-accent" />
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-accent font-playfair">15+</p>
              <p className="text-xs md:text-sm text-muted-foreground text-center">Publicaciones Científicas</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 p-4 md:p-6 rounded-card bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300">
              <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary font-playfair">20+</p>
              <p className="text-xs md:text-sm text-muted-foreground text-center">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
