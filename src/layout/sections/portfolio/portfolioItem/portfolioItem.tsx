import styled from 'styled-components'
import photo from 'assets/mac.jpg'
import { theme } from 'styles/theme'

type Props = {
  name: string
  description: string
  url: string
}

export const PortfolioItem = ({ name, description, url }: Props) => {
  return (
    <StyledPortfolioItem>
      <Photo src={photo} alt={'photo'} />
      <Wrapper>
        <StyledTitle>{name}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledLink href={url}>See project</StyledLink>
      </Wrapper>
    </StyledPortfolioItem>
  )
}

const StyledPortfolioItem = styled.div`
  background-color: ${theme.colors.primaryBg};
  border-radius: 24px;
  max-width: 500px;
  box-shadow: ${theme.shadow.main};
  margin-bottom: 50px;
`
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
`

const StyledTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  color: ${theme.colors.accent};
  line-height: 26px;
`

const StyledDescription = styled.p`
  font-size: 16px;
  font-weight: 500;
`

const Photo = styled.img`
  border-radius: 24px;
  padding: 10px;
  width: 100%;
  object-fit: cover;
`

const StyledLink = styled.a`
  color: ${theme.colors.accent};
  text-decoration: underline;
`
