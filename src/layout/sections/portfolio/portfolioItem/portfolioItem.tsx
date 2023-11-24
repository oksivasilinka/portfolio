import styled from 'styled-components'
import { theme } from 'styles/theme'
import { Button } from 'components/button/button'
import { font } from 'styles/common'

type Props = {
  name: string
  photo: string
  description: string
  url: string
}

export const PortfolioItem = ({ name, description, url, photo }: Props) => {
  return (
    <StyledPortfolioItem>
      <ImageWrapper>
        <Photo src={photo} alt={'photo'} />
        <WrapperButton>
          <Button>
            <LinkButton>Demo</LinkButton>
          </Button>
          <Button variant={'outlined'}>
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
  max-width: 500px;
  width: 370px;
  box-shadow: ${theme.shadow.main};
  flex-grow: 1;
  padding-bottom: 20px;
  margin-bottom: 20px;
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

  &::before {
    content: '';
    position: absolute;
    top: 9px;
    left: 8px;
    right: 8px;
    bottom: 9px;
    backdrop-filter: blur(4px);
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${WrapperButton} {
      z-index: 10;
    }
  }

  @media ${theme.media.tablet} {
    &:before {
      opacity: 1;
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
  ${font({ color: theme.colors.accent, weight: 700, max: 26, min: 20, lineHeight: 0.9 })};
`

const StyledDescription = styled.p`
  padding-top: 20px;
  font-size: 14px;
`

const Photo = styled.img`
  border-radius: 24px;
  padding: 10px;
  width: 100%;
  object-fit: cover;
  height: 270px;
`
const StyledLink = styled.a`
  text-decoration: underline;
  position: absolute;
  bottom: 20px;
  left: 20px;
  ${font({ color: theme.colors.accent, max: 16, min: 14 })};
`

const LinkButton = styled.a`
  font-size: 16px;
`
