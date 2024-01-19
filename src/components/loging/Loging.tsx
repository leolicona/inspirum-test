import InputText from '../input/InputText'
import Button from '../button/Button'

function Loging (): JSX.Element {
  return (
    <div className="loging">
      <InputText label="Usuario" type="text" placeholder="Usuario"/>
      <InputText label="Contraseña" type="password" placeholder="Contraseña"/>
      <Button>Entrar</Button>
    </div>
  )
}

export default Loging
