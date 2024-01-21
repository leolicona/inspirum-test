import { Route, Routes } from 'react-router-dom'

import SideBarLayout from '../modules/layout/sideBardLayout/SideBarLayout'
import MainScreen from '../pages/mainScreen/MainScreen'
import Settings from '../pages/settings/Settings'

function Dashboard (): JSX.Element {
  return (
    <SideBarLayout>
      <Routes>
          <Route path="/" element={<MainScreen/>}/>
          <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </SideBarLayout>
  )
}

export default Dashboard
