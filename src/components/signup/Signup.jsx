import SignUpCard from "./SignupCard";
import SingupBrandingCard from "./SignupBrandingCard";

export default function Signup() {

  return (
    <div className="flex">
      <div className="hidden w-[45%] bg-violet-50 sm:flex justify-start px-10 lg:pl-[60px]">
        <SingupBrandingCard />
      </div>
      <div className="flex flex-col justify-center items-center min-h-[100vh] gap-y-4 w-full sm:w-[55%] bg-white px-4 py-4">
        <SignUpCard />
      </div>
    </div>
  );
}
