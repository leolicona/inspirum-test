import Login from '../../components/loging/Login'

import style from './loginPageStyles.module.css'

function LoginPage (): JSX.Element {
  return (
        <main className={style.container}>
           <Login/>
        </main>
  )
}

export default LoginPage
