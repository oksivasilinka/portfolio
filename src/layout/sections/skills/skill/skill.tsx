import styled from 'styled-components'
import { theme } from 'styles/theme'
import { FlexWrapper, Icon } from 'components'

type Props = {
  title: string
  idIcon: string
}

export const Skill = ({ title, idIcon }: Props) => {
  return (
    <FlexWrapper direction={'column'} align={'center'}>
      <IconWrapper>
        <Icon id={idIcon} />
      </IconWrapper>
      <StyledSkillTitle>{title}</StyledSkillTitle>
    </FlexWrapper>
  )
}

const StyledSkillTitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  padding-top: 20px;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 100%;
  box-shadow: ${theme.shadow.main};
`
