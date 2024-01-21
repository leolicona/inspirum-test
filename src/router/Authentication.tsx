import { Route, Routes } from 'react-router-dom'
import LoginPage from '../pages/loging/LoginPage'
import CleanLayout from '../modules/layout/cleanLayout/CleanLayout'

function Authentication (): JSX.Element {
  return (
    <CleanLayout>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
    </CleanLayout>
  )
}

export default Authentication
