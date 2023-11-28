import { Container, SectionText, SectionTitle } from 'components'
import { Fade } from 'react-awesome-reveal'
import photo from 'assets/main-photo.webp'
import { S } from './about-me_styles'

export const AboutMe = () => {
  return (
    <S.AboutMe id={'aboutMe'}>
      <Container>
        <SectionTitle>About me</SectionTitle>
        <Fade>
          <S.Wrapper>
            <SectionText>
              Hello! My name is Oksana. I am a frontend developer from Minsk.
              <br />
              <br />
              I have experience creating a SPA using Type Script, Java Script, React, Redux, Redux toolkit, RTK Query.
              <br />
              <br />
              I always strive for self-development and constantly improve my skills by studying new technologies and
              methodologies. I really enjoy learning new tools and approaches, as well as opportunities to apply them in
              my work.
              <br />
              <br />
              My priority in development is to create efficient and clean code that is easy to maintain and scale. I
              also try to create high-quality and intuitive user interfaces.
            </SectionText>
            <S.Photo src={photo} alt={'main-photo'} />
          </S.Wrapper>
        </Fade>
      </Container>
    </S.AboutMe>
  )
}
