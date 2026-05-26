import { Outlet } from "react-router";
import Nav from "./Nav";
import Header from "./Header";

export default function Dashboard() {
    return (
        <div className="grid grid-cols-[1fr_3fr] min-h-screen grid-rows-[auto_1fr]">
            <Header />
            <Nav />
            <Outlet />
        </div>

    )
}