import React, { useEffect, useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import { pdf } from "@react-pdf/renderer";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer({ children }) {
  const [pdfUrl, setPdfUrl] = useState<string>("");
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const child = React.Children.only(children);
    pdf(child)
      .toBlob()
      .then((blob) => {
        setPdfUrl(URL.createObjectURL(blob));
      });
  }, [children]);

  return (
    <Document
      file={pdfUrl}
      onLoadSuccess={({ numPages }) => setNumPages(numPages)}
    >
      {Array.apply(null, Array(numPages))
        .map((_, i) => i + 1)
        .map((page, pageNumber) => (
          <div key={pageNumber}>
            <br />
            <br />
            <Page
              renderMode="svg"
              pageNumber={page}
              width={794}
              height={1123}
            />
          </div>
        ))}
    </Document>
  );
}
