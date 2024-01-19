interface Props {
  children: React.ReactNode
}

function CleanLayout ({ children }: Props): JSX.Element {
  return (
        <div>
            {children}
        </div>
  )
}

export default CleanLayout
