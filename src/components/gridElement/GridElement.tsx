import style from './gridElementStyles.module.css'

interface Props {
  children: React.ReactNode
}

const GridElement = ({ children }: Props): JSX.Element => {
  return (
        <span className={style.element}>
            {children}
        </span>
  )
}

export default GridElement
