import { GraduationCap, Award, Building2, Shield } from "lucide-react";

const certificaciones = [
  {
    icon: Award,
    title: "Fellow American College of Chest",
    description: "Reconocimiento internacional en medicina torácica y respiratoria"
  },
  {
    icon: Shield,
    title: "Certificación AMCCE",
    description: "Asociación Mexicana de Colegio de Cirujanos y Especialistas"
  },
  {
    icon: GraduationCap,
    title: "Certificado por el CMMI",
    description: "Consejo Mexicano de Medicina Interna"
  },
  {
    icon: Building2,
    title: "Asociación Mexicana de Cardiología",
    description: "Miembro activo con especialización en cardiología"
  }
];

const Certificaciones = () => {
  return (
    <section id="reconocimientos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Reconocimientos y Certificaciones
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Formación continua y reconocimientos que respaldan mi compromiso con la excelencia médica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {certificaciones.map((cert, index) => (
            <div
              key={index}
              className="group p-6 rounded-card bg-card border border-border shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 animate-fade-in text-center opacity-0"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center shadow-medium group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                <cert.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              
              <h3 className="font-playfair text-lg md:text-xl font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificaciones;
