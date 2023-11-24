import styled from 'styled-components'
import { theme } from 'styles/theme'
import { font } from 'styles/common'

const Main = styled.section`
  padding-top: 130px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media ${theme.media.tablet} {
    padding-top: 70px;
  }
`

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 3fr 2fr;
  column-gap: 50px;
  align-content: center;
  @media ${theme.media.tablet} {
    justify-content: center;
    grid-template-columns: unset;
    grid-auto-rows: unset;
    row-gap: 40px;
  }
`

const Photo = styled.img`
  margin: 0 auto;
  max-width: 400px;
  width: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: ${theme.shadow.main};
  grid-row-start: 1;
  grid-row-end: 3;
  @media ${theme.media.tablet} {
    grid-row-start: unset;
    grid-row-end: unset;
  }
`

const Name = styled.h2`
  ${font({ color: theme.colors.accent, weight: 800, max: 50, min: 34 })};
`

const MainTitle = styled.h1`
  ${font({ weight: 700, max: 40, min: 30 })};
  padding-top: 30px;
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-content: start;
  padding-top: 20px;
  width: 100%;
  @media ${theme.media.tablet} {
    padding-top: 0;
  }
`

const InfoWrapper = styled.div`
  display: grid;
  align-content: center;
  @media ${theme.media.tablet} {
    grid-row-start: 1;
  }
`

export const S = { Main, MainWrapper, Photo, InfoWrapper, Name, MainTitle, ButtonWrapper }