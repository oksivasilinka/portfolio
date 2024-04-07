import { Menu, MenuItem } from 'layout'
import { S } from '../header-menu_styles'

type Props = {
  menuItems: MenuItem[]
}

export const DesktopMenu = ({ menuItems }: Props) => {
  return (
    <S.Nav>
      <Menu menuItems={menuItems} />
    </S.Nav>
  )
}
