import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
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
      <FlexWrapper direction={'column'}>
        <Photo src={photo} alt={'photo'} />
        <Wrapper>
          <StyledTitle>{name}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          <StyledLink href={url}>See project</StyledLink>
        </Wrapper>
      </FlexWrapper>
    </StyledPortfolioItem>
  )
}

const StyledPortfolioItem = styled.div`
  background-color: ${theme.colors.primaryBg};
  border-radius: 24px;
  max-width: 410px;
  box-shadow:
    -1px -2px 2.6px 0px rgba(189, 6, 94, 0.31),
    1px 4px 4px 0px rgba(158, 255, 0, 0.21);
`
const Wrapper = styled.div`
  padding: 20px;
`

const StyledTitle = styled.h4`
  font-size: 30px;
  font-weight: 700;
  color: ${theme.colors.accent};
  line-height: 26px;
`

const StyledDescription = styled.p`
  margin: 20px 0;
  font-size: 16px;
  font-weight: 500;
`

const Photo = styled.img`
  border-radius: 24px;
  padding: 10px;
  width: 410px;
  object-fit: cover;
`

const StyledLink = styled.a`
  color: ${theme.colors.accent};
  text-decoration: underline;
`
