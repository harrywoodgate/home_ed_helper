import { useNavigate } from "react-router";
import { supabase } from "../../supabaseClient";

export default function Header() {
  const navigate = useNavigate();

  async function logout() {
    await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="col-start-1 col-end-3 flex justify-end p-4 border-b-2 border-black">
      <button onClick={logout}>Logout</button>
    </div>
  );
}
