import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "./Document";
import GenForm from "./GenForm";
import { previewPdf } from "../../../utils/previewPdf";
import { pdf } from "@react-pdf/renderer";
import { useOutletContext } from "react-router";

export default function Generator() {
  const {
    addHistory,
    resetImages,
    images,
    subject,
    summary,
    setSubject,
    setSummary,
  } = useOutletContext();

  const document = (
    <MyDocument subject={subject} summary={summary} images={images} />
  );
  const date = new Date().toLocaleDateString("en-GB");
  const fileName = `${subject}-${date}`;

  return (
    <>
      <div className="flex flex-col gap-y-3 p-4 items-start">
        <h1 className="text-2xl font-semibold">Generator</h1>
        <GenForm />
        <PDFDownloadLink
          document={document}
          fileName={`${fileName}.pdf`}
          className="w-32"
          onClick={() => {
            setSummary("");
            setSubject("");
            resetImages();
          }}
        >
          {({ loading }) => (loading ? "Generating..." : "Download PDF")}
        </PDFDownloadLink>
        <button
          onClick={async () => {
            const blob = await pdf(document).toBlob();
            previewPdf(blob);
          }}
        >
          Preview
        </button>
        <button
          onClick={() => {
            addHistory(document, fileName);
            setSummary("");
            setSubject("");
            resetImages();
          }}
        >
          Save pdf
        </button>
      </div>
    </>
  );
}
