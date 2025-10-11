import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Acepta seguros médicos?",
    answer: "Sí, acepto la mayoría de seguros médicos y emito facturas para apoyarte en los trámites de reembolso con tu aseguradora."
  },
  {
    question: "¿Qué debo llevar a la primera consulta?",
    answer: "Tus estudios médicos previos, lista completa de medicamentos, credencial de seguro y lista de síntomas o preguntas."
  },
  {
    question: "¿Qué hacer en caso de urgencia médica?",
    answer: "Contacta inmediatamente por WhatsApp o acude directamente al Hospital Independencia. Mantengo comunicación 24/7 para urgencias."
  },
  {
    question: "¿Cuáles son los horarios de consulta?",
    answer: "Lunes a viernes de 9:00 a 19:00 hrs en Hospital Independencia. También manejo citas de urgencia según disponibilidad."
  }
];

const FAQ = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Resuelve tus dudas más comunes sobre la consulta y atención médica
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-card px-6 bg-card shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
