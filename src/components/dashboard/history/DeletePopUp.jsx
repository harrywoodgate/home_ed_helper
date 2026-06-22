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
          <div className="bg-red-100 rounded-full w-14 h-14 flex items-center justify-center mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-7 fill-red-500"
            >
              <title>trash-can-outline</title>
              <path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
            </svg>
          </div>
          <p className="font-bold text-2xl">Are you sure?</p>
          <p className="text-secondary_text text-center text-xs">
            This will permanently delete the "{deleteFile.fileName}" report.
            This action cannot be undone.
          </p>
          <div className="flex gap-x-2 mt-4">
            <button
              className="border-border border-2 rounded-md py-1 w-[120px]"
              onClick={() => setDeleteFile(false)}
            >
              Cancel
            </button>
            <button
              className="bg-red-500 text-white rounded-md w-[120px]"
              onClick={() => {
                deleteHistory(deleteFile.filePath);
                setDeleteFile(false);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
