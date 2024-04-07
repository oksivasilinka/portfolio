import styled from 'styled-components'
import { theme } from 'styles/theme'

const SkillTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  padding-top: 20px;
  z-index: 10;
  max-width: 110px;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  box-shadow: ${theme.shadow.main};
  background-color: ${theme.colors.primaryBg};
  z-index: 10;
`

export const S = { IconWrapper, SkillTitle }
