export interface UserLoging {
  useremail: string
  password: string
  redirectTo?: string
}

export interface User {
  id: number
  name: string
  email: string
  password: string
  rol: string
}
