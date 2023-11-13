import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import { Button } from 'components/button/button'
import { SectionTitle } from 'components/section-title/section-title'
import { SectionText } from 'components/section-text/section-text'
import { Icon } from 'components/icon/icon'

const icons = [
  { url: '#', idIcon: 'react', id: '1' },
  { url: '#', idIcon: 'react', id: '2' },
  { url: '#', idIcon: 'react', id: '3' },
]

export const Contacts = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contacts</SectionTitle>
      <FlexWrapper justify={'space-between'} gap={'150px'}>
        <StyledForm>
          <Field placeholder={'Your name'} />
          <Field placeholder={'Your name'} />
          <Field placeholder={'Your name'} as={'textarea'} />
          <Button type={'submit'}>Send message</Button>
        </StyledForm>
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
      </FlexWrapper>
    </StyledContacts>
  )
}

const StyledContacts = styled.section`
  background-color: powderblue;
  min-height: 50vh;
  padding: 0 20%;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 30px;

  width: 100%;
`

const Field = styled.input``

const SocialIconsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
`
const SocialItem = styled.li``

const SocialIconLink = styled.a``
