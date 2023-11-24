import { MenuItem } from 'layout/header/header'

import { S } from '../header-menu_styles'

type Props = {
  menuItems: MenuItem[]
}

export const Menu = ({ menuItems }: Props) => {
  return (
    <S.NavList>
      {menuItems.map((item) => (
        <li key={item.title}>
          <S.Link href={item.href}>{item.title}</S.Link>
        </li>
      ))}
    </S.NavList>
  )
}
