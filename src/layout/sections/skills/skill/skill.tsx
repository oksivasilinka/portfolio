import { FlexWrapper } from 'components/flex-wrapper'
import styled from 'styled-components'
import { Icon } from 'components/icon/icon'

type Props = {
  title: string
  idIcon: string
}

export const Skill = ({ title, idIcon }: Props) => {
  return (
    <StyledSkill>
      <FlexWrapper direction={'column'} gap={'30px'} align={'center'}>
        <Icon id={idIcon} />
        <StyledSkillTitle>{title}</StyledSkillTitle>
      </FlexWrapper>
    </StyledSkill>
  )
}

const StyledSkill = styled.div`
  background-color: cornflowerblue;
  margin: 50px;
  width: 100px;
`

const StyledSkillTitle = styled.h3``
