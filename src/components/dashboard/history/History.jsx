import { useFetchHistory } from "../../../hooks/useFetchHistory";
import { downloadPdf } from "../../../utils/downloadPdf";

export default function History() {
  const { history } = useFetchHistory();

  return (
    <div className="p-4">
      <h1 className="text-2xl">History</h1>
      {history.length > 0 &&
        history.map((report) => (
          <div className="flex gap-x-2">
            <div>{report.file_name.replace(/-/, " - ")}</div>
            <button onClick={() => downloadPdf(report.file_path, report.file_name)}>
              Download
            </button>
          </div>
        ))}
    </div>
  );
}
