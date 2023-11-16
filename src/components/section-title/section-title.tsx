import styled from 'styled-components'
import { theme } from 'styles/theme'

export const SectionTitle = styled.h2`
  text-align: center;
  padding-top: 80px;
  padding-bottom: 40px;
  font-size: 60px;
  font-weight: 700;
  letter-spacing: 20px;
  color: ${theme.colors.accent};
  border-bottom: 1px solid ${theme.colors.secondary};
  margin-bottom: 50px;
`
