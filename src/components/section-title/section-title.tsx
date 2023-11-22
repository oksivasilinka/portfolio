import styled from 'styled-components'
import { theme } from 'styles/theme'
import { font } from 'styles/common'

export const SectionTitle = styled.h2`
  text-align: center;
  padding-top: 80px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(158, 255, 0, 0.3);
  margin-bottom: 50px;
  ${font({ color: theme.colors.accent, weight: 700, max: 50, min: 30, spacingMax: 20, spacingMin: 16 })};
`
