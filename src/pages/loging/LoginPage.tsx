import Login from '../../components/loging/Login'
import style from './loginPageStyles.module.css'
import useLogin from '../../hooks/useLogin'
import useAuth from '../../hooks/useAuth'
import type { UserLoging } from '../../types/user.model'

function LoginPage (): JSX.Element {
  const { user } = useAuth()
  const { doLogin } = useLogin()
  const handleLogin = ({ useremail, password }: UserLoging): void => {
    doLogin({
      useremail,
      password,
      redirectTo: '/dashboard'
    })
  }

  return (
        <main className={style.container}>
           <Login submit={handleLogin} isLogin={user === null}/>
        </main>
  )
}

export default LoginPage
