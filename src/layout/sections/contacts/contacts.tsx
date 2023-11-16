import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import { SectionTitle } from 'components/section-title/section-title'
import { SectionText } from 'components/section-text/section-text'
import { Container } from 'components/container/container'
import { ContactsForm } from 'components/contacts-form/contacts-form'
import { SocialIcons } from 'layout/sections/contacts/social-icons/social-icons'

const icons = [
  { url: '#', id: 'linkedin' },
  { url: '#', id: 'telegram' },
  { url: '#', id: 'email' },
  { url: '#', id: 'github' },
]

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <FlexWrapper gap={'100px'}>
          <ContactsForm />

          <FlexWrapper direction={'column'} justify={'center'}>
            <SectionText>
              Send me a message, I will contact you shortly. Or contact me in a way more convenient for you
            </SectionText>

            <SocialIcons icons={icons} />
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  min-height: 50vh;
`
