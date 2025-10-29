import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadPDFButtonProps {
  fileName?: string;
  buttonText?: string;
  className?: string;
}

const DownloadPDFButton = ({ 
  fileName = "Dr-Hector-Pena-Carrillo-Brochure.pdf",
  buttonText = "Descargar Brochure PDF",
  className = ""
}: DownloadPDFButtonProps) => {
  return (
    <a 
      href={`/${fileName}`}
      download={fileName}
      className="inline-block"
    >
      <Button
        variant="secondary"
        className={`gap-2 ${className}`}
      >
        <Download className="h-5 w-5" />
        {buttonText}
      </Button>
    </a>
  );
};

export default DownloadPDFButton;
