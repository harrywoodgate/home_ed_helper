import { Link } from "react-router";
import { useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";

export default function Nav({ selected, setSelected }) {
  const selectedStyling =
    "font-medium bg-background w-full rounded-md p-3 text-xs text-secondary";
  const unselectedStyling = "font-medium w-full rounded-md p-3 text-xs";

  const navigate = useNavigate();

  async function logout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <nav className="py-6 px-4 flex flex-col row-start-1 row-end-3 bg-white items-start justify-between">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center -ml-3">
          <img
            src="../../../src/img/logo.png"
            alt="logo"
            className="w-[45px]"
          />
          <h2 className="text-lg font-semibold">Home Ed Helper</h2>
        </div>
        <Link
          to="generator"
          className={
            selected === "Generator"
              ? `${"mt-8"} ${selectedStyling}`
              : `${"mt-8"} ${unselectedStyling}`
          }
          onClick={() => setSelected("Generator")}
        >
          Generator
        </Link>
        <Link
          to="history"
          className={
            selected === "History" ? selectedStyling : unselectedStyling
          }
          onClick={() => setSelected("History")}
        >
          History
        </Link>
      </div>
      <button onClick={logout} className="font-medium rounded-md p-3 text-xs w-full text-left">Logout</button>
    </nav>
  );
}
