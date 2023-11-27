import { Button } from 'components/button/button'
import styled from 'styled-components'
import { Field } from 'components/field/field'

import emailjs from '@emailjs/browser'
import { FormEvent, useRef } from 'react'

export const ContactsForm = () => {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    emailjs.sendForm('service_knpk8sm', 'template_iot9u2r', form.current, '4D4Sqo0622kiedngy').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      },
    )
    e.currentTarget.reset()
  }

  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <Field label={'Your Name'} name={'name'} />
      <Field type={'email'} label={'Your Email'} name={'email'} />
      <Field label={'Your Message'} name={'message'} />
      <Button type={'submit'}>Send message</Button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
`
