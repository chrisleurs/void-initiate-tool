import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Users, Heart } from "lucide-react";

const membresias = [
  "Consejo Mexicano de Anestesiología",
  "Consejo Mexicano de Medicina Crítica y Terapia Intensiva",
  "American College of Chest Physicians (Fellow)",
  "Asociación Mexicana de Enfermedades del Endotelio",
  "Sociedad Médica de Tehuacán — Vicepresidente 2023–2025"
];

const SobreElDoctor = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5212381119392";
    const message = encodeURIComponent("Hola Dr. Peña, me gustaría ponerme en contacto");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="sobre-mi" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Contenido */}
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in-up">
              {/* Título */}
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Conóceme
                </h2>
              </div>

              {/* Imagen - Solo visible en móvil, debajo del título */}
              <div className="lg:hidden animate-fade-in mb-6">
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

              {/* Texto descriptivo */}
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Con más de <strong className="text-foreground">25 años de experiencia médica</strong> en el manejo de 
                  pacientes críticos y patologías respiratorias complejas, soy una referencia nacional e internacional 
                  en cardioneumología, anestesia y medicina intensiva.
                </p>
                <p>
                  Mi trayectoria combina formación en instituciones líderes como <strong className="text-foreground">Médica Sur</strong>, 
                  el <strong className="text-foreground">Instituto Nacional de Cardiología Ignacio Chávez</strong> y la 
                  <strong className="text-foreground"> Pontificia Universidad Católica de Chile</strong>, con participación 
                  activa en más de <strong className="text-foreground">30 congresos internacionales</strong> en América, Europa y Latinoamérica.
                </p>
                <p>
                  He publicado en revistas de alto impacto como <strong className="text-foreground">Chest Journal</strong> y 
                  <strong className="text-foreground"> European Society of Intensive Care</strong>, contribuyendo significativamente 
                  al avance de la medicina crítica y cardioneumología en México y la región.
                </p>
                <p>
                  Mi filosofía de trabajo combina mi sólida preparación académica con un <strong className="text-foreground">enfoque 
                  humano y empático</strong>, ofreciendo atención especializada con el trato que cada paciente merece.
                </p>
              </div>

              {/* Trayectoria Profesional */}
              <div className="space-y-3">
                <h3 className="font-playfair text-xl font-semibold text-foreground flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Trayectoria Profesional
                </h3>
                <ul className="space-y-2">
                  {[
                    "Médico Cirujano — UPAEP, Puebla",
                    "Especialidad en Anestesiología — Hospital Miguel Hidalgo, Aguascalientes",
                    "Subespecialidad en Medicina del Paciente en Estado Crítico — Fundación Clínica Médica Sur",
                    "Subespecialidad en Cardioneumología — Instituto Nacional de Cardiología Ignacio Chávez",
                    "Fellow en Broncoscopía — American Pulmonary Society",
                    "Fellow of the American College of Chest Physicians (FCCP)",
                    "Fellow en Ecocardiografía (UBA) — En curso",
                    "+30 congresos internacionales en América, Europa y Latinoamérica",
                    "Publicaciones en Chest Journal y European Society of Intensive Care"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
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
                  <div className="space-y-2">
                    <p className="font-semibold text-foreground text-sm">
                      📚 <strong>Formación Académica:</strong>
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Médico Cirujano — UPAEP, Puebla</li>
                      <li>• Anestesiología — Hospital Miguel Hidalgo, Aguascalientes</li>
                      <li>• Medicina del Paciente en Estado Crítico — Fundación Clínica Médica Sur</li>
                      <li>• Cardioneumología — Instituto Nacional de Cardiología Ignacio Chávez</li>
                      <li>• Fellow en Broncoscopía — American Pulmonary Society</li>
                      <li>• Fellow en Ecocardiografía (UBA) — En curso</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-primary hover:bg-primary-light text-primary-foreground font-bold px-8 py-6 rounded-button shadow-medium hover:shadow-premium transition-all duration-300 mt-6"
              >
                Contáctame en WhatsApp
              </Button>
            </div>

            {/* Imagen - Solo visible en desktop */}
            <div className="hidden lg:block order-2 lg:order-1 animate-fade-in">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreElDoctor;