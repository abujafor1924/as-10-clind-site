import React from "react";
// import { saveAs } from "file-saver";
import PdfOne from "./PdfOne";

const PdfTwo = () => {
  const handleGeneratePDF = async () => {
    const { pdf } = await import("@react-pdf/renderer");

    const blob = await pdf(<PdfOne />).toBlob();
    saveAs(blob, "document.pdf");
  };
  return (
    <div>
      {/* Your website content */}
      <button onClick={handleGeneratePDF}>Generate PDF</button>
    </div>
  );
};

export default PdfTwo;
