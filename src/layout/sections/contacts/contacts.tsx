import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import { SectionTitle } from 'components/section-title/section-title'
import { SectionText } from 'components/section-text/section-text'
import { Icon } from 'components/icon/icon'
import { Container } from 'components/container/container'
import { ContactsForm } from 'components/contacts-form/contacts-form'

const icons = [
  { url: '#', idIcon: 'react', id: '1' },
  { url: '#', idIcon: 'react', id: '2' },
  { url: '#', idIcon: 'react', id: '3' },
]

export const Contacts = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contacts</SectionTitle>
        <ContactsWrapper>
          <ContactsForm />
          <FlexWrapper direction={'column'} justify={'center'} gap={'50px'}>
            <SectionText>
              Send me a message, I will contact you shortly. Or contact me in a way more convenient for you
            </SectionText>
            <SocialIconsList>
              {icons.map((icon) => (
                <SocialItem key={icon.id}>
                  <SocialIconLink>
                    <Icon width={'40'} height={'40'} id={icon.idIcon} />
                  </SocialIconLink>
                </SocialItem>
              ))}
            </SocialIconsList>
          </FlexWrapper>
        </ContactsWrapper>
      </Container>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  min-height: 50vh;

  span {
    padding: 0;
  }
`

const SocialIconsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`
const SocialItem = styled.li``

const SocialIconLink = styled.a``

const ContactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  padding: 50px 0;
`
