import { Container, SectionText, SectionTitle } from 'components'
import { Fade } from 'react-awesome-reveal'
import photo from 'assets/second-photo.webp'
import { S } from './about-me_styles'
import { useTranslation } from 'react-i18next'

export const AboutMe = () => {
  const { t } = useTranslation()
  return (
    <S.AboutMe id={'aboutMe'}>
      <Container>
        <SectionTitle>{t('title', { ns: 'aboutMe' })}</SectionTitle>
        <Fade>
          <S.Wrapper>
            <SectionText>
              {t('text1', { ns: 'aboutMe' })}
              <br />
              <br />
              {t('text2', { ns: 'aboutMe' })}
              <br />
              <br />
              {t('text3', { ns: 'aboutMe' })}
              <br />
              <br />
              {t('text4', { ns: 'aboutMe' })}
            </SectionText>
            <S.Photo src={photo} alt={'main-photo'} />
          </S.Wrapper>
        </Fade>
      </Container>
    </S.AboutMe>
  )
}
