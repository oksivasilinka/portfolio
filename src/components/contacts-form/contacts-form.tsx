import { Button } from 'components/button/button'
import styled from 'styled-components'
import { Field } from 'components/field/field'

export const ContactsForm = () => {
  return (
    <StyledForm>
      <FieldsWrapper>
        <Field label={'Your Name'} />
        <Field label={'Your Email'} />
        <Field label={'Your Message'} />
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
  gap: 40px;
`