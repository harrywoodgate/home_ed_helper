import { useState } from "react"
import { supabase } from "../supabaseClient"
import { useNavigate, Link } from "react-router"

export default function Signup() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleSignup(e) {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({
      email,
      password,
    })
    if (error) return setError(error.message)
    navigate("/login")
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-1">
      <h2 className="text-3xl font-bold">Sign Up</h2>
      <form onSubmit={handleSignup} className="flex flex-col justify-center">
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
        <button>Sign Up</button>
      </form>
      {error && <p>{error}</p>}
      <Link to="/login">Already have an account?</Link>
    </div>
  )
}
