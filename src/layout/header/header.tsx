import styled from 'styled-components'
import { Menu } from 'components/menu/menu'
import { Container } from 'components/container/container'
import { theme } from 'styles/theme'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu />
      </Container>
    </StyledHeader>
  )
}

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: ${theme.colors.primaryBg};
  border-bottom: 1px solid ${theme.colors.secondary};
  z-index: 9999;
`
