import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

const WhatsAppButton = ({ 
  phoneNumber = "5212381119392", 
  message = "Hola Dr. Peña, me gustaría ponerme en contacto" 
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground rounded-full shadow-large hover:shadow-premium transition-all duration-300 hover:scale-110 group animate-pulse-slow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping"></span>
    </button>
  );
};

export default WhatsAppButton;
