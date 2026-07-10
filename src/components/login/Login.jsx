import LoginCard from "./LoginCard";
import LoginBrandingCard from "./LoginBrandingCard";

export default function Login() {
  return (
    <div className="flex">
      <div className="hidden w-[45%] bg-violet-50 sm:flex xl:justify-center px-10 lg:pl-[60px]">
        <LoginBrandingCard />
      </div>
      <div className="flex flex-col justify-center items-center min-h-[100svh] sm:min-h-screen sm:gap-y-4 w-full sm:w-[55%] bg-white px-4 py-4">
        <LoginCard />
      </div>
    </div>
  );
}
