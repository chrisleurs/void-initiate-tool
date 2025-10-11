import { Heart, Wind, Activity, Stethoscope } from "lucide-react";

const especialidades = [
  {
    icon: Heart,
    title: "Cardioneumología",
    description: "Diagnóstico y tratamiento integral de enfermedades cardiopulmonares, combinando expertise cardiovascular y respiratorio para una atención completa."
  },
  {
    icon: Activity,
    title: "Medicina Crítica",
    description: "Atención especializada en situaciones de urgencia y cuidados intensivos, con protocolos actualizados y manejo avanzado de pacientes críticos."
  },
  {
    icon: Stethoscope,
    title: "Medicina Interna",
    description: "Abordaje integral del adulto con enfoque preventivo y terapéutico, diagnóstico preciso de enfermedades complejas y manejo de múltiples patologías."
  },
  {
    icon: Wind,
    title: "Neumología",
    description: "Especialista en enfermedades respiratorias: asma, EPOC, neumonía, y otras afecciones pulmonares con tratamientos de vanguardia."
  }
];

const Especialidades = () => {
  return (
    <section id="especialidades" className="py-16 md:py-24 bg-gradient-premium">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Especialidades Médicas
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Atención médica especializada con enfoque multidisciplinario y tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {especialidades.map((esp, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-card bg-card border border-border shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-card bg-gradient-primary flex items-center justify-center shadow-medium group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <esp.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                
                <div className="flex-1 space-y-2 md:space-y-3">
                  <h3 className="font-playfair text-xl md:text-2xl font-semibold text-foreground">
                    {esp.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {esp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
