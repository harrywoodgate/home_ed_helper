import { Link } from "react-router";
import logo from './img/logo_grey.png' 

function App() {

  return (
    <div className="flex flex-col gap-y-2 sm:gap-y-3 justify-center items-center h-[100svh]">
      <div className="overflow-hidden">
        <div className="flex items-center animate-app_slide_in pr-4 sm:pr-6">
          <img src={logo} alt="" className="w-[55px] pb-[1px] sm:w-[100px] sm:h-[100px] sm:pt-[5px] pr-1"/>
          <h1 className="text-2xl sm:text-5xl font-bold">Home Ed Helper</h1>
        </div>
      </div>
      <Link to="signup" className="bg-secondary text-xs sm:text-base text-white rounded-md px-6 sm:px-10 py-1 sm:py-2 font-semibold sm:mt-2 animate-pop">Get started</Link>
      <p className="text-secondary_text text-xs sm:text-base">Already have an account? {""}
        <Link to="login" className="text-secondary underline">login</Link>
      </p>
    </div>
  );
}

export default App;
