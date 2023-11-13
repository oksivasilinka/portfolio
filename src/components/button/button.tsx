import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'

type Props = {
  variant?: 'primary' | 'outline'
}

export const Button = styled.button<Props>`
  background-color: ${theme.colors.accent};
  color: ${theme.colors.primaryBg};
  padding: 10px 20px;
  border-radius: 24px;
  font-size: 18px;
  font-weight: 700;

  ${(props) =>
    props.variant === 'outline' &&
    css<Props>`
      background-color: transparent;
      color: ${theme.colors.accent};
      border: 1px solid ${theme.colors.accent};
    `}
`
