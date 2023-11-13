import styled from 'styled-components'
import { SectionTitle } from 'components/section-title/section-title'
import { SectionText } from 'components/section-text/section-text'
import { Container } from 'components/container/container'

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores beatae cupiditate
          dignissimos dolore esse eveniet facere maxime minus molestiae odio perferendis quaerat quasi sed sequi, totam
          vel veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores beatae
          cupiditate dignissimos dolore esse eveniet facere maxime minus molestiae odio perferendis quaerat quasi sed
          sequi, totam vel veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores
          beatae cupiditate dignissimos dolore esse eveniet facere maxime minus molestiae odio perferendis quaerat quasi
          sed sequi, totam vel veniam.
        </SectionText>
      </Container>
    </StyledAboutMe>
  )
}

const StyledAboutMe = styled.section`
  min-height: 50vh;
`
