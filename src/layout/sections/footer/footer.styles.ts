import styled from 'styled-components'
import { theme } from 'styles/theme'
import { font } from 'styles/common'

const Footer = styled.footer`
  background-color: ${theme.colors.secondaryBg};
  padding: 40px 0;
`

const Text = styled.p`
  text-align: center;
  opacity: 0.8;
  ${font({ max: 14, min: 12, weight: 300 })};
`
export const S = { Footer, Text }