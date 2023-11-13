import photo from 'assets/SAVE_20200927_223544.webp'
import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import { Button } from 'components/button/button'
import { theme } from 'styles/theme'
import { Container } from 'components/container/container'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper justify={'center'} gap={'50px'} align={'center'}>
          <Photo src={photo} alt={'main-photo'} />
          <FlexWrapper direction={'column'} gap={'30px'}>
            <Name>Oksana Kovalchuk</Name>
            <MainTitle>Frontend Developer, Minsk</MainTitle>
            <FlexWrapper gap={'10px'}>
              <Button>Send Message</Button>
              <Button variant={'outline'}>Download CV</Button>
            </FlexWrapper>
          </FlexWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 150px;
`

const Photo = styled.img`
  width: 500px;
  object-fit: cover;
  border-radius: 24px;
`

const Name = styled.h2`
  color: ${theme.colors.accent};
  font-size: 48px;
  font-weight: 800;
`

const MainTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
`
