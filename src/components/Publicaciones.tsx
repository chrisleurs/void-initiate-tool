import { BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const publicaciones = [
  {
    titulo: "Manejo Avanzado en Medicina Crítica Respiratoria",
    revista: "Revista Mexicana de Medicina Crítica",
    año: 2023,
    tipo: "Artículo de Investigación"
  },
  {
    titulo: "Protocolo de Atención en Cardioneumología",
    revista: "Archivos de Cardiología de México",
    año: 2022,
    tipo: "Protocolo Clínico"
  },
  {
    titulo: "Actualización en Ventilación Mecánica No Invasiva",
    revista: "Neumología y Cirugía de Tórax",
    año: 2023,
    tipo: "Revisión Sistemática"
  }
];

const Publicaciones = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-lighter rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Líder en Publicaciones Científicas en Tehuacán
              </span>
            </div>
            
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Publicaciones Científicas
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Compromiso con la investigación médica y la actualización constante para ofrecer la mejor atención basada en evidencia
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {publicaciones.map((pub, index) => (
              <div
                key={index}
                className="group p-6 md:p-8 rounded-card bg-card border border-border shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center mt-1">
                        <BookOpen className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg md:text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                          {pub.titulo}
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                          {pub.revista} • {pub.año}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-primary-lighter text-primary text-xs font-medium rounded-full">
                      {pub.tipo}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12">
            <Button
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary-lighter font-semibold px-8 py-6 rounded-button"
            >
              Ver Todas las Publicaciones
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publicaciones;
