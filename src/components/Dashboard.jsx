import { Link } from "react-router";

export default function Dashboard() {
    return (
        <div className="flex flex-col gap-y-3 justify-center items-center min-h-screen">
            <Link to="/generator">Generator</Link>
        </div>

    )
}