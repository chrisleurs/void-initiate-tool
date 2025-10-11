import { Heart, Wind, Activity, Stethoscope, Siren, Microscope } from "lucide-react";
import { Button } from "@/components/ui/button";

const especialidadesCards = [
  {
    icon: Heart,
    title: "Cardioneumología",
    description: "Diagnóstico y tratamiento integral de enfermedades cardiopulmonares"
  },
  {
    icon: Activity,
    title: "Medicina Crítica",
    description: "Atención en situaciones de urgencia y cuidados intensivos"
  },
  {
    icon: Stethoscope,
    title: "Medicina Interna",
    description: "Abordaje integral del adulto con enfoque preventivo"
  },
  {
    icon: Siren,
    title: "Terapia Intensiva",
    description: "Manejo avanzado de pacientes críticos"
  },
  {
    icon: Microscope,
    title: "Procedimientos Especializados",
    description: "Técnicas diagnósticas y terapéuticas de vanguardia"
  },
  {
    icon: Wind,
    title: "Manejo de Comorbilidades",
    description: "Tratamiento integral de múltiples condiciones"
  }
];

const serviciosDetallados = [
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16 md:mb-24">
          {especialidadesCards.map((esp, index) => (
            <div
              key={index}
              className="group p-6 rounded-card bg-card border border-border shadow-soft hover:shadow-premium transition-all duration-500 hover:-translate-y-2 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Borde superior con degradado al hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-card bg-gradient-primary flex items-center justify-center shadow-medium group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
                  <esp.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-playfair text-xl font-semibold text-foreground">
                    {esp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {esp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Servicios Detallados */}
        <div className="space-y-12 md:space-y-16 max-w-6xl mx-auto">
          {serviciosDetallados.map((servicio, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start animate-fade-in ${
                index % 2 === 0 ? "" : "lg:grid-flow-dense"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Ícono */}
              <div className={`lg:col-span-2 flex justify-center lg:justify-start ${index % 2 === 0 ? "" : "lg:col-start-11"}`}>
                <div className="w-20 h-20 rounded-card bg-gradient-primary flex items-center justify-center shadow-medium">
                  <servicio.icon className="w-10 h-10 text-primary-foreground" />
                </div>
              </div>

              {/* Contenido */}
              <div className={`lg:col-span-10 space-y-4 ${index % 2 === 0 ? "" : "lg:col-start-1 lg:row-start-1"}`}>
                <div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {servicio.title}
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
                    {servicio.description}
                  </p>
                </div>

                {/* Lista de condiciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {servicio.condiciones.map((condicion, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1 flex-shrink-0">✓</span>
                      <span className="text-muted-foreground">{condicion}</span>
                    </div>
                  ))}
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
            className="bg-primary hover:bg-primary-light text-primary-foreground font-bold text-base md:text-lg px-8 py-6 md:py-7 rounded-button shadow-medium hover:shadow-premium transition-all duration-300"
          >
            Consultar disponibilidad en WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Especialidades;
