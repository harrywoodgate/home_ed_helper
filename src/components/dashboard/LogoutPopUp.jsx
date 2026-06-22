import { useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";

export default function LogoutPopUp({ active, setActive }) {
  const navigate = useNavigate();

  async function logout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <>
      <div
        className={
          active
            ? "fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex justify-center items-center"
            : "hidden"
        }
      >
        <div className="bg-white w-[400px] flex flex-col items-center px-8 py-6 rounded-lg gap-y-2">
          <div className="bg-indigo-50 rounded-full w-16 h-16 flex items-center justify-center mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 fill-secondary"
            >
              <title>logout</title>
              <path d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12M4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z" />
            </svg>
          </div>
          <p className="font-bold text-xl text-center">
            Are you sure you want to log out?
          </p>
          <p className="text-secondary_text text-center text-sm px-8">
            You'll need to log in again to access your reports and account
          </p>
          <div className="flex gap-x-2 mt-4">
            <button
              className="border-border border-2 rounded-md py-1 w-[120px]"
              onClick={() => setActive(false)}
            >
              Cancel
            </button>
            <button
              className="bg-secondary text-white rounded-md w-[120px]"
              onClick={() => {
                setActive(false);
                logout();
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
