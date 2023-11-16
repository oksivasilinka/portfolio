import styled from 'styled-components'
import { SectionTitle } from 'components/section-title/section-title'
import { FlexWrapper } from 'components/flex-wrapper'
import { Skill } from 'layout/sections/skills/skill/skill'
import { Container } from 'components/container/container'

const skills = [
  { idIcon: 'react', title: 'React' },
  { idIcon: 'redux', title: 'Redux' },
  { idIcon: 'js', title: 'Java Script' },
  { idIcon: 'git', title: 'Git' },
  { idIcon: 'html', title: 'HTML' },
  { idIcon: 'css', title: 'CSS' },
  { idIcon: 'sass', title: 'SASS' },
  { idIcon: 'styled', title: 'Styled Components' },
  { idIcon: 'ts', title: 'Type Script' },
  { idIcon: 'storybook', title: 'Storybook' },
  { idIcon: 'axios', title: 'Axios' },
]

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsWrapper>
          <FlexWrapper justify={'center'} gap={'50px'} wrap={'wrap'}>
            {skills.map((skill) => (
              <Skill key={skill.idIcon} title={skill.title} idIcon={skill.idIcon} />
            ))}
          </FlexWrapper>
        </SkillsWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  min-height: 50vh;
`

const SkillsWrapper = styled.div`
  padding: 50px 0;
`
