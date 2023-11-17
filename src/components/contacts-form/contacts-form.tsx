import { Button } from 'components/button/button'
import styled from 'styled-components'
import { theme } from 'styles/theme'

export const ContactsForm = () => {
  return (
    <StyledForm>
      <FieldsWrapper>
        <Field placeholder={'Your name'} />
        <Field placeholder={'Your name'} />
        <Field placeholder={'Your name'} as={'textarea'} />
      </FieldsWrapper>
      <Button type={'submit'} variant={'outlined'}>
        Send message
      </Button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 540px;
  width: 40%;
  gap: 40px;
  padding-bottom: 50px;
`

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 30px;
`

const Field = styled.input`
  border-bottom: 1px solid ${theme.colors.secondary};
  width: 100%;
  min-height: 20px;
  padding: 5px;
  vertical-align: bottom;
  &::placeholder {
    color: ${theme.colors.font};
    opacity: 0.6;
  }
`
