import type { InputHTMLAttributes } from 'react'

import style from './inputTextStyles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

function InputText ({ children, ...props }: InputProps): JSX.Element {
  return <label className={style.label}>{children}<input className={style.input } {...props}/></label>
}

export default InputText
