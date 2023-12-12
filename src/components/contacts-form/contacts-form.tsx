import { Button } from 'components/button/button'
import styled from 'styled-components'
import { Field } from 'components/field/field'

import emailjs from '@emailjs/browser'
import { FormEvent, useRef, useState } from 'react'
import { SectionText } from 'components/section-text'

export const ContactsForm = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    let value = e.currentTarget

    emailjs.sendForm('service_knpk8sm', 'template_iot9u2r', form.current, '4D4Sqo0622kiedngy').then(
      (result) => {
        setFormSubmitted(true)
        console.log(result.text)
        value.reset()
      },
      (error) => {
        console.log(error.text)
      },
    )
  }

  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <Field label={'Your Name'} name={'name'} />
      <Field type={'email'} label={'Your Email'} name={'email'} />
      <Field label={'Your Message'} name={'message'} />
      <Button type={'submit'}>Send message</Button>
      {formSubmitted && <SectionText>The form has been submitted. I will answer you very soon!</SectionText>}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
`
