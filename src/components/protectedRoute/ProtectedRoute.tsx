import { Navigate } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import type { RootState } from "../../redux/store/store"

interface ProtectedRouteProps {
  children: JSX.Element
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { userAuth } = useAppSelector((state: RootState) => state.users)
  if (!userAuth) {
    return <Navigate to="/login" />
  }
  return children
}

export default ProtectedRoute
