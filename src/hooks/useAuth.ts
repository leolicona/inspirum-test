import type { UserLoging, User } from '../types/user.model'
import { useAppDispatch, useAppSelector } from '../store/store'
import { setLoggedUser } from '../store/auth/slice'

interface Login {
  user: User | null
  login: ({ useremail, password }: UserLoging) => void
  logout: () => void
}

// TODO: Simular respuesta de API
const users: User[] = [
  {
    id: 1,
    name: 'Leo Licona',
    email: 'leolicona.dev@gmail.com',
    password: '123456',
    rol: 'admin'
  },
  {
    id: 2,
    name: 'David Licona',
    email: 'davidlicona.dev@gmail.com',
    password: '123456',
    rol: 'admin'
  }

]

function useAuth (): Login {
  const dispatch = useAppDispatch()

  // const [user, setUser] = useState<User | null>(null)
  const loggedUser = useAppSelector((state) => state.auth.user)

  const login = ({ useremail, password }: UserLoging): void => {
    const userLogged = users.find((user: User): boolean => user.email === useremail && user.password === password)
    if (userLogged !== undefined) {
      dispatch(setLoggedUser(userLogged))
    } else {
      dispatch(setLoggedUser(null))
    }
  }

  const logout = (): void => {
    dispatch(setLoggedUser(null))
  }

  return {
    user: loggedUser,
    login,
    logout
  }
}

export default useAuth
