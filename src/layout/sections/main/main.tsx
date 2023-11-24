import photo from 'assets/IMG_20200426_163541_1-EDIT.jpg'
import { Button, Container, Icon } from 'components'
import { S } from './main_styles'

export const Main = () => {
  return (
    <S.Main>
      <Container>
        <S.MainWrapper>
          <S.Photo src={photo} alt={'main-photo'} />
          <S.InfoWrapper>
            <S.Name>
              Oksana <br />
              Kovalchuk
            </S.Name>
            <S.MainTitle>Frontend Developer</S.MainTitle>
          </S.InfoWrapper>
          <S.ButtonWrapper>
            <Button>
              <Icon id={'send'} height={'20'} width={'25'} viewBox={'0 0 20 20'} />
              Send Message
            </Button>
            <Button variant={'outlined'}>
              <Icon id={'save'} height={'20'} width={'20'} viewBox={'0 0 20 20'} />
              Download CV
            </Button>
          </S.ButtonWrapper>
        </S.MainWrapper>
      </Container>
    </S.Main>
  )
}
