import photo from 'assets/SAVE_20200927_223544.webp'
import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={'center'} align={'center'}>
        <Photo src={photo} alt={'main-photo'} />
        <div>
          <Name>Oksana Kovalchuk</Name>
          <MainTitle>Frontend Developer, Minsk</MainTitle>
        </div>
      </FlexWrapper>
    </StyledMain>
  )
}

const StyledMain = styled.div`
  height: 100vh;
  background-color: cornsilk;
`

const Photo = styled.img`
  width: 310px;
  object-fit: cover;
`

const MainTitle = styled.h1``
const Name = styled.h2``
