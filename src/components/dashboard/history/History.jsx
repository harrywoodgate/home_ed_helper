import { downloadPdf } from "../../../utils/downloadPdf";
import { previewPdf } from "../../../utils/previewPdf";
import { useOutletContext } from "react-router";
import { fetchBlob } from "../../../utils/fetchBlob";

export default function History() {
  const {history, loading, deleteHistory} = useOutletContext();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">History</h1>
      {loading ? <div>Loading...</div> : ""}
      {history.length === 0 && !loading ? (
        <div>Oops looks like you havent uploaded anything yet!</div>
      ) : (
        history.map((report) => (
          <div className="flex gap-x-2 justify-between mt-1" key={report.id}>
            <div
              onClick={async () => {
                const blob = await fetchBlob(report.file_path);
                previewPdf(blob);
              }}
              className="cursor-pointer font-medium text-indigo-900 underline"
            >
              {report.file_name.replace(/-/, " - ")}
            </div>
            <div className="flex gap-x-2">
              <button
                onClick={() => downloadPdf(report.file_path, report.file_name)}
              >
                Download
              </button>
              <button onClick={() => deleteHistory(report.file_path)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
