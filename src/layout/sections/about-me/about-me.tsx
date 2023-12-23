import { Container, SectionText, SectionTitle } from 'components'
import { Fade } from 'react-awesome-reveal'
import photo from 'assets/second-photo.webp'
import { S } from './about-me_styles'

export const AboutMe = () => {
  return (
    <S.AboutMe id={'aboutMe'}>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <Fade>
          <S.Wrapper>
            <SectionText>
              Hello! My name is Oksana. Frontend developer with 1+ years of experience in Single Page Application
              development using TypeScript, JavaScript, React, Redux, Redux-toolkit, RTK Query.
              <br />
              <br />
              I am constantly improving my skills in these technologies, and am also actively studying Next.js and React
              Native to expand my capabilities and achieve a higher level of professionalism in my work. In my free
              time, I actively solve problems on Codewars, which helps me develop and maintain my mental acuity in
              algorithmic thinking and solving complex problems.
              <br />
              <br />
              My main development priority is to create efficient and clean code that is easy to maintain and scale. I
              strive to create high-quality, intuitive and accessible user interfaces
              <br />
              <br />I will be glad to consider different options for cooperation (office, remote, hybrid, part-time and
              full-time).
            </SectionText>
            <S.Photo src={photo} alt={'main-photo'} />
          </S.Wrapper>
        </Fade>
      </Container>
    </S.AboutMe>
  )
}
