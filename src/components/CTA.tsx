import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";

const CTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "522381234567";
    const message = encodeURIComponent("Hola Dr. Peña, me gustaría agendar una cita");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-foreground/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 md:mb-6">
            Agenda Tu Cita Hoy
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto mb-8">
            Recibe atención médica especializada con la calidez y profesionalismo que mereces
          </p>
          
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-accent hover:bg-accent-light text-accent-foreground font-bold text-base md:text-lg px-10 py-7 rounded-button shadow-large hover:shadow-premium transition-all duration-300 hover:scale-105"
          >
            <Phone className="mr-2 w-5 h-5" />
            Agendar por WhatsApp
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 rounded-card bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-center hover:bg-primary-foreground/15 transition-all duration-300">
            <MapPin className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
            <h3 className="font-semibold text-primary-foreground mb-2">Ubicación</h3>
            <p className="text-sm text-primary-foreground/80">
              Tehuacán, Puebla<br />
              Hospital Regional
            </p>
          </div>

          <div className="p-6 rounded-card bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-center hover:bg-primary-foreground/15 transition-all duration-300">
            <Clock className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
            <h3 className="font-semibold text-primary-foreground mb-2">Horario</h3>
            <p className="text-sm text-primary-foreground/80">
              Lunes a Viernes<br />
              9:00 AM - 6:00 PM
            </p>
          </div>

          <div className="p-6 rounded-card bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-center hover:bg-primary-foreground/15 transition-all duration-300">
            <Mail className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
            <h3 className="font-semibold text-primary-foreground mb-2">Contacto</h3>
            <p className="text-sm text-primary-foreground/80">
              contacto@drpena.com<br />
              (238) 123-4567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
