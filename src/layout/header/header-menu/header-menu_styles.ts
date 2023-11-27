import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'
import { Link } from 'react-scroll'

const Nav = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
`

const MobileNav = styled.nav`
  width: 100%;
  height: 70px;
  position: relative;

  @media ${theme.media.tablet} {
    display: block;
  }
`

const MenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  background-color: rgba(12, 7, 10, 0.95);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  transition: ${theme.animations.transitions};
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translateY(0);
      transition: 0.5s ease-in-out;
    `}
`

const NavList = styled.ul`
  padding: 40px 0;
  display: flex;
  justify-content: space-around;
  li {
    width: 200px;
    text-align: center;
  }
  @media screen and (orientation: landscape) and (max-width: 1100px) {
    padding: 20px 0;
  }
  @media ${theme.media.tablet} {
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
`

const NavLink = styled(Link)`
  color: ${theme.colors.accent};
  font-size: 18px;
  line-height: 1;
  font-weight: 500;

  &:hover,
  &.active {
    color: ${theme.colors.font};
    letter-spacing: 2px;
    transition: ${theme.animations.transitions};
  }
`

export const S = { Nav, NavList, MobileNav, MenuPopup, NavLink }
