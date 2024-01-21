import { useState } from 'react'
import SideBar from '../../../components/sideBar/SideBar'
import FootBar from '../../../components/footBar/FootBar'
import useAuth from '../../../hooks/useAuth'

import style from './sideBarLayoutStyles.module.css'
import movil_menu from '../../../assets/menu.svg'

interface Props {
  children: React.ReactNode
}

const menu: Array<{ name: string, path: string }> = [
  {
    name: 'Home',
    path: '/dashboard'
  },
  {
    name: 'Settings',
    path: '../dashboard/settings'
  }

]

function SideBarLayout ({ children }: Props): JSX.Element {
  const { logout, user } = useAuth()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={style.container}>
      <SideBar title={ `Welcome ${user?.name}`} menu={menu} isOpen={isOpen} fn={setIsOpen}>
        <span onClick={logout}>Logout</span>
      </SideBar>
        <main className={style.content}>
            {children}
        </main>
        <FootBar>
          <img src={movil_menu} alt="" onClick={() => { setIsOpen(!isOpen) }}/>
        </FootBar>
    </div>
  )
}

export default SideBarLayout
