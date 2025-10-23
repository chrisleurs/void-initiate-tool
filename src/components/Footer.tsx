import { MapPin, Phone, Mail, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8">
          {/* Columna 1: Dr. Héctor Peña Carrillo */}
          <div className="space-y-4">
            <h3 className="font-playfair text-2xl font-bold text-white">
              Dr. Héctor Peña Carrillo
            </h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Cardioneumología<br />
              Medicina Crítica<br />
              Medicina Interna
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>Consultorio: 238 382 4393</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>WhatsApp/Citas: 238 111 9392</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>hectorhpc1@gmail.com</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  Manuel Gutiérrez Zamora 307-C<br />
                  Tehuacán, Puebla
                </span>
              </div>
            </div>
          </div>

          {/* Columna 3: Certificaciones */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Certificaciones</h4>
            <div className="space-y-3 text-sm">
              <div className="space-y-2">
                <p className="text-xs">Consejo Mexicano de Anestesiología</p>
                <p className="text-xs">Consejo Mexicano de Medicina Crítica</p>
              </div>
              <p className="text-xs text-primary-foreground/70 pt-2">
                Fellow American College of Chest Physicians
              </p>
            </div>
          </div>

          {/* Columna 4: Enlaces */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-white">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#inicio" className="hover:underline hover:text-white transition-colors duration-300" aria-label="Ir a Inicio">Inicio</a></li>
              <li><a href="#servicios" className="hover:underline hover:text-white transition-colors duration-300" aria-label="Ir a Servicios">Servicios</a></li>
              <li><a href="#sobre-mi" className="hover:underline hover:text-white transition-colors duration-300" aria-label="Ir a Sobre mí">Sobre mí</a></li>
              <li><a href="#publicaciones" className="hover:underline hover:text-white transition-colors duration-300" aria-label="Ir a Publicaciones">Publicaciones</a></li>
              <li><a href="#reconocimientos" className="hover:underline hover:text-white transition-colors duration-300" aria-label="Ir a Reconocimientos">Reconocimientos</a></li>
              <li><a href="#hospital" className="hover:underline hover:text-white transition-colors duration-300" aria-label="Ir a Hospital">Hospital</a></li>
              <li><a href="#" className="hover:underline hover:text-white transition-colors duration-300" aria-label="Ver perfil en Google Business">Google Business</a></li>
              <li><a href="/aviso-privacidad" className="hover:underline hover:text-white transition-colors duration-300" aria-label="Leer Aviso de Privacidad">Aviso de Privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80 mb-2">
            © 2025 Dr. Héctor Peña Carrillo, FCCP. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/60">
            Fellow of the American College of Chest Physicians
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
