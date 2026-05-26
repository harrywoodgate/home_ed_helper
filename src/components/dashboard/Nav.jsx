import { Link } from "react-router"

export default function Nav() {
    return (
        <nav className="border-r-2 border-black p-3">
            <Link to="generator">Generator</Link>
        </nav>
    )
}