import { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./Document";
import { useImageUpload } from "../../../hooks/useImageUpload";
import Preview from "../Preview";
import GenForm from "./GenForm";

export default function Generator() {
  const [subject, setSubject] = useState("");
  const [summary, setSummary] = useState("");
  const [preview, setPreview] = useState(false);
  const { images, handleFileChange } = useImageUpload();

  return (
    <>
      <div
        className={preview ? "hidden" : "flex flex-col gap-y-3 p-4 items-start"}
      >
        <h1 className="text-2xl">Generator</h1>
        <GenForm
          setSubject={setSubject}
          setSummary={setSummary}
          images={images}
          handleFileChange={handleFileChange}
        />
        <PDFDownloadLink
          document={
            <MyDocument subject={subject} summary={summary} images={images} />
          }
          fileName="firstdocument.pdf"
          className="w-32"
        >
          {({ loading }) => (loading ? "Generating..." : "Download PDF")}
        </PDFDownloadLink>
        <button onClick={() => setPreview((prev) => !prev)}>Preview</button>
      </div>
      <Preview
        active={preview}
        setActive={setPreview}
        document={
          <MyDocument subject={subject} summary={summary} images={images} />
        }
      ></Preview>
    </>
  );
}
