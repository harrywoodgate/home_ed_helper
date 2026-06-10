import { useFetchHistory } from "../../../hooks/useFetchHistory";

export default function History() {

    const {history} = useFetchHistory();

  return (
    <div className="p-4">
      <h1 className="text-2xl">History</h1>
      {history.length > 0 && history.map((report) => (
        <div>{report.uploaded_at}</div>
      ))}
    </div>
  );
}
