import styled from 'styled-components'

export const Menu = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <a href={'#'}>Home</a>
        </li>
        <li>
          <a href={'#'}>About Me</a>
        </li>
        <li>
          <a href={'#'}>Skills</a>
        </li>
        <li>
          <a href={'#'}>Portfolio</a>
        </li>
        <li>
          <a href={'#'}>Contacts</a>
        </li>
      </ul>
    </StyledNav>
  )
}

export const StyledNav = styled.nav`
  ul {
    padding: 40px 0;
    display: flex;
    justify-content: space-around;

    li {
      list-style: none;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
`
