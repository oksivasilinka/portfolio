import styled from 'styled-components'
import { Menu } from 'components/menu/menu'
import { Container } from 'components/container/container'
import { theme } from 'styles/theme'
import { MobileMenu } from 'layout/header/mobile-menu/mobile-menu'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Menu />
        <MobileMenu />
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
  @media ${theme.media.tablet} {
    border-bottom: none;
  }
`