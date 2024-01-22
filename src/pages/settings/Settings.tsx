// import Login from '../../components/loging/Login'
// import useLogin from '../../hooks/useLogin'
import useAuth from '../../hooks/useAuth'
// import type { UserLoging } from '../../types/user.model'
import Button from '../../components/button/Button'
import Infocard from '../../components/infoCard/InfoCard'
import TextPair from '../../components/textPair/TextPair'
import InputPass from '../../components/inputPass/InputPass'

function Settings (): JSX.Element {
  const { logout, user } = useAuth()

  /*   const { doLogin } = useLogin()
  const handleLogin = ({ useremail, password }: UserLoging): void => {
    doLogin({
      useremail,
      password,
      redirectTo: '/dashboard'
    })
  } */

  return (
    <>
      <h1>Settings</h1>

        <h2>Información del usuario</h2>

        <Infocard>
          <TextPair title={'Nombre del usuario'} legend={user?.name}/>
          <TextPair title={'Email del usuario'} legend={user?.email}/>
          <TextPair title={'Rol del usuario'} legend={user?.rol}/>
            <InputPass
            type="password"
            placeholder="Usuario"
            name="useremail"
            value={user?.password}
            required
            >
            </InputPass>
          <Button onClick={logout}>Logout</Button>
        </Infocard>
      <div>
       {/*  <Login submit={handleLogin} isLogin={user === null}/> */}
      </div>
    </>
  )
}
export default Settings
