import { useManageHistory } from "../../../hooks/useManageHistory";
import { downloadPdf } from "../../../utils/downloadPdf";
import { previewPdf } from "../../../utils/previewPdf";
import { supabase } from "../../../supabaseClient";

export default function History() {
  const { history, loading, deleteHistory } = useManageHistory();

  return (
    <div className="p-4">
      <h1 className="text-2xl">History</h1>
      {loading ? <div>Loading...</div> : ""}
      {history.length === 0 && !loading ? (
        <div>Oops looks like you havent uploaded anything yet!</div>
      ) : (
        history.map((report) => (
          <div className="flex gap-x-2" key={report.id}>
            <div
              onClick={async () => {
                const blob = await fetchBlob(report.file_path);
                previewPdf(blob);
              }}
              className="cursor-pointer"
            >
              {report.file_name.replace(/-/, " - ")}
            </div>
            <button
              onClick={() => downloadPdf(report.file_path, report.file_name)}
            >
              Download
            </button>
            <button onClick={() => deleteHistory(report.file_path)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

async function fetchBlob(filepath) {
  const { data, error } = await supabase.storage
    .from("reports")
    .download(filepath);

  if (error) {
    console.error;
  }
  return data;
}
