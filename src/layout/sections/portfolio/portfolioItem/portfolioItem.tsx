import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import photo from 'assets/mac.jpg'

export const PortfolioItem = () => {
  return (
    <StyledPortfolioItem>
      <FlexWrapper direction={'column'}>
        <Photo src={photo} alt={'photo'} />
        <Wrapper>
          <StyledTitle>Tasks Manager</StyledTitle>
          <StyledDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </StyledDescription>
          <a href={'#'}>See project</a>
        </Wrapper>
      </FlexWrapper>
    </StyledPortfolioItem>
  )
}

const StyledPortfolioItem = styled.div`
  background-color: azure;
  max-width: 410px;
`
const Wrapper = styled.div`
  padding: 10px;
`

const StyledTitle = styled.h4``
const StyledDescription = styled.p`
  margin: 20px 0;
`

const Photo = styled.img`
  padding: 10px;
  width: 410px;
  object-fit: cover;
`
