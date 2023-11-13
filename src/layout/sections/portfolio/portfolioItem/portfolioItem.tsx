import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import photo from 'assets/mac.jpg'

type Props = {
  name: string
  description: string
  url: string
}

export const PortfolioItem = ({ name, description, url }: Props) => {
  return (
    <StyledPortfolioItem>
      <FlexWrapper direction={'column'}>
        <Photo src={photo} alt={'photo'} />
        <Wrapper>
          <StyledTitle>{name}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <a href={url}>See project</a>
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
