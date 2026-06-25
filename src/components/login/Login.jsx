import LoginCard from "./LoginCard";

export default function Login() {

  return (
    <div className="flex">
    <div className="w-[45%]"></div>
    <div className="flex flex-col justify-center items-center min-h-[100vh] gap-y-4 w-[55%] bg-white py-4">
      <LoginCard />
    </div>
    </div>
  );
}
