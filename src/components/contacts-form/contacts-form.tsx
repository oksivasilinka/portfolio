import { Button, Field, Modal } from 'components'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { FormEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ContactsForm = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [isShowModal, setIsShowModal] = useState(false)
  const { t } = useTranslation()

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    let value = e.currentTarget

    emailjs.sendForm('service_knpk8sm', 'template_iot9u2r', form.current, '4D4Sqo0622kiedngy').then(
      () => {
        setIsShowModal(true)
        value.reset()
      },
      (error) => {
        console.log(error.text)
      },
    )
  }

  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <Field label={`${t('fieldName', { ns: 'contacts' })}`} name={'name'} />
      <Field type={'email'} label={`${t('fieldEmail', { ns: 'contacts' })}`} name={'email'} />
      <Field label={`${t('fieldMessage', { ns: 'contacts' })}`} name={'message'} />
      <Button type={'submit'}>{t('sendButton', { ns: 'main' })}</Button>
      {isShowModal && <Modal text={t('formSubmittedText', { ns: 'contacts' })} onClick={() => setIsShowModal(false)} />}
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
