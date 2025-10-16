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
    titulo: "Complicaciones del Factor VII activado en una terapia intensiva polivalente",
    fuente: "Archivos de Cardiología de México",
    año: 2007,
    categoria: "Revista Nacional"
  },
  {
    titulo: "Factor VII: una alternativa para el sangrado de difícil control",
    fuente: "Chest Journal",
    año: 2007,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Traqueotomía percutánea: experiencia de 5 años en una terapia intensiva",
    fuente: "Revista del Instituto Nacional de Enfermedades Respiratorias",
    año: 2007,
    categoria: "Revista Nacional"
  },
  {
    titulo: "Disfunción y falla del ventrículo derecho en la tromboembolia pulmonar masiva: el intervencionismo como alternativa viable",
    fuente: "Revista de la Federación Argentina de Cardiología",
    año: 2008,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Uso concomitante de acenocumarol y sitaxentán en pacientes con hipertensión arterial pulmonar",
    fuente: "Chest Journal",
    año: 2008,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Mejora en la supervivencia en pacientes hispanos con hipertensión arterial pulmonar tratados con Sitaxsentan (STRIDE-3)",
    fuente: "Chest Journal",
    año: 2008,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Impacto de la sedación y conexión a ventilación mecánica en la saturación venosa central en pacientes críticos",
    fuente: "European Society of Intensive Care Magazine",
    año: 2008,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Índice electrocardiográfico de hipertrofia ventricular derecha vs. resonancia magnética en hipertensión pulmonar idiopática",
    fuente: "Chest Journal",
    año: 2008,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Dexmedetomidina mejora la adaptación a la ventilación mecánica no invasiva en hipertensión pulmonar aguda",
    fuente: "Chest Journal",
    año: 2008,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Interacción de acenocumarol y sitaxentán en hipertensión arterial pulmonar",
    fuente: "European Journal of Clinical Investigators",
    año: 2009,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Tromboembolia pulmonar crónica",
    fuente: "Manual Moderno",
    año: 2009,
    categoria: "Capítulo de Libro"
  },
  {
    titulo: "Tromboembolia pulmonar aguda",
    fuente: "Manual Moderno",
    año: 2009,
    categoria: "Capítulo de Libro"
  },
  {
    titulo: "Efecto del Sitaxentán en pacientes con hipertensión pulmonar asociada a cardiopatías congénitas",
    fuente: "European Respiratory Society",
    año: 2009,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Efecto de la septostomía auricular en la supervivencia de pacientes con hipertensión pulmonar severa",
    fuente: "Research Gate Magazine",
    año: 2010,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Anticoagulación en síndrome de Eisenmenger: impacto en la supervivencia a largo plazo",
    fuente: "Congenital Heart Disease",
    año: 2012,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Evaluación holística de la perfusión en choque séptico: fundamentos y aplicaciones clínicas",
    fuente: "Universidad de Ámsterdam",
    año: 2014,
    categoria: "Capítulo de Libro"
  },
  {
    titulo: "Terapia anticoagulante oral en jóvenes con hipertensión pulmonar: análisis de 10 años",
    fuente: "American Thorax Journal",
    año: 2016,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Septostomía auricular",
    fuente: "Textbook of Vascular Disease, University of Chicago / Harvard University",
    año: 2016,
    categoria: "Capítulo de Libro"
  },
  {
    titulo: "Olanzapina y alteraciones glucémicas en terapia intensiva",
    fuente: "European Society of Intensive Care / Chest Journal",
    año: 2017,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Síndrome de distress respiratorio por mordedura de Loxosceles",
    fuente: "Congress CHEST, New Orleans",
    año: 2019,
    categoria: "Congreso Internacional"
  },
  {
    titulo: "Hipertensión pulmonar como complicación en pacientes con COVID-19",
    fuente: "Chest Journal",
    año: 2020,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Dapaglifozina mejora los pacientes con neumonía en comparación a la metformina",
    fuente: "Chest Journal",
    año: 2023,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Fungal agents associated with chronic cough and respiratory infections",
    fuente: "Chest Journal",
    año: 2024,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Simultaneous acute myocardial infarction and bilateral pulmonary embolism in post-COVID-19 patient",
    fuente: "Chest Journal",
    año: 2024,
    categoria: "Revista Internacional"
  },
  {
    titulo: "Mediastinal mixed germ cell tumor: seminoma and endodermal sinus tumor",
    fuente: "Chest Journal",
    año: 2024,
    categoria: "Revista Internacional"
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

          {/* Grid de Publicaciones - Diseño compacto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {publicaciones.map((pub, index) => (
              <div
                key={index}
                className={`group p-3 md:p-4 rounded-lg bg-card shadow-soft hover:shadow-medium transition-all duration-300 hover:translate-x-1 animate-fade-in ${
                  categoriasColores[pub.categoria as keyof typeof categoriasColores]
                }`}
                style={{ animationDelay: `${index * 0.02}s` }}
              >
                {/* Badge de categoría */}
                <div className="mb-2">
                  <span className="inline-block px-2 py-0.5 text-[10px] md:text-xs font-semibold rounded-full bg-background/50">
                    {pub.categoria}
                  </span>
                </div>

                {/* Contenido */}
                <h3 className="font-semibold text-xs md:text-sm text-foreground mb-2 leading-tight group-hover:text-primary transition-colors line-clamp-3">
                  {pub.titulo}
                </h3>
                <p className="text-[10px] md:text-xs text-muted-foreground mb-0.5 line-clamp-2">
                  {pub.fuente}
                </p>
                <p className="text-[10px] md:text-xs text-muted-foreground font-medium">
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
