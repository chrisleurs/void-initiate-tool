import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const CTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "522381234567";
    const message = encodeURIComponent("Hola Dr. Peña, me gustaría agendar una cita");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+522381234567";
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-10 animate-fade-in-up">
          {/* Título y subtítulo */}
          <div className="space-y-4">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Agenda tu consulta ahora
            </h2>
            <p className="text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
              Estoy aquí para brindarte la atención médica especializada que necesitas 
              con el trato humano que mereces
            </p>
          </div>

          {/* CTAs grandes con animación */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-white text-primary hover:bg-white/90 font-bold text-base md:text-lg px-10 py-7 rounded-button shadow-premium hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-bounce-subtle"
            >
              Agendar por WhatsApp
            </Button>
            
            <Button
              size="lg"
              onClick={handlePhoneClick}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-semibold text-base md:text-lg px-10 py-7 rounded-button transition-all duration-300 hover:-translate-y-1"
            >
              Llamar al consultorio
            </Button>
          </div>

          {/* Información de contacto - 4 columnas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-2 text-center">
              <Phone className="w-6 h-6 text-white" />
              <p className="text-sm font-semibold text-white">Teléfono</p>
              <p className="text-sm text-primary-foreground/80">(238) 123-4567</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 text-center">
              <MessageCircle className="w-6 h-6 text-white" />
              <p className="text-sm font-semibold text-white">WhatsApp</p>
              <p className="text-sm text-primary-foreground/80">(238) 123-4567</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 text-center">
              <MapPin className="w-6 h-6 text-white" />
              <p className="text-sm font-semibold text-white">Ubicación</p>
              <p className="text-sm text-primary-foreground/80">Hospital Independencia</p>
            </div>
            
            <div className="flex flex-col items-center gap-2 text-center">
              <Clock className="w-6 h-6 text-white" />
              <p className="text-sm font-semibold text-white">Horario</p>
              <p className="text-sm text-primary-foreground/80">Lun-Vie 9:00-19:00</p>
            </div>
          </div>

          {/* Mini mapa embebido */}
          <div className="pt-6 max-w-2xl mx-auto">
            <div className="rounded-card overflow-hidden shadow-premium h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.234567890123!2d-97.39876!3d18.46234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzQ0LjQiTiA5N8KwMjMnNTUuNSJX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Hospital Independencia"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
