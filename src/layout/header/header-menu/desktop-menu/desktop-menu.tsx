import { Menu } from 'layout/header/header-menu/menu/menu'
import { MenuItem } from 'layout/header/header'
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
