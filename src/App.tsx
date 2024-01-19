import Button from './components/button/Button'
import InputText from './components/input/InputText'
import SideBar from './components/sideBar/SideBard'
import SideBarLayout from './modules/layout/sideBardLayout/SideBarLayout'
import Loging from './components/loging/Loging'
function App (): JSX.Element {
  return (
    <>
      <SideBarLayout>
        <InputText label="Nombre" type="text" placeholder="Nombre"/>
        <Loging/>
      </SideBarLayout>
    </>
  )
}

export default App
