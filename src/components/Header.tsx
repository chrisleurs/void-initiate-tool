import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5212381119392";
    const message = encodeURIComponent("Hola Dr. Peña, me gustaría ponerme en contacto");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Publicaciones", href: "#publicaciones" },
    { label: "Reconocimientos", href: "#reconocimientos" },
    { label: "Hospital", href: "#hospital" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/80 backdrop-blur-md shadow-medium"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo/Nombre */}
          <div className="flex-shrink-0">
            <a href="#inicio" className="block">
              <h1 className="font-playfair text-xl md:text-2xl font-bold text-foreground">
                Dr. Héctor Peña Carrillo, FCCP
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                Terapia Intensiva • Anestesiología • Enfermedades Respiratorias
              </p>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              onClick={handleWhatsAppClick}
              className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-6 py-2 rounded-button"
            >
              Contáctame en WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2"
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary-light text-primary-foreground font-semibold py-3 rounded-button"
                >
                  Contáctame en WhatsApp
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
