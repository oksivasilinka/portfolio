import photo from 'assets/IMG_20200426_163541_1-EDIT.jpg'
import styled from 'styled-components'
import { Button } from 'components/button/button'
import { theme } from 'styles/theme'
import { Container } from 'components/container/container'
import { Icon } from 'components/icon/icon'
import { font } from 'styles/common'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <MainWrapper>
          <Photo src={photo} alt={'main-photo'} />
          <Wrapper>
            <Name>
              Oksana <br />
              Kovalchuk
            </Name>
            <MainTitle>Frontend Developer</MainTitle>
          </Wrapper>
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
        </MainWrapper>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  padding-top: 130px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media ${theme.media.tablet} {
    padding-top: 70px;
  }
`

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 3fr 2fr;
  column-gap: 50px;
  align-content: center;
  @media ${theme.media.tablet} {
    justify-content: center;
    grid-template-columns: unset;
    grid-auto-rows: unset;
    row-gap: 40px;
  }
`

const Photo = styled.img`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: ${theme.shadow.main};
  grid-row-start: 1;
  grid-row-end: 3;
  @media ${theme.media.tablet} {
    grid-row-start: unset;
    grid-row-end: unset;
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
  flex-wrap: wrap;
  align-content: start;
  padding-top: 20px;
  width: 100%;
`

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  @media ${theme.media.tablet} {
    grid-row-start: 1;
  }
`
