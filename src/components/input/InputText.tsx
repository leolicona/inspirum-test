import type { InputHTMLAttributes } from 'react'

import style from './inputTextStyles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

function InputText ({ label, ...props }: InputProps): JSX.Element {
  return <label className={style.label}>{label}<input className={style.inpiut} {...props}/></label>
}

export default InputText
