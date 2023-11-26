import styled from 'styled-components'
import { Container, SectionText, SectionTitle } from 'components'

export const AboutMe = () => {
  return (
    <StyledAboutMe id={'aboutMe'}>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <SectionText>
          Hello! My name is Oksana. I am a frontend developer from Minsk.
          <br />
          <br />
          I have experience creating a SPA using Type Script, Java Script, React, Redux, Redux toolkit, RTK Query.
          <br />
          <br />
          I always strive for self-development and constantly improve my skills by studying new technologies and
          methodologies. I really enjoy learning new tools and approaches, as well as opportunities to apply them in my
          work.
          <br />
          <br />
          My priority in development is to create efficient and clean code that is easy to maintain and scale. I also
          try to create high-quality and intuitive user interfaces.
        </SectionText>
      </Container>
    </StyledAboutMe>
  )
}

const StyledAboutMe = styled.section`
  position: relative;
`
