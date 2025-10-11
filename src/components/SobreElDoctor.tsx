import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Users, Heart } from "lucide-react";

const membresias = [
  "American College of Chest Physicians (Fellow)",
  "Sociedad Mexicana de Medicina Crítica",
  "Asociación Mexicana de Cardiología",
  "Consejo Mexicano de Medicina Interna",
  "Sociedad Mexicana de Neumología y Cirugía de Tórax"
];

const SobreElDoctor = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "522381234567";
    const message = encodeURIComponent("Hola Dr. Peña, me gustaría agendar una cita");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Imagen */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="relative rounded-card overflow-hidden shadow-premium">
                <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="w-24 h-24 mx-auto text-primary/40 mb-4" />
                    <p className="text-muted-foreground">Foto del Dr. en consultorio</p>
                    <p className="text-sm text-muted-foreground mt-2">(Ambiente profesional)</p>
                  </div>
                </div>
                <div className="absolute inset-0 border-2 border-primary/20 rounded-card"></div>
              </div>
            </div>

            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Conóceme
                </h2>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Con más de <strong className="text-foreground">15 años de experiencia</strong> en medicina especializada, 
                    mi compromiso es brindar atención médica de excelencia con un enfoque integral y trato humano.
                  </p>
                  <p>
                    Mi formación incluye estudios en instituciones de prestigio como la <strong className="text-foreground">UAPEP</strong>, 
                    <strong className="text-foreground"> UAA</strong>, <strong className="text-foreground">UNAM</strong> y la 
                    <strong className="text-foreground"> Pontificia Universidad Católica de Chile</strong>, lo que me ha 
                    permitido mantenerme a la vanguardia en cardioneumología y medicina crítica.
                  </p>
                  <p>
                    Mi filosofía de trabajo se centra en la <strong className="text-foreground">atención integral</strong>, 
                    combinando diagnóstico preciso, tratamiento basado en evidencia científica y, sobre todo, 
                    el trato humano que cada paciente merece.
                  </p>
                </div>
              </div>

              {/* Membresías */}
              <div className="space-y-3">
                <h3 className="font-playfair text-xl font-semibold text-foreground flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Membresías Profesionales
                </h3>
                <ul className="space-y-2">
                  {membresias.map((membresia, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{membresia}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cédulas */}
              <div className="p-6 rounded-card bg-primary-lighter border border-primary/20">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="space-y-1">
                    <p className="font-semibold text-foreground">Cédula Profesional: [NÚMERO]</p>
                    <p className="font-semibold text-foreground">Cédula de Especialidad: [NÚMERO]</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground font-bold px-8 py-6 rounded-button shadow-medium hover:shadow-premium transition-all duration-300 mt-6"
              >
                Agendar consulta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreElDoctor;
