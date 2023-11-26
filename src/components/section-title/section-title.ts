import styled from 'styled-components'
import { theme } from 'styles/theme'
import { font } from 'styles/common'

export const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  padding: 50px 0;
  border-bottom: 1px solid rgba(158, 255, 0, 0.3);
  margin-bottom: 50px;
  ${font({ color: theme.colors.accent, weight: 700, max: 40, min: 30, spacingMax: 20, spacingMin: 16 })};
`
