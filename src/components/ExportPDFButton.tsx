import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import html2pdf from "html2pdf.js";
import { toast } from "sonner";

const ExportPDFButton = () => {
  const handleExportPDF = () => {
    toast.loading("Generando PDF...");
    
    const element = document.body;
    const opt = {
      margin: 10,
      filename: 'Dr-Hector-Pena-Carrillo.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      toast.dismiss();
      toast.success("PDF descargado exitosamente");
    }).catch(() => {
      toast.dismiss();
      toast.error("Error al generar el PDF");
    });
  };

  return (
    <Button
      onClick={handleExportPDF}
      size="icon"
      className="fixed bottom-24 right-6 z-40 h-14 w-14 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-elegant hover:shadow-glow transition-all duration-300"
      aria-label="Exportar a PDF"
    >
      <FileDown className="h-6 w-6" />
    </Button>
  );
};

export default ExportPDFButton;
