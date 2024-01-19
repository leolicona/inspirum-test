import SideBar from '../../../components/sideBar/SideBard'
import HeadBard from '../../../components/headBar/headBar'

import style from './sideBarLayoutStyles.module.css'

interface Props {
  children: React.ReactNode
}
function SideBarLayout ({ children }: Props): JSX.Element {
  return (
    <div className={style.container}>
      <SideBar className={style.sidebar}>Leo Licona</SideBar>
      <div className={style.mainContainer}>
        <HeadBard/>
        <main>
            {children}
        </main>
        </div>
    </div>
  )
}

export default SideBarLayout
