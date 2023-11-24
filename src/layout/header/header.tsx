import styled from 'styled-components'
import { Menu } from 'layout/header/menu/menu'
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
  background-color: rgba(12, 7, 10, 0.7);
  border-bottom: 1px solid rgba(158, 255, 0, 0.3);
  z-index: 9999;

  @media ${theme.media.tablet} {
    border-bottom: none;
  }
`
