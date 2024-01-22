import style from './infoCardStyles.module.css'

interface Props {
  children: React.ReactNode
}

const Infocard: React.FC<Props> = ({ children }: Props): JSX.Element => {
  return (
    <article className={style.container}>
        {children}
    </article>
  )
}

export default Infocard
