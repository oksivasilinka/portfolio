import photo from 'assets/SAVE_20200927_223544.webp'
import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import { Button } from 'components/button/button'

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper gap={'50px'} align={'center'} justify={'center'}>
        <Photo src={photo} alt={'main-photo'} />
        <FlexWrapper direction={'column'} gap={'30px'}>
          <Name>Oksana Kovalchuk</Name>
          <MainTitle>Frontend Developer, Minsk</MainTitle>
          <FlexWrapper gap={'20px'}>
            <Button>Send Message</Button>
            <Button>Download CV</Button>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </StyledMain>
  )
}

const StyledMain = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: cornsilk;
`

const Photo = styled.img`
  width: 310px;
  object-fit: cover;
`

const MainTitle = styled.h1``
const Name = styled.h2``
