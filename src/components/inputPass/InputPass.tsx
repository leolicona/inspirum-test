import { useState } from 'react'
import type { InputHTMLAttributes } from 'react'
import style from './inputPassStyles.module.css'
import visibility_on from '../../assets/visibility_pass_on.svg'
import visibility_off from '../../assets/visibility_pass_off.svg'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
}

function InputPass ({ children, ...props }: InputProps): JSX.Element {
  const [isVisible, setVisible] = useState<boolean>(false)

  return (
      <label className={style.label}> {children}
        <input className={style.input} {...props} type={isVisible ? 'text' : 'password'}/>
          <img
            className={style.visibility}
            src={isVisible ? visibility_on : visibility_off}
            onClick={() => {
              setVisible(!isVisible)
            }} />
      </label>
  )
}

export default InputPass
