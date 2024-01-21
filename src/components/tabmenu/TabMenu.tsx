import style from './tabMenuStyles.module.css'

interface Props extends React.HTMLAttributes<HTMLLIElement> {
  children: React.ReactNode
  isSelected: boolean
}

function TabMenu ({ children, isSelected, ...props }: Props): JSX.Element {
  return (
        <li className={isSelected ? `${style.list} ${style.select}` : style.list } {...props}>{children}</li>
  )
}

export default TabMenu
