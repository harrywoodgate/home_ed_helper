import { downloadPdf } from "../../../utils/downloadPdf";
import { previewPdf } from "../../../utils/previewPdf";
import { useOutletContext } from "react-router";
import { fetchBlob } from "../../../utils/fetchBlob";
import { useState } from "react";
import DeletePopUp from "./DeletePopUp";
import EmptyHistoryPage from "./EmptyHistoryPage";

export default function History() {
  const [deleteFile, setDeleteFile] = useState(false);
  const { history, loading } = useOutletContext();

  return (
    <div className="flex w-full justify-center pb-8 px-4 sm:px-6">
      <div className="w-full lg:w-[1000px] flex flex-col gap-y-2">
        <h1 className="text-2xl font-semibold mb-4">History</h1>
        {loading ? <div>Loading...</div> : ""}
        {history.length === 0 && !loading ? (
          <EmptyHistoryPage />
        ) : (
          history.map((report) => (
            <div
              className="flex flex-wrap px-6 py-4 sm:py-0 min-h-[106px] gap-x-2 items-center justify-between mt-1 bg-white rounded-2xl border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)] gap-y-4"
              key={report.id}
            >
              <div className="flex items-center sm:gap-x-6 w-full sm:w-auto">
                <h3 className="font-semibold w-[50%] sm:w-[130px] text-center">
                  {report.file_name.split("-")[0]}
                </h3>
                <div className="h-[50px] w-[2px] bg-border"></div>
                <p className="w-[50%] sm:w-auto text-center">{report.file_name.split("-")[1]}</p>
              </div>
              <div className="flex w-full sm:w-auto justify-center flex-wrap gap-x-6 gap-y-4">
                <button
                  className="flex items-center gap-x-2 sm:gap-x-3 text-sm"
                  onClick={async () => {
                    const blob = await fetchBlob(report.file_path);
                    previewPdf(blob);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <title>eye-outline</title>
                    <path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" />
                  </svg>
                  <span>Preview</span>
                </button>
                <button
                  onClick={() =>
                    downloadPdf(report.file_path, report.file_name)
                  }
                  className="flex items-center gap-x-2 sm:gap-x-3 text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <title>tray-arrow-down</title>
                    <path d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" />
                  </svg>
                  <span>Download</span>
                </button>
                <button
                  className="flex items-center gap-x-2 sm:gap-x-3 text-sm text-red-500"
                  onClick={() => {
                    setDeleteFile({
                      filePath: report.file_path,
                      fileName: report.file_name,
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-red-500"
                  >
                    <title>trash-can-outline</title>
                    <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                  </svg>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <DeletePopUp deleteFile={deleteFile} setDeleteFile={setDeleteFile}/>
    </div>
  );
}
