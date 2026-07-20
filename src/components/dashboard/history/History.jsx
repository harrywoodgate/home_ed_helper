import { useOutletContext } from "react-router";
import { useState } from "react";
import DeletePopUp from "./DeletePopUp";
import EmptyHistoryPage from "./EmptyHistoryPage";
import WeekSelector from "./WeekSelector";
import HistoryReport from "./HistoryReport";
import PageSelector from "./PageSelector";

export default function History() {
  const { history, loading } = useOutletContext();
  const [deleteFile, setDeleteFile] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  const numberOfPages = Math.trunc(history.length / 5 + 1);
  const endNumber = 5 * pageNumber;
  const startNumber = endNumber - 5;
  const currentPage = history.slice(startNumber, endNumber);

  return (
    <div className="flex w-full justify-center pb-8 px-4 sm:px-6">
      <div className="w-full lg:w-[1000px] flex flex-col gap-y-2">
        <div className="w-full flex items-center justify-between mb-4">
          <h1 className="text-xl sm:text-2xl font-semibold">History</h1>
          <WeekSelector />
        </div>
        {loading ? <div>Loading...</div> : ""}
        {history.length === 0 && !loading ? (
          <EmptyHistoryPage />
        ) : (
          <>
            {currentPage.map((report) => (
              <HistoryReport report={report} setDeleteFile={setDeleteFile} />
            ))}
            <PageSelector
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              numberOfPages={numberOfPages}
            />
          </>
        )}
      </div>
      <DeletePopUp deleteFile={deleteFile} setDeleteFile={setDeleteFile} />
    </div>
  );
}
