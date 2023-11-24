import styled from 'styled-components'
import { theme } from 'styles/theme'
import { font } from 'styles/common'

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>Designed and developed by Oksana Kovalchuk 2023</StyledText>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: ${theme.colors.secondaryBg};
  padding: 40px 0;
`

const StyledText = styled.p`
  text-align: center;
  opacity: 0.8;
  ${font({ max: 14, min: 12, weight: 300 })};
`
