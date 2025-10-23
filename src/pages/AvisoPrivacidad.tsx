import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const AvisoPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-8">
          Aviso de Privacidad
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Responsable de la Protección de sus Datos Personales
            </h2>
            <p>
              Dr. Héctor Peña Carrillo, con domicilio en Manuel Gutiérrez Zamora 307-C, 
              Tehuacán, Puebla, es responsable del tratamiento de sus datos personales de 
              conformidad con la Ley Federal de Protección de Datos Personales en Posesión 
              de los Particulares.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Datos Personales que Recabamos
            </h2>
            <p>
              Para las finalidades señaladas en el presente aviso de privacidad, podemos 
              recabar sus datos personales de distintas formas: cuando usted nos los 
              proporciona directamente, cuando visita nuestro sitio web o utiliza nuestros 
              servicios en línea, y cuando obtenemos información a través de otras fuentes 
              permitidas por la ley.
            </p>
            <p className="mt-4">Los datos personales que recabamos pueden incluir:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Datos de identificación: nombre completo, fecha de nacimiento, edad, género</li>
              <li>Datos de contacto: domicilio, teléfono, correo electrónico</li>
              <li>Datos de salud: historial clínico, diagnósticos, tratamientos, estudios médicos</li>
              <li>Datos financieros: información de facturación y pagos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Finalidades del Tratamiento
            </h2>
            <p>
              Los datos personales que recabamos serán utilizados para las siguientes 
              finalidades principales:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Prestación de servicios médicos profesionales</li>
              <li>Integración y actualización de expediente clínico</li>
              <li>Programación de citas y seguimiento de tratamientos</li>
              <li>Comunicación relacionada con su atención médica</li>
              <li>Facturación y cobro de servicios</li>
              <li>Cumplimiento de obligaciones legales y reglamentarias</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Transferencia de Datos Personales
            </h2>
            <p>
              Sus datos personales pueden ser compartidos con laboratorios, hospitales, 
              aseguradoras y otros profesionales de la salud cuando sea necesario para su 
              atención médica. Estas transferencias se realizan únicamente para las 
              finalidades médicas correspondientes y bajo estrictos protocolos de 
              confidencialidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Derechos ARCO
            </h2>
            <p>
              Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué 
              los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es 
              su derecho solicitar la corrección de su información personal en caso de que 
              esté desactualizada, sea inexacta o incompleta (Rectificación); que la 
              eliminemos de nuestros registros o bases de datos cuando considere que la 
              misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse 
              al uso de sus datos personales para fines específicos (Oposición).
            </p>
            <p className="mt-4">
              Para ejercer sus derechos ARCO, puede contactarnos a través de:
            </p>
            <ul className="list-none pl-0 mt-2 space-y-2">
              <li><strong>Correo electrónico:</strong> hectorhpc1@gmail.com</li>
              <li><strong>Teléfono:</strong> 238 382 4393</li>
              <li><strong>Domicilio:</strong> Manuel Gutiérrez Zamora 307-C, Tehuacán, Puebla</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Medidas de Seguridad
            </h2>
            <p>
              Hemos implementado medidas de seguridad administrativas, técnicas y físicas 
              para proteger sus datos personales contra daño, pérdida, alteración, 
              destrucción o el uso, acceso o tratamiento no autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Cambios al Aviso de Privacidad
            </h2>
            <p>
              Nos reservamos el derecho de efectuar en cualquier momento modificaciones o 
              actualizaciones al presente aviso de privacidad. Estas modificaciones estarán 
              disponibles en nuestro sitio web.
            </p>
          </section>

          <section className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Última actualización:</strong> Enero 2025
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AvisoPrivacidad;
