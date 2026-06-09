import { useState } from "react"
import { supabase } from "../supabaseClient"
import { useNavigate, Link } from "react-router"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) return setError(error.message)
    navigate("/dashboard")
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-1">
      <h2  className="text-3xl font-bold">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col justify-center items-center">
        <div className="flex gap-x-2">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button className="w-min">Login</button>
      </form>
      {error && <p>{error}</p>}
      <Link to="signup">Create an account</Link>
    </div>
  )
}
