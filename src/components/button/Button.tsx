import style from './buttonStyles.module.css'
import type { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

function Button ({ children, ...props }: Props): JSX.Element {
  return <button className={style.button} {...props}>{children}</button>
}

export default Button
