import { useState } from 'react'
import InputText from '../input/InputText'
import Button from '../button/Button'
import useAuth from '../../hooks/useAuth'
import type { ChangeEventHandler, FormEventHandler } from 'react'
import type { UserLoging } from '../../types/user.model'
import { useNavigate } from 'react-router-dom'

import style from './loginStyles.module.css'
import visibility_on from '../../assets/visibility_pass_on.svg'
import visibility_off from '../../assets/visibility_pass_off.svg'

function Login (): JSX.Element {
  const { login, logout, user } = useAuth()
  const navigate = useNavigate()

  const [logingData, setUserLoging] = useState<UserLoging>({
    useremail: '',
    password: ''
  })

  const [isVisible, setVisible] = useState<boolean>(false)

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
      navigate('../dashboard')
    } else {
      logout()
    }
  }

  return (
    <form onSubmit={handelSubmit} className={style.form}>
      <InputText
        type="text"
        placeholder="Usuario"
        name="useremail"
        value={logingData.useremail}
        onChange={handleOnchange}
        minLength={8}
        required
      > Usuario
     </InputText>

      <InputText
        type={ isVisible ? 'text' : 'password'}
        placeholder="Contraseña"
        name="password"
        value={logingData.password}
        onChange={handleOnchange}
        minLength={6}
        required
      >
      <>
        Contraseña
          <img
          className={style.visibility}
          src={isVisible ? visibility_on : visibility_off}
          onClick={() => {
            setVisible(!isVisible)
          }}
          />
        </>
      </InputText>
      <Button>{user === null ? 'loging' : 'logout '}</Button>
    </form>
  )
}

export default Login
