import { Star, Quote } from "lucide-react";

const testimonios = [
  {
    testimonio: "Gracias a la atención del Dr. Peña, mi padre salió adelante cuando estuvo en terapia intensiva. Su profesionalismo y dedicación fueron fundamentales para la recuperación.",
    autor: "Familiar de paciente",
    rating: 5
  },
  {
    testimonio: "El Dr. Peña explica todo con mucha calma y claridad. Te hace sentir tranquilo y confiado durante todo el tratamiento.",
    autor: "María Elena R.",
    rating: 5
  },
  {
    testimonio: "Profesional, humano y siempre disponible cuando lo necesitas. Su experiencia se nota en cada consulta.",
    autor: "Carlos M.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonios.map((test, index) => (
            <div
              key={index}
              className="relative p-8 md:p-10 rounded-card bg-card border border-border shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in overflow-hidden"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animationFillMode: 'forwards',
                transform: `translateX(${index % 2 === 0 ? '-30px' : '0'})`
              }}
            >
              {/* Comillas grandes como marca de agua */}
              <div className="absolute top-4 left-4 text-6xl md:text-7xl font-playfair text-primary/10 leading-none">
                "
              </div>
              
              <div className="relative z-10">
                <div className="mb-4 flex gap-1">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                  {test.testimonio}
                </p>
                <p className="font-semibold text-foreground">
                  — {test.autor}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Opcional: Enlace a reseñas */}
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            Leer más opiniones en{" "}
            <a href="#" className="text-primary hover:underline font-semibold transition-colors duration-300">
              Google Reviews
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
