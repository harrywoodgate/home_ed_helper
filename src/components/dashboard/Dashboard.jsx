import { Outlet } from "react-router";
import Nav from "./Nav";
import Header from "./Header";
import { useManageHistory } from "../../hooks/useManageHistory";

export default function Dashboard() {
  const { history, loading, deleteHistory, addHistory } = useManageHistory();

  return (
    <div className="grid grid-cols-[1fr_3fr] min-h-screen grid-rows-[auto_1fr]">
      <Header />
      <Nav />
      <Outlet context={{history, loading, deleteHistory, addHistory}}/>
    </div>
  );
}
