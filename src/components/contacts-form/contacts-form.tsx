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
      <Button type={'submit'} variant={'outlined'} size={'small'}>
        Send message
      </Button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  width: 90%;
  gap: 40px;
  padding-bottom: 50px;
`

const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 40px;
  padding: 20px 0;
`
