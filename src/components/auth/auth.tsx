import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./auth.css"
import { loginUserAction } from "../../redux/slices/users/userSlice"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import type { RootState } from "../../redux/store/store"
import UserNavbar from "../navbar/userNavbar"
// useAppDispatch
//define interface

interface AuthFormProps {
  email: string
  password: string
  // handleSubmit: (e: FormEvent) => void
}

const AuthPage = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { userAuth } = useAppSelector((state: RootState) => state?.users)

  useEffect(() => {
    if (userAuth) {
      navigate("/know-your-leader") // Redirect to dashboard on successful login
    }
  }, [userAuth, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData: AuthFormProps = { email, password }

    try {
      dispatch(loginUserAction(formData))
    } catch (error) {
      console.error("Failed to login:", error)
    }
  }

  return (
    <div>
      {" "}
      <UserNavbar />
      <div className="loginPage_cont">
        <div className="container">
          <div className="heading">Sign In</div>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="email"
              required
              name="email"
              id="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              className="input"
              required
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <span className="forgot-password">
              <a href="#s">Forgot Password ?</a>
            </span>
            <input className="login-button" type="submit" value="Sign In" />
          </form>
          <div className="social-account-container">
            <span className="title">Or Sign in with</span>
            <div className="social-accounts">{/* Social buttons */}</div>
          </div>
          <span className="agreement">
            <a href="#s">Learn user licence agreement</a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
