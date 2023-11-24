import { useState } from 'react'
import { Menu } from 'layout/header/header-menu/menu/menu'
import { MenuItem } from 'layout/header/header'

import { S } from '../header-menu_styles'
import { BurgerButton } from 'components'

type Props = {
  menuItems: MenuItem[]
}
export const MobileMenu = ({ menuItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenuHandler = () => {
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }
  return (
    <S.MobileNav>
      <BurgerButton onClick={openMenuHandler} isOpen={isOpen}>
        <span></span>
      </BurgerButton>
      <S.MenuPopup isOpen={isOpen}>
        <Menu menuItems={menuItems} />
      </S.MenuPopup>
    </S.MobileNav>
  )
}
