import { Heart, Wind, Activity, Stethoscope, Siren, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const especialidades = [
  {
    icon: Heart,
    title: "Cardioneumología",
    description: "Atención integral para pacientes con enfermedades cardiovasculares y respiratorias combinadas, proporcionando diagnóstico preciso y tratamiento especializado.",
    condiciones: [
      "Insuficiencia cardíaca avanzada",
      "EPOC y enfermedades pulmonares",
      "Hipertensión pulmonar",
      "Trastornos respiratorios del sueño",
      "Enfermedades intersticiales"
    ]
  },
  {
    icon: Activity,
    title: "Medicina Crítica y Terapia Intensiva",
    description: "Manejo especializado de pacientes en estado crítico con protocolos actualizados y tecnología de punta para garantizar la mejor atención posible.",
    condiciones: [
      "Manejo de choque séptico",
      "Insuficiencia respiratoria aguda",
      "Ventilación mecánica",
      "Manejo hemodinámico",
      "SDRA y falla orgánica múltiple"
    ]
  },
  {
    icon: Stethoscope,
    title: "Medicina Interna",
    description: "Diagnóstico y tratamiento de enfermedades del adulto, con enfoque integral que considera todas las dimensiones de la salud del paciente.",
    condiciones: [
      "Diabetes y endocrinopatías",
      "Hipertensión arterial",
      "Enfermedades renales",
      "Trastornos metabólicos",
      "Enfermedades autoinmunes"
    ]
  },
  {
    icon: Siren,
    title: "Terapia Intensiva",
    description: "Manejo avanzado de pacientes en situaciones críticas que requieren monitoreo constante y atención especializada inmediata.",
    condiciones: [
      "Monitoreo hemodinámico invasivo",
      "Soporte vital avanzado",
      "Manejo postoperatorio complejo",
      "Falla multiorgánica",
      "Pacientes con alto riesgo"
    ]
  },
  {
    icon: Microscope,
    title: "Procedimientos Especializados",
    description: "Realización de procedimientos diagnósticos y terapéuticos con técnicas de vanguardia para obtener información precisa y tratamiento efectivo.",
    condiciones: [
      "Broncoscopia diagnóstica/terapéutica",
      "Toracocentesis",
      "Catéteres centrales",
      "Intubación de urgencia",
      "Ultrasonido pulmonar/cardíaco"
    ]
  },
  {
    icon: Wind,
    title: "Manejo de Infecciones Severas",
    description: "Tratamiento especializado de infecciones graves con protocolos basados en evidencia y experiencia en manejo de pacientes críticos.",
    condiciones: [
      "Neumonía grave",
      "Sepsis y shock séptico",
      "Microorganismos multirresistentes",
      "Tuberculosis",
      "Empiema pleural"
    ]
  }
];

const Especialidades = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "522381234567";
    const message = encodeURIComponent("Hola Dr. Peña, quisiera consultar disponibilidad");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="servicios" className="py-16 md:py-24 bg-gradient-premium">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Servicios y Especialidades
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Atención médica especializada con enfoque multidisciplinario y tecnología de vanguardia
          </p>
        </div>

        {/* Cards Grid - Diseño Moderno */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {especialidades.map((especialidad, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-card bg-card border border-border shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Borde superior con degradado animado */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-[gradient_3s_ease_infinite] transition-opacity duration-300"></div>
              
              {/* Fondo decorativo con blur */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
              
              <div className="relative space-y-6">
                {/* Ícono */}
                <div className="w-20 h-20 rounded-card bg-gradient-primary flex items-center justify-center shadow-medium group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <especialidad.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                
                {/* Título y descripción */}
                <div className="space-y-3">
                  <h3 className="font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {especialidad.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {especialidad.description}
                  </p>
                </div>

                {/* Separador decorativo */}
                <div className="w-16 h-1 bg-gradient-primary rounded-full"></div>

                {/* Lista de condiciones */}
                <div className="space-y-2.5">
                  <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                    Condiciones Tratadas
                  </p>
                  <ul className="space-y-2">
                    {especialidad.condiciones.map((condicion, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                          <span className="text-primary text-xs font-bold">✓</span>
                        </span>
                        <span className="text-muted-foreground leading-relaxed">{condicion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Badge flotante */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Intermedio */}
        <div className="text-center mt-12 md:mt-16">
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground font-bold text-base md:text-lg px-8 py-6 md:py-7 rounded-button shadow-medium hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
          >
            Consultar disponibilidad en WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
