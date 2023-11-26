import styled from 'styled-components'
import { SocialIcons } from 'layout/sections/contacts/social-icons/social-icons'
import { ContactsForm, Container, FlexWrapper, SectionText, SectionTitle } from 'components'

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
        <FlexWrapper gap={'40px'} justify={'center'} direction={'column'}>
          <SectionText>
            Send me a message, I will contact you shortly. <br />
            Or contact me in a way more convenient for you
          </SectionText>
          <SocialIcons icons={icons} />
          <ContactsForm />
        </FlexWrapper>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  position: relative;
  ${SectionText} {
    max-width: 500px;
    width: 100%;
  }
`
