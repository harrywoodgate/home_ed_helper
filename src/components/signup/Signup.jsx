import SignUpCard from "./SignupCard";
import SingupBrandingCard from "./SignupBrandingCard";

export default function Signup() {

  return (
    <div className="flex">
      <div className="w-[45%] bg-violet-50 flex justify-start pl-[60px]">
        <SingupBrandingCard />
      </div>
      <div className="flex flex-col justify-center items-center min-h-[100vh] gap-y-4 w-[55%] bg-white py-4">
        <SignUpCard />
      </div>
    </div>
  );
}
