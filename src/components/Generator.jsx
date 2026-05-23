import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./Document";
import { useImageUpload } from "../hooks/useImageUpload";

export default function Generator() {
  const [input, setInput] = useState("");

  const { imageBase64, handleFileChange } = useImageUpload();

  return (
    <div className="flex flex-col gap-y-3 justify-center items-center h-screen">
      <h1>I can be a generator or a record player</h1>
      <input
        type="text"
        className="border-black border-2"
        onChange={(e) => setInput(e.target.value)}
      />
      <label className="cursor-pointer border-black border-2 p-1">
        Select File
        <input type="file" accept="image/*" onChange={handleFileChange} className="hidden"/>
      </label>
      {imageBase64 && <img src={imageBase64} className='w-24 h-24' alt="preview"/>}
      <PDFDownloadLink
        document={<MyDocument input={input} image={imageBase64} />}
        fileName="firstdocument.pdf"
      >
        {({ loading }) => (loading ? "Generating..." : "Download PDF")}
      </PDFDownloadLink>
    </div>
  );
}
