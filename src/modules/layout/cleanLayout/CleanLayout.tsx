import style from './cleanLayoutStyles.module.css'
interface Props {
  children: React.ReactNode
}

function CleanLayout ({ children }: Props): JSX.Element {
  return (
        <div className={style.container}>
            {children}
        </div>
  )
}

export default CleanLayout
