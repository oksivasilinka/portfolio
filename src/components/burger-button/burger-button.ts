import styled, { css } from 'styled-components'
import { theme } from 'styles/theme'

export const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  width: 70px;
  height: 70px;
  top: -10px;
  right: -10px;
  z-index: 99999;

  span {
    display: block;
    width: 40px;
    height: 2px;
    background-color: ${theme.colors.accent};
    left: 10px;
    bottom: 25px;
    position: absolute;
    border-radius: 2px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}
    &:before {
      content: '';

      display: block;
      width: 40px;
      height: 2px;
      background-color: ${theme.colors.accent};
      position: absolute;
      border-radius: 2px;
      transform: translateY(-10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &:after {
      content: '';

      display: block;
      width: 30px;
      height: 2px;
      background-color: ${theme.colors.accent};
      position: absolute;
      transform: translateY(10px);
      border-radius: 2px;
      right: 0;
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 40px;
        `}
    }
  }
`
