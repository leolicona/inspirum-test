import { useState } from 'react'
import InputText from '../input/InputText'
import Button from '../button/Button'
import useAuth from '../../hooks/useAuth'
import type { ChangeEventHandler, FormEventHandler } from 'react'
import type { UserLoging } from '../../types/user.model'

function Loging (): JSX.Element {
  const { login, logout, user } = useAuth()

  const [logingData, setUserLoging] = useState<UserLoging>({
    useremail: '',
    password: ''
  })

  const handleOnchange: ChangeEventHandler<HTMLInputElement> = (e): void => {
    const { name, value } = e.target
    setUserLoging({ ...logingData, [name]: value })
  }

  const handelSubmit: FormEventHandler<HTMLFormElement> = (e): void => {
    e.preventDefault()
    if (user === null) {
      login({
        useremail: logingData.useremail,
        password: logingData.password
      })
    } else {
      logout()
    }
  }

  return (
    <form onSubmit={handelSubmit} className="loging">
      <InputText
        label="Usuario"
        type="text"
        placeholder="Usuario"
        name='useremail'
        value={logingData.useremail}
        onChange={handleOnchange}
      />
      <InputText
        label="Contraseña"
        type="password"
        placeholder="Contraseña"
        name='password'
        value={logingData.password}
        onChange={handleOnchange}
      />
      <Button>
        {user === null ? 'loging' : 'logout '}
      </Button>
    </form>
  )
}

export default Loging
