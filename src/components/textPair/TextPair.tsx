interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  legend?: string
}

const TextPair = ({ title, legend, ...props }: Props): JSX.Element => {
  return (
        <div {...props} >
            <h3>{title}</h3>
            <p>{legend}</p>
        </div>
  )
}

export default TextPair
