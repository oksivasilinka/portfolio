import styled from 'styled-components'
import { font } from 'styles/common'

export const SectionText = styled.p`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  width: 90%;
  ${font({ weight: 400, max: 18, min: 14, lineHeight: 1.5 })};
`
