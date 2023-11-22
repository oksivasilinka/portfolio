import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'
import { useState } from 'react'

const menuItems = [
  { href: '#', title: 'Home' },
  { href: '#', title: 'About Me' },
  { href: '#', title: 'Skills' },
  { href: '#', title: 'Portfolio' },
  { href: '#', title: 'Contacts' },
]

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenuHandler = () => {
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }
  return (
    <StyledMobileNav>
      <BurgerButton onClick={openMenuHandler} isOpen={isOpen}>
        <span></span>
      </BurgerButton>
      <MobileMenuPopup isOpen={isOpen}>
        <NavList>
          {menuItems.map((item) => (
            <ListItem key={item.title}>
              <Link href={item.href}>{item.title}</Link>
            </ListItem>
          ))}
        </NavList>
      </MobileMenuPopup>
    </StyledMobileNav>
  )
}

export const StyledMobileNav = styled.nav`
  width: 100%;
  height: 70px;
  position: relative;
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(12, 7, 10, 0.95);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: none;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`

export const NavList = styled.ul`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const ListItem = styled.li``

export const Link = styled.a`
  color: ${theme.colors.accent};
  font-size: 18px;
  font-weight: 500;

  &:hover {
    color: ${theme.colors.font};
  }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  width: 70px;
  height: 70px;
  top: -10px;
  right: -10px;
  z-index: 99999;

  span {
    display: block;
    width: 40px;
    height: 2px;
    background-color: ${theme.colors.accent};
    left: 10px;
    bottom: 25px;
    position: absolute;
    border-radius: 2px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}
    &:before {
      content: '';

      display: block;
      width: 40px;
      height: 2px;
      background-color: ${theme.colors.accent};
      position: absolute;
      border-radius: 2px;
      transform: translateY(-10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &:after {
      content: '';

      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.accent};
      position: absolute;
      transform: translateY(10px);
      border-radius: 2px;
      right: 0;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 40px;
        `}
    }
  }
`
