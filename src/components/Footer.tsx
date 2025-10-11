import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Logo y descripción */}
            <div className="text-center md:text-left">
              <h3 className="font-playfair text-2xl font-bold mb-3">
                Dr. Héctor Peña Carrillo
              </h3>
              <p className="text-sm text-background/70 leading-relaxed">
                Especialista en Cardioneumología, Medicina Crítica y Medicina Interna
              </p>
            </div>

            {/* Enlaces rápidos */}
            <div className="text-center">
              <h4 className="font-semibold mb-3">Enlaces Rápidos</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>
                  <a href="#especialidades" className="hover:text-background transition-colors">
                    Especialidades
                  </a>
                </li>
                <li>
                  <a href="#certificaciones" className="hover:text-background transition-colors">
                    Certificaciones
                  </a>
                </li>
                <li>
                  <a href="#testimonios" className="hover:text-background transition-colors">
                    Testimonios
                  </a>
                </li>
                <li>
                  <a href="#publicaciones" className="hover:text-background transition-colors">
                    Publicaciones
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-3">Contacto</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Tehuacán, Puebla</li>
                <li>contacto@drpena.com</li>
                <li>(238) 123-4567</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-background/20 pt-6 text-center">
            <p className="text-sm text-background/70 flex items-center justify-center gap-2">
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>
                © {new Date().getFullYear()} Dr. Héctor Peña Carrillo. Todos los derechos reservados.
              </span>
            </p>
            <p className="text-xs text-background/50 mt-2">
              Cédula Profesional: 1234567 | Cédula de Especialidad: 7654321
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
