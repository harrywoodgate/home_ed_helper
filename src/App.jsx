import { Link } from "react-router";

function App() {
  return (
    <div className="flex flex-col gap-y-3 justify-center items-center h-screen">
      <h1 className="text-3xl font-bold">Home Ed Helper</h1>
      <Link to="login">Log in</Link>
    </div>
  );
}

export default App;
