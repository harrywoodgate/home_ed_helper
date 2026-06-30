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
      <h1 className="text-3xl font-bold animate-scaleX origin-left">Home Ed Helper</h1>
      <Link to="login">Log in</Link>
    </div>
  );
}

export default App;
