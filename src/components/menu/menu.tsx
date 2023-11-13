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
      <ul>
        {menuItems.map((item) => (
          <li key={item.title}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </StyledNav>
  )
}

export const StyledNav = styled.nav`
  ul {
    padding: 40px 0;
    display: flex;
    justify-content: space-around;

    a {
      color: ${theme.colors.accent};
      font-size: 18px;
      font-weight: 700;
    }
  }
`
