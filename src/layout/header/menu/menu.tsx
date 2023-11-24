import styled from 'styled-components'
import { theme } from 'styles/theme'

const menuItems = [
  { href: '#', title: 'Home' },
  { href: '#', title: 'About Me' },
  { href: '#', title: 'Skills' },
  { href: '#', title: 'Portfolio' },
  { href: '#', title: 'Contacts' },
]

export const Menu = () => {
  return (
    <StyledNav>
      <NavList>
        {menuItems.map((item) => (
          <ListItem key={item.title}>
            <Link href={item.href}>{item.title}</Link>
          </ListItem>
        ))}
      </NavList>
    </StyledNav>
  )
}

export const StyledNav = styled.nav`
  @media ${theme.media.tablet} {
    display: none;
  }
`

export const NavList = styled.ul`
  padding: 40px 0;
  display: flex;
  justify-content: space-around;
  @media screen and (orientation: landscape) and (max-width: 1100px) {
    padding: 20px 0;
  }
`

export const ListItem = styled.li``

export const Link = styled.a`
  color: ${theme.colors.accent};
  font-size: 18px;
  line-height: 1;
  font-weight: 500;

  &:hover {
    color: ${theme.colors.font};
  }
`
