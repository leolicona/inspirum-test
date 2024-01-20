import { Navigate, Outlet } from 'react-router-dom'

interface Props {
  user: {
    id: number
    name: string
    email: string
    rol: string
  } | null
  children?: React.ReactNode
  redirectTo?: string
}

function PrivateRoute ({ user, children, redirectTo = '/loging' }: Props): JSX.Element {
  if (user === null) {
    return <Navigate to={redirectTo} />
  }
  return <> children ? { children } : <Outlet/> </>
}

export default PrivateRoute
