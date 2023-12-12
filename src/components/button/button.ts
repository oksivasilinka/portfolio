import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'
import { font } from 'styles/common'

type Props = {
  variant?: 'primary' | 'outlined'
}

export const Button = styled.button<Props>`
  position: relative;
  background-color: ${theme.colors.accent};
  padding: 12px 26px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  ${font({ color: theme.colors.primaryBg, weight: 700, max: 18, min: 14 })};

  a {
    color: ${theme.colors.primaryBg};
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: ${theme.shadow.main};
    transition: ${theme.animations.transitions};
  }

  ${(props) =>
    props.variant === 'outlined' &&
    css<Props>`
      background-color: transparent;
      outline: 2px solid ${theme.colors.accent};

      a {
        color: ${theme.colors.accent};
      }
    `}
  @media ${theme.media.tablet} {
    &:hover {
      transform: scale(1);
    }
  }
`
