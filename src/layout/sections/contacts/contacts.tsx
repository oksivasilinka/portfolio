import styled from 'styled-components'
import { SocialIcons } from 'layout/sections/contacts/social-icons/social-icons'
import { ContactsForm, Container, FlexWrapper, SectionText, SectionTitle } from 'components'
import { Fade } from 'react-awesome-reveal'

const icons = [
  { url: 'https://www.linkedin.com/in/oksana--kovalchuk/', id: 'linkedin' },
  { url: 'https://t.me/oksivasilinka', id: 'telegram' },
  { url: 'mailto:oksana.s.kovalchuk@gmail.com', id: 'email' },
  { url: 'https://github.com/oksivasilinka', id: 'github' },
]

export const Contacts = () => {
  return (
    <StyledContacts id={'contacts'}>
      <Container>
        <SectionTitle>Contacts</SectionTitle>

        <Fade>
          <FlexWrapper gap={'40px'} justify={'center'} direction={'column'}>
            <SectionText>
              Send me a message, I will contact you shortly. Or contact me in a way more convenient for you
            </SectionText>
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
