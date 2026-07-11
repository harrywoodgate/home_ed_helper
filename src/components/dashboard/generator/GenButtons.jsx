import { PDFDownloadLink } from "@react-pdf/renderer";
import { previewPdf } from "../../../utils/previewPdf";
import { pdf } from "@react-pdf/renderer";
import { useOutletContext } from "react-router";
import { MyDocument } from "./Document";

export default function GenButtons() {
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
    <>
      <div className="flex flex-wrap w-full justify-end sm:justify-end gap-y-4 gap-x-2 sm:gap-x-4">
        <button
          onClick={async () => {
            const blob = await pdf(document).toBlob();
            previewPdf(blob);
          }}
          className="sm:w-auto bg-white py-2 px-4 sm:px-4 sm:py-3 rounded-md font-medium text-xs border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)] flex items-center justify-center gap-x-2 hover:bg-slate-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <title>eye-outline</title>
            <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
          </svg>
          <span className="hidden sm:block">Preview</span>
        </button>
        <button
          onClick={() => {
            addHistory(document, fileName);
          }}
          className="bg-secondary sm:w-auto py-2 px-4 sm:px-4 sm:py-3 rounded-md font-medium text-white text-xs flex items-center justify-center gap-x-2 hover:bg-indigo-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-white"
          >
            <title>content-save-outline</title>
            <path d="M17 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3M19 19H5V5H16.17L19 7.83V19M12 12C10.34 12 9 13.34 9 15S10.34 18 12 18 15 16.66 15 15 13.66 12 12 12M6 6H15V10H6V6Z" />
          </svg>
          <span className="hidden sm:block">Save</span>
        </button>
        <PDFDownloadLink
          document={document}
          fileName={`${fileName}.pdf`}
          className="bg-white sm:w-auto py-2 px-4 sm:px-4 sm:py-3 rounded-md font-medium text-xs border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)] flex items-center justify-center hover:bg-slate-50"
        >
          {({ loading }) => (
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4"
              >
                <title>tray-arrow-down</title>
                <path d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" />
              </svg>
              <span className="hidden sm:block">{loading ? "Preparing..." : "Download"}</span>
            </div>
          )}
        </PDFDownloadLink>
        <button
          onClick={async () => {
            setSummary("");
            setSubject("");
            resetImages();
          }}
          className="bg-white sm:w-auto py-2 px-4 sm:px-4 sm:py-3 rounded-md font-medium text-xs border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)] flex items-center justify-center gap-x-2 hover:bg-slate-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4">
            <title>refresh</title>
            <path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />
          </svg>
          <span className="hidden sm:block">New report</span>
        </button>
      </div>
    </>
  );
}
