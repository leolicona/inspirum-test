import style from './tagStyles.module.css'

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

const Tag = ({ children, ...props }: Props): JSX.Element => {
  return (
        <span className={style.tag} {...props}>{children}</span>
  )
}

export default Tag
