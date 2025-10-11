import { BookOpen, ExternalLink, Award, Globe, Book, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const estadisticas = [
  {
    icon: BookOpen,
    numero: "40+",
    label: "Publicaciones Científicas",
    color: "text-primary"
  },
  {
    icon: Globe,
    numero: "25+",
    label: "Congresos Nacionales",
    color: "text-accent"
  },
  {
    icon: Award,
    numero: "15+",
    label: "Congresos Internacionales",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    numero: "#1",
    label: "En Publicaciones en Tehuacán",
    color: "text-accent"
  }
];

const publicaciones = [
  {
    titulo: "Manejo ventilatorio en SDRA severo: Protocolo de estrategias protectoras",
    fuente: "Journal of Critical Care Medicine",
    año: 2024,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Actualización en hipertensión pulmonar en pacientes críticos",
    fuente: "Congreso Nacional de Medicina Crítica",
    año: 2024,
    categoria: "Congreso Nacional"
  },
  {
    titulo: "Efectividad de la broncoscopia terapéutica en neumonía grave bilateral",
    fuente: "Revista Mexicana de Neumología",
    año: 2023,
    categoria: "Revista Nacional"
  },
  {
    titulo: "Protocolos de destete ventilatorio en pacientes con EPOC severo",
    fuente: "American College of Chest Physicians",
    año: 2023,
    categoria: "Congreso Internacional"
  },
  {
    titulo: "Biomarcadores pronósticos en sepsis de origen pulmonar",
    fuente: "Critical Care Medicine",
    año: 2023,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Manejo integral del paciente crítico con comorbilidades cardiopulmonares",
    fuente: "Manual de Medicina Crítica Moderna",
    año: 2022,
    categoria: "Capítulo de Libro"
  },
  {
    titulo: "Estrategias de ventilación no invasiva en insuficiencia respiratoria aguda",
    fuente: "Congreso Latinoamericano de Medicina Crítica",
    año: 2023,
    categoria: "Congreso Internacional"
  },
  {
    titulo: "Uso de ultrasonido pulmonar en el diagnóstico de neumonía",
    fuente: "Revista de Medicina Interna de México",
    año: 2022,
    categoria: "Revista Nacional"
  },
  {
    titulo: "Manejo hemodinámico en shock cardiogénico",
    fuente: "Simposio Internacional de Cardiología",
    año: 2024,
    categoria: "Congreso Internacional"
  }
];

const categoriasColores = {
  "Revista Internacional": "bg-primary/10 text-primary border-l-4 border-primary",
  "Congreso Nacional": "bg-accent/10 text-accent border-l-4 border-accent",
  "Revista Nacional": "bg-primary/10 text-primary border-l-4 border-primary",
  "Congreso Internacional": "bg-accent/10 text-accent border-l-4 border-accent",
  "Capítulo de Libro": "bg-muted text-foreground border-l-4 border-muted-foreground"
};

const Publicaciones = () => {
  return (
    <section id="publicaciones" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-lighter rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Líder en Publicaciones Científicas en Tehuacán
              </span>
            </div>
            
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Publicaciones Científicas y Académicas
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Con el mayor número de publicaciones científicas en Tehuacán, el Dr. Peña ha contribuido 
              significativamente al avance de la medicina crítica y cardioneumología en México y Latinoamérica.
            </p>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
            {estadisticas.map((stat, index) => (
              <div
                key={index}
                className="p-6 md:p-8 rounded-card bg-card border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className={`w-8 h-8 md:w-10 md:h-10 mx-auto mb-3 ${stat.color}`} />
                <p className={`text-3xl md:text-4xl font-bold font-playfair mb-2 ${stat.color}`}>
                  {stat.numero}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Grid de Publicaciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {publicaciones.map((pub, index) => (
              <div
                key={index}
                className={`group p-6 rounded-card bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:translate-x-1 animate-fade-in ${
                  categoriasColores[pub.categoria as keyof typeof categoriasColores]
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Badge de categoría */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-background/50">
                    {pub.categoria}
                  </span>
                </div>

                {/* Contenido */}
                <h3 className="font-semibold text-base md:text-lg text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                  {pub.titulo}
                </h3>
                <p className="text-sm text-muted-foreground mb-1">
                  {pub.fuente}
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  {pub.año}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 md:mt-12">
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary-lighter font-semibold px-8 py-6 rounded-button transition-all duration-300"
            >
              Ver todas las publicaciones
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publicaciones;
