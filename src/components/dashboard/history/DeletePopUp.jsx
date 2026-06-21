import { useOutletContext } from "react-router";

export default function DeletePopUp({ deleteFile, setDeleteFile }) {
  const { deleteHistory } = useOutletContext();

  return (
    <>
      <div
        className={
          deleteFile
            ? "fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center"
            : "hidden"
        }
      >
        <div className="bg-white w-[400px] flex flex-col items-center px-8 py-6 rounded-lg gap-y-2">
            <p className="font-bold text-2xl">Are you sure?</p>
            <p className="text-secondary_text text-center text-sm">This will permanently delete the "{deleteFile.fileName}" report. This action cannot be undone.</p>
            <div className="flex gap-x-2 mt-4">
                <button className="border-border border-2 rounded-md py-1 w-[120px]" onClick={() => setDeleteFile(false)}>Cancel</button>
                <button className="bg-red-500 text-white rounded-md w-[120px]" onClick={() => {deleteHistory(deleteFile.filePath); setDeleteFile(false)}}>Delete</button>
            </div>
        </div>
      </div>
    </>
  );
}
