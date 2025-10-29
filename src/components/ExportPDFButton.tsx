import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";
import { toast } from "sonner";

const ExportPDFButton = () => {
  const handleExportPDF = async () => {
    toast.loading("Generando PDF del diseño web...");
    
    // Ocultar botones flotantes temporalmente
    const floatingButtons = document.querySelectorAll('[data-floating-button]');
    floatingButtons.forEach(btn => {
      (btn as HTMLElement).style.display = 'none';
    });

    // Capturar el contenido principal
    const element = document.getElementById('main-content') || document.body;
    
    const opt = {
      margin: [5, 5, 5, 5] as [number, number, number, number],
      filename: 'Dr-Hector-Pena-Carrillo-Web-Design.pdf',
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
      toast.success("PDF descargado exitosamente");
    } catch (error) {
      toast.dismiss();
      toast.error("Error al generar el PDF");
    } finally {
      // Restaurar botones flotantes
      floatingButtons.forEach(btn => {
        (btn as HTMLElement).style.display = '';
      });
    }
  };

  return (
    <Button
      onClick={handleExportPDF}
      size="icon"
      data-floating-button="true"
      className="fixed bottom-24 right-6 z-40 h-14 w-14 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-elegant hover:shadow-glow transition-all duration-300"
      aria-label="Exportar a PDF"
    >
      <FileDown className="h-6 w-6" />
    </Button>
  );
};

export default ExportPDFButton;
