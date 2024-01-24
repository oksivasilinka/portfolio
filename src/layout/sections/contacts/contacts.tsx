import styled from 'styled-components'
import { SocialIcons } from 'layout/sections/contacts/social-icons/social-icons'
import { ContactsForm, Container, FlexWrapper, SectionText, SectionTitle } from 'components'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

const icons = [
  { url: 'https://www.linkedin.com/in/oksana--kovalchuk/', id: 'linkedin' },
  { url: 'https://t.me/oksivasilinka', id: 'telegram' },
  { url: 'mailto:oksana.s.kovalchuk@gmail.com', id: 'email' },
  { url: 'https://github.com/oksivasilinka', id: 'github' },
]

export const Contacts = () => {
  const { t } = useTranslation()
  return (
    <StyledContacts id={'contacts'}>
      <Container>
        <SectionTitle>{t('title', { ns: 'contacts' })}</SectionTitle>

        <Fade>
          <FlexWrapper gap={'40px'} justify={'center'} direction={'column'}>
            <SectionText>{t('description', { ns: 'contacts' })}</SectionText>
            <SocialIcons icons={icons} />
            <ContactsForm />
          </FlexWrapper>
        </Fade>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  position: relative;
`
