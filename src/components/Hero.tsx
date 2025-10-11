import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "522381234567";
    const message = encodeURIComponent("Hola Dr. Peña, me gustaría agendar una cita");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6 md:mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-lighter rounded-full">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Mayor número de publicaciones científicas en Tehuacán
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center space-y-6 md:space-y-8 animate-fade-in-up">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              Dr. Héctor Peña Carrillo
            </h1>
            
            <div className="space-y-3 md:space-y-4">
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
                Cardioneumología y Medicina Crítica
              </p>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Atención médica especializada con excelencia profesional y calidez humana en Tehuacán, Puebla
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 md:pt-6">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="bg-primary hover:bg-primary-light text-primary-foreground font-bold text-base md:text-lg px-8 py-6 md:py-7 rounded-button shadow-medium hover:shadow-premium transition-all duration-300 group"
              >
                Agendar Cita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary-lighter font-semibold text-base md:text-lg px-8 py-6 md:py-7 rounded-button transition-all duration-300"
                onClick={() => document.getElementById('especialidades')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Conocer Más
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2 p-4 rounded-card bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <p className="text-2xl md:text-3xl font-bold text-primary font-playfair">500+</p>
                <p className="text-xs md:text-sm text-muted-foreground text-center">Pacientes Atendidos</p>
              </div>
              
              <div className="flex flex-col items-center gap-2 p-4 rounded-card bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-accent" />
                <p className="text-2xl md:text-3xl font-bold text-accent font-playfair">15+</p>
                <p className="text-xs md:text-sm text-muted-foreground text-center">Publicaciones Científicas</p>
              </div>
              
              <div className="flex flex-col items-center gap-2 p-4 rounded-card bg-card/50 backdrop-blur-sm shadow-soft hover:shadow-medium transition-all duration-300">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                <p className="text-2xl md:text-3xl font-bold text-primary font-playfair">20+</p>
                <p className="text-xs md:text-sm text-muted-foreground text-center">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
