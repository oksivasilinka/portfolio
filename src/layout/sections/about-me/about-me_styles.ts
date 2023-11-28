import styled from 'styled-components'
import { SectionText } from 'components'
import { theme } from 'styles/theme'

const AboutMe = styled.section`
  position: relative;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;

  ${SectionText} {
    display: grid;
    align-items: center;
  }
`
const Photo = styled.img`
  width: 100%;
  border-radius: 24px;
  box-shadow: ${theme.shadow.main};
`

export const S = { AboutMe, Wrapper, Photo }
