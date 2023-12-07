import photo from 'assets/main-photo.webp'
import { Button, Container, Icon } from 'components'
import { S } from './main_styles'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-awesome-reveal'

export const Main = () => {
  return (
    <S.Main id={'home'}>
      <Container>
        <Fade>
          <S.MainWrapper>
            <S.PhotoWrapper>
              <S.Photo src={photo} alt={'main-photo'} />
            </S.PhotoWrapper>
            <S.InfoWrapper>
              <S.Name>
                Oksana <br />
                Kovalchuk
              </S.Name>
              <S.MainTitle>
                <p> Frontend Developer</p>
                <Typewriter
                  options={{
                    strings: ['Frontend Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </S.MainTitle>
            </S.InfoWrapper>
            <S.ButtonWrapper>
              <Button>
                <S.NavLink to={'contacts'} smooth={true}>
                  <Icon id={'send'} height={'20'} width={'25'} viewBox={'0 0 20 20'} />
                  Send Message
                </S.NavLink>
              </Button>

              <Button variant={'outlined'}>
                <Icon id={'save'} height={'20'} width={'20'} viewBox={'0 0 20 20'} />
                <a
                  href={'https://drive.google.com/uc?export=download&id=14TOKk6zEnYszNCMPQGq_DZNJYxxaRy_B'}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  Download CV
                </a>
              </Button>
            </S.ButtonWrapper>
          </S.MainWrapper>
        </Fade>
      </Container>
    </S.Main>
  )
}
