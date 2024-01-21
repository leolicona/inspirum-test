import style from './footBarStyles.module.css'

interface Props {
  children?: React.ReactNode
}

function FootBar ({ children }: Props): JSX.Element {
  return (
        <aside className={style.container}>
            {children}
        </aside>
  )
}

export default FootBar
