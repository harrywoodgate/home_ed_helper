import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./Document";
import { useImageUpload } from "../../../hooks/useImageUpload";
import GenForm from "./GenForm";
import { uploadPdf } from "../../../utils/uploadPdf";
import { previewPdf } from "../../../utils/previewPdf";
import { pdf } from "@react-pdf/renderer";

export default function Generator() {
  const [subject, setSubject] = useState("");
  const [summary, setSummary] = useState("");
  const { images, addImage, deleteImage } = useImageUpload();
  const document = (
    <MyDocument subject={subject} summary={summary} images={images} />
  );
  const date = new Date().toLocaleDateString("en-GB");
  const fileName = `${subject}-${date}`;

  return (
    <>
      <div
        className="flex flex-col gap-y-3 p-4 items-start"
      >
        <h1 className="text-2xl">Generator</h1>
        <GenForm
          setSubject={setSubject}
          setSummary={setSummary}
          images={images}
          addImage={addImage}
          deleteImage={deleteImage}
        />
        <PDFDownloadLink
          document={document}
          fileName={`${fileName}.pdf`}
          className="w-32"
        >
          {({ loading }) => (loading ? "Generating..." : "Download PDF")}
        </PDFDownloadLink>
        <button onClick={async () => {
          const blob = await pdf(document).toBlob();
          previewPdf(blob)}}>Preview</button>
        <button onClick={() => uploadPdf(document, fileName)}>Save pdf</button>
      </div>
    </>
  );
}
