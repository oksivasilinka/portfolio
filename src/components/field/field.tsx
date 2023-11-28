import styled from 'styled-components'
import { theme } from 'styles/theme'
import { font } from 'styles/common'

type Props = {
  label: string
  name: string
  type?: 'email' | 'text'
}

export const Field = ({ label, name, type = 'text' }: Props) => {
  return (
    <FieldWrapper>
      <StyledField type={type} name={name} required id={name} placeholder={label} />
      <label htmlFor={name}>{label}</label>
    </FieldWrapper>
  )
}

const StyledField = styled.input`
  border: 1px solid rgba(158, 255, 0, 0.5);
  background-color: ${theme.colors.secondaryBg};
  width: calc(100% - 22px);
  padding: 10px 10px;
  border-radius: 10px;

  &:hover,
  &:active {
    background-color: ${theme.colors.primaryBg};

    transition: ${theme.animations.transitions};
  }

  &::placeholder {
    opacity: 0;
  }

  @media ${theme.media.mobile} {
    padding: 8px 10px;
  }
`
const FieldWrapper = styled.div`
  position: relative;

  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-40px);
    ${font({ max: 14, min: 12 })};
    @media ${theme.media.mobile} {
      transform: translateY(-32px);
    }
  }

  label {
    position: absolute;
    left: 10px;
    bottom: 10px;
    opacity: 0.6;
    transition: ${theme.animations.transitions};

    ${font({ max: 16, min: 14, weight: 300 })};
  }
`
