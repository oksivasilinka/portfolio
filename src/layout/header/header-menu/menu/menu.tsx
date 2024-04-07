import { MenuItem } from 'layout'

import { S } from '../header-menu_styles'

type Props = {
  menuItems: MenuItem[]
  onItemClick?: () => void
}

export const Menu = ({ menuItems, onItemClick }: Props) => {
  return (
    <S.NavList>
      {menuItems.map((item) => (
        <li key={item.title}>
          <S.NavLink
            to={`${item.href}`}
            smooth={true}
            activeClass="active"
            spy={true}
            offset={-100}
            onClick={onItemClick}
          >
            {item.title}
          </S.NavLink>
        </li>
      ))}
    </S.NavList>
  )
}
