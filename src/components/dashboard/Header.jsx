import { useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";

export default function Header() {
  const navigate = useNavigate();

  async function logout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="flex justify-center py-8">
      <div className="col-start-2 col-end-3 flex justify-between w-[1000px] items-center">
        <div>
          <h1 className="text-2xl font-bold">Home Ed Helper</h1>
          <p className="text-secondary_text mt-1">
            Create daily learning reports with ease
          </p>
        </div>
        <button onClick={logout} className="flex gap-x-2 bg-white h-min px-4 py-2 rounded-lg text-sm items-center font-medium border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)] hover:bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-secondary_text">
            <title>logout</title>
            <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" />
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
