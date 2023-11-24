import { FlexWrapper, Icon } from 'components'
import { S } from './skill_styles'

type Props = {
  title: string
  idIcon: string
}

export const Skill = ({ title, idIcon }: Props) => {
  return (
    <FlexWrapper direction={'column'} align={'center'}>
      <S.IconWrapper>
        <Icon id={idIcon} />
      </S.IconWrapper>
      <S.SkillTitle>{title}</S.SkillTitle>
    </FlexWrapper>
  )
}
