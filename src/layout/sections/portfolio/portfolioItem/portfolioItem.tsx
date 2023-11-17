import styled from 'styled-components'
import photo from 'assets/mac.jpg'
import { theme } from 'styles/theme'
import { Button } from 'components/button/button'

type Props = {
  name: string
  description: string
  url: string
}

export const PortfolioItem = ({ name, description, url }: Props) => {
  return (
    <StyledPortfolioItem>
      <ImageWrapper>
        <Photo src={photo} alt={'photo'} />
        <WrapperButton>
          <Button size={'small'}>
            <LinkButton>Demo</LinkButton>
          </Button>
          <Button size={'small'} variant={'outlined'}>
            <LinkButton>Code</LinkButton>
          </Button>
        </WrapperButton>
      </ImageWrapper>
      <Wrapper>
        <StyledTitle>{name}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </Wrapper>
      <StyledLink href={url}>See project</StyledLink>
    </StyledPortfolioItem>
  )
}

const StyledPortfolioItem = styled.div`
  background-color: ${theme.colors.primaryBg};
  border-radius: 24px;
  max-width: 540px;
  box-shadow: ${theme.shadow.main};
  padding-bottom: 20px;
  margin-bottom: 50px;
  position: relative;
`

const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0.9;
  transform: translate(-50%);
  z-index: -10;
`
const ImageWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-content: center;
  position: relative;
  &:hover {
    &::before {
      content: '';
      position: absolute;
      top: 9px;
      left: 8px;
      right: 8px;
      bottom: 9px;
      backdrop-filter: blur(4px);
      background: rgba(0, 0, 0, 0.6);
    }
    ${WrapperButton} {
      z-index: 10;
    }
  }
`

const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
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
  padding-top: 20px;
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
  position: absolute;
  bottom: 20px;
  left: 20px;
`

const LinkButton = styled.a`
  font-size: 16px;
`
