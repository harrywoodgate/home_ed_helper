import { PDFViewer } from "@react-pdf/renderer";

export default function Preview({ document, active, setActive }) {

  return (
    <div className={active ? "flex p-4 items-start gap-x-2" : "hidden"}>
      <PDFViewer className="w-auto h-full">
        {document}
      </PDFViewer>
      <button onClick={() => setActive(prev => !prev)}>X</button>
    </div>
  );
}
