import { useState } from 'react'
import type { UserLoging, User } from '../types/user.model'

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
  const [user, setUser] = useState<User | null>(null)

  const login = ({ useremail, password }: UserLoging): void => {
    const userLogged = users.find((user: User): boolean => user.email === useremail && user.password === password)

    if (userLogged !== undefined) {
      setUser(userLogged)
    } else {
      setUser(null)
    }
  }

  const logout = (): void => {
    setUser(null)
  }

  return {
    user,
    login,
    logout
  }
}

export default useAuth
