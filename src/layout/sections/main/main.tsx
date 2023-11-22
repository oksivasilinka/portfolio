import photo from 'assets/IMG_20200426_163541_1-EDIT.jpg'
import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import { Button } from 'components/button/button'
import { theme } from 'styles/theme'
import { Container } from 'components/container/container'
import { Icon } from 'components/icon/icon'
import { font } from 'styles/common'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={'center'} align={'center'} gap={'50px'} wrap={'wrap-reverse'}>
          <Photo src={photo} alt={'main-photo'} />

          <Wrapper>
            <Name>
              Oksana <br />
              Kovalchuk
            </Name>
            <MainTitle>Frontend Developer</MainTitle>
            <ButtonWrapper>
              {/*<Button>*/}
              {/*  <Icon id={'send'} height={'20'} width={'25'} viewBox={'0 0 20 20'} />*/}
              {/*  Send Message*/}
              {/*</Button>*/}
              <Button variant={'outlined'}>
                <Icon id={'save'} height={'20'} width={'20'} viewBox={'0 0 20 20'} />
                Download CV
              </Button>
            </ButtonWrapper>
          </Wrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  min-height: 100vh;
  display: flex;
`

const Photo = styled.img`
  width: 400px;
  max-height: 500px;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: ${theme.shadow.main};
  @media ${theme.media.desktopSmall} {
    width: 300px;

    max-height: 370px;
    height: 100%;
  }

  @media ${theme.media.tablet} {
    //width: 280px;
    //height: 320px;
  }
`

const Name = styled.h2`
  ${font({ color: theme.colors.accent, weight: 800, max: 50, min: 34 })};
`

const MainTitle = styled.h1`
  ${font({ weight: 700, max: 40, min: 30 })};
  padding-top: 30px;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding-top: 50px;
  flex-wrap: wrap;
  width: 100%;
`

const Wrapper = styled.div`
  @media screen and (max-width: 814px) {
    //padding-top: 150px;
  }
`
