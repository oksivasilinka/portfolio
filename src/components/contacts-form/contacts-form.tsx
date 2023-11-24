import { Button } from 'components/button/button'
import styled from 'styled-components'
import { Field } from 'components/field/field'

export const ContactsForm = () => {
  return (
    <StyledForm>
      <Field label={'Your Name'} />
      <Field label={'Your Email'} />
      <Field label={'Your Message'} />
      <Button type={'submit'}>Send message</Button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0 auto;
`
