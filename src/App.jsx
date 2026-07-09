import { Link } from "react-router";
import logo from './img/logo.png' 

function App() {

  return (
    <div className="flex flex-col gap-y-2 sm:gap-y-3 justify-center items-center h-screen">
      <div className="overflow-hidden">
        <div className="flex items-center sm:gap-x-2 animate-slide_in">
          <img src={logo} alt="" className="w-[45px] sm:w-[72px] sm:h-[72px]"/>
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
