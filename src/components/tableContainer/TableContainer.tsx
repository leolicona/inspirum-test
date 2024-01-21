import style from './tableContainerStyles.module.css'

interface Props {
  children: React.ReactNode
}

function TableContainer ({ children }: Props): JSX.Element {
  return (
        <article className={style.container}>
            {children}
        </article>
  )
}

export default TableContainer
