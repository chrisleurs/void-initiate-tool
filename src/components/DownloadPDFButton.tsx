import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";
import { toast } from "sonner";

interface DownloadPDFButtonProps {
  buttonText?: string;
  className?: string;
}

const DownloadPDFButton = ({ 
  buttonText = "Descargar CV",
  className = ""
}: DownloadPDFButtonProps) => {
  
  const handleDownloadPDF = async () => {
    toast.loading("Generando CV en PDF...");
    
    // Ocultar botones flotantes temporalmente
    const floatingButtons = document.querySelectorAll('[data-floating-button]');
    floatingButtons.forEach(btn => {
      (btn as HTMLElement).style.display = 'none';
    });

    // Capturar el contenido principal
    const element = document.getElementById('main-content') || document.body;
    
    const opt = {
      margin: [10, 10, 10, 10] as [number, number, number, number],
      filename: 'CV-Dr-Hector-Pena-Carrillo.pdf',
      image: { type: 'jpeg' as const, quality: 0.95 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        letterRendering: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200,
        scrollY: -window.scrollY,
        scrollX: 0
      },
      jsPDF: { 
        unit: 'mm', 
        format: 'a4', 
        orientation: 'portrait' as const,
        compress: true
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      await html2pdf().set(opt).from(element).save();
      toast.dismiss();
      toast.success("CV descargado exitosamente");
    } catch (error) {
      toast.dismiss();
      toast.error("Error al generar el CV");
    } finally {
      // Restaurar botones flotantes
      floatingButtons.forEach(btn => {
        (btn as HTMLElement).style.display = '';
      });
    }
  };

  return (
    <Button
      variant="secondary"
      size="lg"
      onClick={handleDownloadPDF}
      className={`gap-2 ${className}`}
    >
      <Download className="h-5 w-5" />
      {buttonText}
    </Button>
  );
};

export default DownloadPDFButton;
