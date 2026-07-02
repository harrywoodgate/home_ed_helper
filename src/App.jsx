import { Link } from "react-router";
import { useEffect } from "react";

function App() {
  // doesnt work in generator still
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();

    window.addEventListener("dragover", preventDefault);
    window.addEventListener("drop", preventDefault);

    return () => {
      window.removeEventListener("dragover", preventDefault);
      window.removeEventListener("drop", preventDefault);
    };
  }, []);

  return (
    <div className="flex flex-col gap-y-3 justify-center items-center h-screen">
      <div className="overflow-hidden w-[450px]">
        <div className="flex items-center gap-x-2 animate-slide_in">
          <img src="../src/img/logo.png" alt="" className="w-[72px] h-[72px]"/>
          <h1 className="text-5xl font-bold">Home Ed Helper</h1>
        </div>
      </div>
      <Link to="signup" className="bg-secondary text-white rounded-md px-10 py-2 font-semibold mt-2 animate-pop">Get started</Link>
      <p className="text-secondary_text">Already have an account? {""}
        <Link to="login" className="text-secondary underline">login</Link>
      </p>
    </div>
  );
}

export default App;
