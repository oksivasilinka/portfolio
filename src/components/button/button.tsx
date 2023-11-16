import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'

type Props = {
  variant?: 'primary' | 'outlined'
}

export const Button = styled.button<Props>`
  background-color: ${theme.colors.accent};
  color: ${theme.colors.primaryBg};
  padding: 14px 30px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;

  ${(props) =>
    props.variant === 'outlined' &&
    css<Props>`
      background-color: transparent;
      color: ${theme.colors.accent};
      outline: 2px solid ${theme.colors.accent};
    `}
`
