import styled from 'styled-components'
import { theme } from 'styles/theme'
import { font } from 'styles/common'

type Props = {
  label: string
}

export const Field = ({ label }: Props) => {
  return (
    <FieldWrapper>
      <StyledField id={label} placeholder={label} />
      <label htmlFor={label}>{label}</label>
    </FieldWrapper>
  )
}

const StyledField = styled.input`
  border-bottom: 1px solid ${theme.colors.secondary};
  width: 100%;
  padding: 5px;

  &::placeholder {
    opacity: 0;
  }
`
const FieldWrapper = styled.div`
  width: 100%;
  position: relative;

  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-28px);
    font-size: 14px;
  }

  label {
    font-size: 16px;
    position: absolute;
    left: 5px;
    bottom: 5px;
    opacity: 0.6;
    transition: 0.3s;

    ${font({ max: 16, min: 12 })};
  }
`
