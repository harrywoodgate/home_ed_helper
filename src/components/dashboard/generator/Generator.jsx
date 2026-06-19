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
    date,
  } = useOutletContext();

  const [year, month, day] = date.split("-");
  const formattedDate = `${day}/${month}/${year}`;
  const fileName = `${subject}-${formattedDate}`;
  const document = (
    <MyDocument
      subject={subject}
      summary={summary}
      images={images}
      date={formattedDate}
    />
  );

  return (
    <div className="flex justify-center">
      <div className="flex flex-col px-6 py-8 gap-y-3 items-start w-[1000px] bg-white rounded-lg">
        <div>
          <h1 className="text-2xl font-semibold">Generator</h1>
          <h2 className="font-light">
            Fill in the details below to generate your report
          </h2>
        </div>
        <GenForm />
        <div className="flex w-full justify-end gap-x-2">
          <button
            onClick={async () => {
              const blob = await pdf(document).toBlob();
              previewPdf(blob);
            }}
            className="bg-white px-6 py-2 rounded-md font-medium text-xs border-border border-2"
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
            className="bg-secondary px-8 rounded-md font-medium text-white text-xs"
          >
            Save
          </button>
          <PDFDownloadLink
            document={document}
            fileName={`${fileName}.pdf`}
            className="bg-white px-6 py-2 rounded-md font-medium text-xs border-border border-2 flex items-center"
            onClick={() => {
              setSummary("");
              setSubject("");
              resetImages();
            }}
          >
            {({ loading }) => (loading ? "Generating..." : "Download")}
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
}
