import styled from 'styled-components'

type Props = {
  onClick: () => void
}
export const CloseButton = ({ onClick }: Props) => {
  return <Close type={'button'} onClick={onClick} />
}

const Close = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 10px;
    display: block;
    width: 24px;
    height: 3px;
    background: #fff;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`
