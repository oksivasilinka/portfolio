import styled from 'styled-components'
import { theme } from 'styles/theme'
import { CloseButton, SectionText } from 'components'

type Props = {
  text: string
  onClick: () => void
}

export const Modal = ({ text, onClick }: Props) => {
  return (
    <Bg>
      <ModalWrapper>
        <CloseButton onClick={onClick} />
        <SectionText>{text}</SectionText>
      </ModalWrapper>
    </Bg>
  )
}

const Bg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(12, 7, 10, 0.7);
`

const ModalWrapper = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 350px;
  background-color: ${theme.colors.primaryBg};
  box-shadow: ${theme.shadow.main};
  padding: 50px 30px;
  border-radius: 10px;

  p {
    text-align: center;
  }
`
