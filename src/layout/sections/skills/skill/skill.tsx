import { FlexWrapper } from 'components/flex-wrapper'
import styled from 'styled-components'
import { Icon } from 'components/icon/icon'
import { theme } from 'styles/theme'

type Props = {
  title: string
  idIcon: string
}

export const Skill = ({ title, idIcon }: Props) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={'column'} gap={'30px'} align={'center'}>
        <IconWrapper>
          <Icon id={idIcon} />
        </IconWrapper>
        <StyledSkillTitle>{title}</StyledSkillTitle>
      </FlexWrapper>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  width: 100px;
`

const StyledSkillTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
`

const IconWrapper = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: -18px;
    left: -15px;
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 100%;
    box-shadow: ${theme.shadow.main};
  }
`
