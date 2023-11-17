import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'

type Props = {
  variant?: 'primary' | 'outlined'
  size?: 'small'
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
  a {
    color: ${theme.colors.primaryBg};
  }

  ${(props) =>
    props.variant === 'outlined' &&
    css<Props>`
      background-color: transparent;
      color: ${theme.colors.accent};
      outline: 2px solid ${theme.colors.accent};

      a {
        color: ${theme.colors.accent};
      }
    `}
  ${(props) =>
    props.size === 'small' &&
    css<Props>`
      outline: 1px solid ${theme.colors.accent};
      padding: 10px 25px;
    `}
  
  &:hover {
    transform: scale(1.2);
    box-shadow: ${theme.shadow.main};
  }
`
