import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'
import type { UserLoging } from '../types/user.model'

interface HookReturn {
  doLogin: (arg: UserLoging) => void
}

const useLogin = (): HookReturn => {
  const { login, logout, user } = useAuth()
  const navigate = useNavigate()

  const doLogin = ({ useremail, password, redirectTo }: UserLoging): void => {
    if (user === null) {
      login({
        useremail,
        password
      })
      if (redirectTo !== undefined) {
        navigate(redirectTo)
      }
    } else {
      logout()
    }
  }

  return {
    doLogin
  }
}

export default useLogin
