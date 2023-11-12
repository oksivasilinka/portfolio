import styled from 'styled-components'
import { SectionTitle } from 'components/section-title/section-title'
import { SectionText } from 'components/section-text/section-text'

export const AboutMe = () => {
  return (
    <StyledAboutMe>
      <SectionTitle>About me</SectionTitle>
      <SectionText>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores beatae cupiditate dignissimos
        dolore esse eveniet facere maxime minus molestiae odio perferendis quaerat quasi sed sequi, totam vel veniam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores beatae cupiditate dignissimos
        dolore esse eveniet facere maxime minus molestiae odio perferendis quaerat quasi sed sequi, totam vel veniam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi asperiores beatae cupiditate dignissimos
        dolore esse eveniet facere maxime minus molestiae odio perferendis quaerat quasi sed sequi, totam vel veniam.
      </SectionText>
    </StyledAboutMe>
  )
}

const StyledAboutMe = styled.section`
  background-color: hotpink;
  min-height: 50vh;
  padding: 0 20%;
`
