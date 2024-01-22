import style from './gridElementStyles.module.css'

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
}

const GridElement = ({ children, ...props }: Props): JSX.Element => {
  return (
        <span className={style.element} {...props}>
            {children}
        </span>
  )
}

export default GridElement
