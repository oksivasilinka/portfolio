import styled from 'styled-components'
import { Menu } from 'components/menu/menu'

export const Header = () => {
  return (
    <StyledHeader>
      <Menu />
    </StyledHeader>
  )
}

export const StyledHeader = styled.header`
  background-color: pink;
`
