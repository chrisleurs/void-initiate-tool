import { GraduationCap, Award, Building2, Shield } from "lucide-react";

const certificaciones = [
  {
    icon: GraduationCap,
    title: "Certificación en Medicina Interna",
    institution: "Consejo Mexicano de Medicina Interna",
    year: "Vigente"
  },
  {
    icon: Award,
    title: "Especialidad en Medicina Crítica",
    institution: "UNAM - Hospital General de México",
    year: "2015"
  },
  {
    icon: Shield,
    title: "Certificación en Cardioneumología",
    institution: "Consejo Mexicano de Neumología y Cirugía de Tórax",
    year: "Vigente"
  },
  {
    icon: Building2,
    title: "Miembro Activo",
    institution: "Sociedad Mexicana de Medicina Crítica",
    year: "2016-Actual"
  }
];

const Certificaciones = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Certificaciones y Membresías
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Formación continua y excelencia académica respaldada por las instituciones más prestigiosas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certificaciones.map((cert, index) => (
            <div
              key={index}
              className="group p-6 rounded-card bg-card shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-card bg-gradient-accent flex items-center justify-center shadow-medium group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                <cert.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              
              <h3 className="font-semibold text-lg mb-2 text-foreground">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-1">
                {cert.institution}
              </p>
              <p className="text-xs font-medium text-primary">
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificaciones;
