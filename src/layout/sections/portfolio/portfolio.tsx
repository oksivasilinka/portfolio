import { SectionTitle } from 'components/section-title/section-title'
import { PortfolioItem } from 'layout/sections/portfolio/portfolioItem/portfolioItem'
import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <SectionTitle>Portfolio</SectionTitle>
      <FlexWrapper gap={'35px 45px'} wrap={'wrap'} justify={'center'}>
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </FlexWrapper>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.div`
  background-color: pink;
  padding: 0 20%;
  min-height: 100vh;
`
