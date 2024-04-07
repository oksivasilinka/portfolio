import { useState } from 'react'
import { Menu, MenuItem } from 'layout'

import { S } from '../header-menu_styles'
import { BurgerButton } from 'components'

type Props = {
  menuItems: MenuItem[]
}
export const MobileMenu = ({ menuItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenuHandler = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.MobileNav>
      <BurgerButton onClick={openMenuHandler} isOpen={isOpen}>
        <span></span>
      </BurgerButton>
      <S.MenuPopup isOpen={isOpen} onClick={openMenuHandler}>
        <Menu menuItems={menuItems} onItemClick={openMenuHandler} />
      </S.MenuPopup>
    </S.MobileNav>
  )
}
