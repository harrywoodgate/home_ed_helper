import { useNavigate } from "react-router";
import { useOutletContext } from "react-router";

export default function EmptyHistoryPage() {
  const navigate = useNavigate();
  const { setSelected } = useOutletContext();

  return (
    <div className="h-full flex items-center justify-center flex-col">
      <img
        src="../../../src/img/empty_history_graphic.png"
        alt="graphic"
        className="w-[300px] mr-[15px]"
      />
      <h2 className="text-3xl font-semibold mb-2">No reports yet</h2>
      <p className="text-secondary_text text-sm">
        You havent upload or generated any reports yet.
      </p>
      <p className="text-secondary_text text-sm">
        Get started by creating your first report.
      </p>
      <button
        onClick={() => {
          setSelected("Generator");
          navigate("/dashboard/generator");
        }}
        className="bg-secondary px-6 py-2 rounded-md font-medium text-white text-sm flex items-center justify-center gap-x-2 hover:bg-indigo-700 mt-5"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-w fill-white">
          <title>create-report</title>
          <path d="M23 18H20V15H18V18H15V20H18V23H20V20H23M6 2C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H13.81C13.45 21.38 13.2 20.7 13.08 20H6V4H13V9H18V13.08C18.33 13.03 18.67 13 19 13C19.34 13 19.67 13.03 20 13.08V8L14 2M8 12V14H16V12M8 16V18H13V16Z" />
        </svg>
        <span>Create your first report</span>
      </button>
    </div>
  );
}
