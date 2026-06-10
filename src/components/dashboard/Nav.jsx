import { Link } from "react-router"

export default function Nav() {
    return (
        <nav className="border-r-2 border-black p-3 flex flex-col gap-y-1">
            <Link to="generator">Generator</Link>
            <Link to="history">History</Link>
        </nav>
    )
}