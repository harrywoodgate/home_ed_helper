import { PDFViewer } from "@react-pdf/renderer";

export default function Preview({ document, active }) {

  return (
    <div className={active ? "block" : "hidden"}>
      <PDFViewer>
        {document}
      </PDFViewer>
    </div>
  );
}
