import { useState } from 'react'
import InputText from '../input/InputText'
import InputPass from '../inputPass/InputPass'
import Button from '../button/Button'
import type { ChangeEventHandler, FormEventHandler } from 'react'
import type { UserLoging } from '../../types/user.model'
import style from './loginStyles.module.css'

interface Props {
  submit: (arg: UserLoging) => void
  isLogin: boolean
}

function Login ({ submit, isLogin }: Props): JSX.Element {
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
    submit(logingData)
  }

  return (
    <form onSubmit={handelSubmit} className={style.form}>
      <InputText
        type="text"
        placeholder="Usuario"
        name="useremail"
        value={logingData.useremail}
        onChange={handleOnchange}
        required
      > Usuario
     </InputText>

      <InputPass
        placeholder="Contraseña"
        name="password"
        value={logingData.password}
        onChange={handleOnchange}
        minLength={6}
        pattern="[0-9a-fA-F]{4,8}"
        title="La contraseña debe tener entre 4 y 8 caracteres hexadecimales"
        required
      >
        Contraseña
      </InputPass>
      <Button>{ isLogin ? 'Loging' : 'Logout '}</Button>
    </form>
  )
}

export default Login
