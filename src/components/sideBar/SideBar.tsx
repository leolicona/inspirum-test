import { useState } from 'react'
import { Link } from 'react-router-dom'
import TabMenu from '../tabmenu/TabMenu'
import type { HTMLAttributes } from 'react'
import style from './sideBarStyles.module.css'

interface SideBarProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  title?: string
  menu: Array<{ name: string, path: string }>
  isOpen: boolean
  fn?: (arg: boolean) => void
}

function SideBar ({ children, title, menu, isOpen, fn, ...props }: SideBarProps): JSX.Element {
  const [selected, setSelected] = useState<string>('Home')

  const handleClick = (key: string): void => {
    setSelected(key)
    if (fn !== undefined) fn(!isOpen)
  }

  return (
      <div className={isOpen ? `${style.container} ${style.asideOpen}` : style.container } {...props}>
        <aside className={style.aside}>
          <div>{title}</div>
          <nav>
            <ul className={style.navigation}>
              {menu?.map((item) => (
                <TabMenu key={item.path} onClick={() => { handleClick(item.name) }} isSelected={selected === item.name}>
                  <Link to={item.path}>{item.name}</Link>
                </TabMenu>
              ))}
              <TabMenu isSelected={false}>
                {children}
              </TabMenu>
            </ul>
          </nav>
        </aside>
      </div>
  )
}

export default SideBar
