import photo from 'assets/main-photo.webp'
import { Button, Container, Icon } from 'components'
import { S } from './main_styles'
import Typewriter from 'typewriter-effect'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

export const Main = () => {
  const { t } = useTranslation()
  return (
    <S.Main id={'home'}>
      <Container>
        <Fade>
          <S.MainWrapper>
            <S.PhotoWrapper>
              <S.Photo src={photo} alt={'main-photo'} />
            </S.PhotoWrapper>
            <S.InfoWrapper>
              <S.Name>{t('name', { ns: 'main' })}</S.Name>
              <S.MainTitle>
                <p> {t('position', { ns: 'main' })}</p>
                <Typewriter
                  options={{
                    strings: [`${t('position', { ns: 'main' })}`],
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
                  {t('sendButton', { ns: 'main' })}
                </S.NavLink>
              </Button>

              <Button variant={'outlined'}>
                <>
                  <Icon id={'save'} height={'20'} width={'20'} viewBox={'0 0 20 20'} />
                  <a
                    href={'https://drive.google.com/file/d/1wYKk-HxgywJugQgIuZvHfCSRxx9wD1p8/view?usp=sharing'}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    {t('downloadButton', { ns: 'main' })}
                  </a>
                </>
              </Button>
            </S.ButtonWrapper>
          </S.MainWrapper>
        </Fade>
      </Container>
    </S.Main>
  )
}
