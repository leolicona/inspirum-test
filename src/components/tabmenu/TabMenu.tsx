interface Props {
  children: React.ReactNode
}

function TabMenu ({ children }: Props): JSX.Element {
  return (
        <li>{children}</li>
  )
}

export default TabMenu
