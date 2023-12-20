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
              Hello! My name is Oksana. I am a frontend developer with more than 1 year of experience in SPA development
              using TypeScript, JavaScript, React, Redux, Redux-toolkit.
              <br />
              <br />I am constantly improving in these technologies, and am also actively studying Next.js and React
              Native to expand my capabilities and achieve a higher level of income in my work. My main development
              priority is to create efficient and clean code that can be easily maintained and scaled. I strive to
              produce high-quality, convenient and accessible user interfaces.
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
