import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { supabase } from "../../supabaseClient";

export default function SignUpCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    if (confirmPassword !== password) {
      setError("Passwords do not match!");
      return;
    }
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) return setError(error.message);
    navigate("/login");
  }

  return (
    <div className="bg-white p-12 flex flex-col items-center justify-center rounded-xl gap-y-4 w-[500px] border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)]">
      <div className="bg-indigo-50 w-[70px] h-[70px] flex items-center justify-center rounded-full">
        <img
          src="../../../src/img/logo_two.png"
          alt="logo"
          className="w-[30px] h-[30px]"
        />
      </div>
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-2xl font-bold">Create your account</h2>
        <p className="text-secondary_text text-sm mt-1">
          Join Home Ed Helper and get started today
        </p>
      </div>
      <form onSubmit={handleSignup} className="flex flex-col gap-y-2 w-full">
        <label htmlFor="email" className="font-bold text-xs">
          Email address
        </label>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 absolute top-3 left-4 pt-[3px]"
          >
            <title>email-outline</title>
            <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
          </svg>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white p-4 pl-12 rounded-lg text-xs placeholder-secondary_text focus:outline-none border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)] mb-4 w-full"
          />
        </div>
        <label htmlFor="password" className="font-bold text-xs">
          Password
        </label>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 absolute top-3 left-4 pt-[3px]"
          >
            <title>lock-outline</title>
            <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
          </svg>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white p-4 pl-12 rounded-lg text-xs placeholder-secondary_text focus:outline-none border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)] mb-4 w-full"
          />
        </div>
        <label htmlFor="password" className="font-bold text-xs">
          Confirm Password
        </label>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-5 absolute top-3 left-4 pt-[3px]"
          >
            <title>lock-outline</title>
            <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
          </svg>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-white p-4 pl-12 rounded-lg text-xs placeholder-secondary_text focus:outline-none border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)] mb-4 w-full"
          />
        </div>
        <button className="bg-secondary w-full rounded-md py-3 text-white mb-4">
          Create account
        </button>
      </form>
      {error && <p className="text-sm">{error}</p>}
      <div className="w-full h-0.5 bg-gray-200 mt-2 mb-4 flex justify-center items-center">
        <span className="bg-white px-3 text-sm text-secondary_text">or</span>
      </div>
      <p className="text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-secondary underline">
          Log in
        </Link>
      </p>
    </div>
  );
}
