import { Star, Quote } from "lucide-react";

const testimonios = [
  {
    nombre: "María González",
    ciudad: "Tehuacán, Puebla",
    comentario: "El Dr. Peña me salvó la vida. Su profesionalismo y calidez humana son excepcionales. Me diagnosticó a tiempo y su tratamiento fue muy efectivo.",
    rating: 5
  },
  {
    nombre: "Roberto Martínez",
    ciudad: "Tehuacán, Puebla",
    comentario: "Excelente médico. Siempre explica todo con claridad y paciencia. Me siento en las mejores manos. Su atención en medicina crítica fue fundamental.",
    rating: 5
  },
  {
    nombre: "Laura Sánchez",
    ciudad: "Puebla Capital",
    comentario: "Lo recomiendo ampliamente. Es un doctor muy preparado y dedicado. El mejor especialista en cardioneumología de la región sin duda.",
    rating: 5
  }
];

const Testimonios = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-premium">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Lo Que Dicen Mis Pacientes
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            La confianza y satisfacción de mis pacientes es mi mayor recompensa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonios.map((test, index) => (
            <div
              key={index}
              className="relative p-6 md:p-8 rounded-card bg-card border border-border shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-sm md:text-base text-foreground mb-6 leading-relaxed italic">
                "{test.comentario}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{test.nombre}</p>
                <p className="text-sm text-muted-foreground">{test.ciudad}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
