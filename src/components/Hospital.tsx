import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Hospital = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "522381234567";
    const message = encodeURIComponent("Hola Dr. Peña, me gustaría ponerme en contacto");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleMapClick = () => {
    window.open("https://maps.google.com/?q=Hospital+Independencia+Tehuacán", '_blank');
  };

  return (
    <section id="hospital" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Información */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Encuéntrame en Hospital Independencia
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Atención especializada con tecnología de punta para pacientes críticos 
                  y seguimiento médico integral.
                </p>
              </div>

              {/* Detalles de contacto */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-card bg-card border border-border">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Horarios</h3>
                    <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 19:00 hrs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-card bg-card border border-border">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                    <p className="text-muted-foreground">
                      Av. Independencia #123<br />
                      Colonia Centro, Tehuacán, Puebla<br />
                      CP 75700
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-card bg-card border border-border">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Contacto</h3>
                    <p className="text-muted-foreground">
                      Tel: (238) 123-4567<br />
                      WhatsApp: (238) 123-4567
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={handleMapClick}
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary-lighter font-semibold px-6 py-6 rounded-button"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Cómo llegar
                </Button>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-6 py-6 rounded-button"
                >
                  Contáctame en WhatsApp
                </Button>
              </div>
            </div>

            {/* Mapa */}
            <div className="animate-fade-in">
              <div className="rounded-card overflow-hidden shadow-premium h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.234567890123!2d-97.39876!3d18.46234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI3JzQ0LjQiTiA5N8KwMjMnNTUuNSJX!5e0!3m2!1ses!2smx!4v1234567890123!5m2!1ses!2smx"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Hospital Independencia"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hospital;
