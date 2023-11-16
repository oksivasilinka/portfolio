import photo from 'assets/IMG_20200426_163541_1-EDIT.jpg'
import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import { Button } from 'components/button/button'
import { theme } from 'styles/theme'
import { Container } from 'components/container/container'
import { Icon } from 'components/icon/icon'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={'space-between'} align={'center'} gap={'50px'}>
          <Photo src={photo} alt={'main-photo'} />

          <FlexWrapper direction={'column'} justify={'center'}>
            <Name>Oksana Kovalchuk</Name>
            <MainTitle>Frontend Developer</MainTitle>

            <ButtonWrapper>
              <Button>
                <Icon id={'send'} height={'20'} width={'25'} viewBox={'0 0 20 20'} />
                Send Message
              </Button>
              <Button variant={'outlined'}>
                <Icon id={'save'} height={'20'} width={'20'} viewBox={'0 0 20 20'} />
                Download CV
              </Button>
            </ButtonWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  height: 100vh;
  display: flex;
`

const Photo = styled.img`
  width: 500px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: ${theme.shadow.second};
`

const Name = styled.h2`
  color: ${theme.colors.accent};
  font-size: 60px;
  font-weight: 800;
`

const MainTitle = styled.h1`
  padding-top: 30px;
  font-size: 50px;
  font-weight: 700;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 50px;
  padding-top: 100px;
  flex-wrap: wrap;
`
