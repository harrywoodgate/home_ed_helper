import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { useNavigate, Link } from "react-router";
import logoTwo from '../../img/logo_two.png'

export default function LoginCard() {
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
    navigate("/dashboard/generator");
  }

  return (
    <div className="bg-white p-8 lg:p-12 flex flex-col items-center justify-center rounded-xl gap-y-2 lg:gap-y-4 w-full lg:w-[500px] border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)]">
      <div className="bg-indigo-50 w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] flex items-center justify-center rounded-full">
        <img
          src={logoTwo}
          alt="logo"
          className="w-[15px] w-[25px] h-[25px] lg:w-[30px] lg:h-[30px]"
        />
      </div>
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-xl lg:text-2xl font-bold">Welcome Back</h2>
        <p className="text-secondary_text text-xs lg:text-sm mt-1 text-center">
          Sign in to your account to continue
        </p>
      </div>
      <form onSubmit={handleLogin} className="flex flex-col gap-y-2 w-full">
        <label htmlFor="email" className="font-bold text-xs">
          Email address
        </label>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-3 lg:w-5 absolute top-2 lg:top-3 left-3 lg:left-4 pt-[3px]"
          >
            <title>email</title>
            <path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" />
          </svg>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white p-2 lg:p-4 pl-8 lg:pl-12 rounded-lg text-xs placeholder-secondary_text focus:outline-none border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)] mb-4 w-full"
          />
        </div>
        <label htmlFor="password" className="font-bold text-xs">
          Password
        </label>
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-3 lg:w-5 absolute top-2 lg:top-3 left-3 lg:left-4 pt-[3px]"
          >
            <title>password</title>
            <path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />
          </svg>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white p-2 lg:p-4 pl-8 lg:pl-12 rounded-lg text-xs placeholder-secondary_text focus:outline-none border shadow-[0_1px_3px_rgba(15,23,42,0.05),_0_8px_24px_rgba(15,23,42,0.04)] mb-4 w-full"
          />
        </div>
        <button className="bg-secondary w-full rounded-lg py-2 lg:py-3 text-sm lg:text-base text-white mb-2 lg:mb-4 relative">
          <span>Sign In</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 lg:w-5 fill-white absolute right-3 bottom-2 lg:right-3 lg:bottom-3 pb-[2px]">
            <title>login</title>
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
          </svg>
        </button>
      </form>
      {error && <p className="text-xs lg:text-sm">{error}</p>}
      <div className="w-full h-0.5 bg-gray-200 mt-2 mb-4 flex justify-center items-center"><span className="bg-white px-3 text-sm text-secondary_text">or</span></div>
      <p className="text-xs lg:text-sm">
        Don't have an account?{" "}
        <Link to="/signup" className="text-secondary underline">
          Click here
        </Link>
      </p>
    </div>
  );
}
