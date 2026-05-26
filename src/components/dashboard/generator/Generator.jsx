import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./Document";
import { useImageUpload } from "../../../hooks/useImageUpload";
import Preview from "../Preview";
import GenForm from "./GenForm";

export default function Generator() {
  const [input, setInput] = useState("");
  const [preview, setPreview] = useState(false);
  const { images, handleFileChange } = useImageUpload();

  return (
    <div className="flex flex-col gap-y-3 p-4">
      <h1 className="text-2xl">Generator</h1>
      <GenForm setInput={setInput} images={images} handleFileChange={handleFileChange} />
      <PDFDownloadLink
        document={<MyDocument input={input} images={images} />}
        fileName="firstdocument.pdf"
      >
        {({ loading }) => (loading ? "Generating..." : "Download PDF")}
      </PDFDownloadLink>
      <button onClick={() => setPreview(prev => !prev)}>Preview</button>
      <Preview active={preview} document={<MyDocument input={input} images={images} />}></Preview>
    </div>
  );
}
