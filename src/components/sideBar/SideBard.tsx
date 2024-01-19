import TabMenu from '../tabmenu/TabMenu'
import type { HTMLAttributes } from 'react'

import style from './sideBarStyles.module.css'

interface SideBarProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const menu: string[] = ['Home', 'About', 'Contact']

function SideBar ({ children }: SideBarProps): JSX.Element {
  return (
        <aside className={style.aside}>
            {children}
           <nav>
                <ul>
                {
                    menu?.map((item) => <TabMenu key={item}>{item}</TabMenu>)
                }
                </ul>
           </nav>
        </aside>
  )
}

export default SideBar
