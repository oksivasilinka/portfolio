import styled from 'styled-components'

type Props = {
  title: string
  callback?: any
  variant?: 'primary' | 'outlined'
}

export const Button = ({ title }: Props) => {
  return <StyledButton>{title}</StyledButton>
}

const StyledButton = styled.button``
