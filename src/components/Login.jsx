import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, Link } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return setError(error.message);
    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-4">
      <h2 className="text-3xl font-bold">Login</h2>
      <div className="bg-white p-8 flex flex-col items-center justify-center rounded-xl gap-y-4">
        <form
          onSubmit={handleLogin}
          className="flex flex-col justify-center items-center gap-y-4"
        >
          <div className="flex gap-y-2 flex-col">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white border-2 border-gray-400 p-2 rounded-md text-gray-700 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white border-2 border-gray-400 p-2 rounded-md text-gray-700 focus:outline-none"
            />
          </div>
          <button className="bg-background w-full rounded-md p-2">Login</button>
        </form>
        {error && <p className="text-sm">{error}</p>}
        <div className="w-48 h-0.5 bg-gray-200 mt-2 mb-1"></div>
        <p className="text-sm">Don't have an account? <Link to="/signup" className="text-indigo-900 underline">Click here</Link>
        </p>
      </div>
    </div>
  );
}
