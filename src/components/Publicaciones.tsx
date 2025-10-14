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
    numero: "30+",
    label: "Congresos Internacionales",
    color: "text-accent"
  },
  {
    icon: Award,
    numero: "4",
    label: "Revistas de Alto Impacto",
    color: "text-primary"
  },
  {
    icon: Book,
    numero: "2",
    label: "Capítulos en Manual Moderno",
    color: "text-accent"
  }
];

const publicaciones = [
  {
    titulo: "Dapaglifozina mejora los pacientes con neumonía en comparación a la metformina",
    fuente: "Chest Journal",
    año: 2023,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Anticoagulación oral en jóvenes con hipertensión pulmonar: análisis de 10 años",
    fuente: "American Thorax Journal",
    año: 2016,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Tromboembolia pulmonar aguda",
    fuente: "Manual Moderno - Capítulo",
    año: 2020,
    categoria: "Capítulo de Libro"
  },
  {
    titulo: "Tromboembolia pulmonar crónica",
    fuente: "Manual Moderno - Capítulo",
    año: 2020,
    categoria: "Capítulo de Libro"
  },
  {
    titulo: "Efecto del Sitaxentan en pacientes con hipertensión pulmonar",
    fuente: "European Respiratory Society",
    año: 2018,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Manejo ventilatorio en SDRA severo: Protocolo de estrategias protectoras",
    fuente: "Congreso Latinoamericano de Medicina Crítica",
    año: 2024,
    categoria: "Congreso Internacional"
  },
  {
    titulo: "Efectividad de la broncoscopia terapéutica en neumonía grave bilateral",
    fuente: "Revista Mexicana de Neumología",
    año: 2023,
    categoria: "Revista Nacional"
  },
  {
    titulo: "Biomarcadores pronósticos en sepsis de origen pulmonar",
    fuente: "Critical Care Medicine",
    año: 2023,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Uso de ultrasonido pulmonar en el diagnóstico de neumonía",
    fuente: "Revista de Medicina Interna de México",
    año: 2022,
    categoria: "Revista Nacional"
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
              Participación activa en congresos internacionales y publicaciones en revistas de alto impacto 
              como Chest Journal y European Society of Intensive Care, contribuyendo al avance de la medicina 
              crítica y cardioneumología.
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

        </div>
      </div>
    </section>
  );
};

export default Publicaciones;
