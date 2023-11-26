import styled from 'styled-components'
import { Skill } from 'layout/sections/skills/skill/skill'
import { theme } from 'styles/theme'
import { Container, FlexWrapper, SectionTitle } from 'components'

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

const StyledSkills = styled.section``

const SkillsWrapper = styled.div`
  padding-top: 50px;
  z-index: 10;
  background-color: rgba(12, 7, 10, 0.9);
  position: relative;
  -webkit-box-shadow: 0 0 32px 25px rgba(12, 7, 10, 0.96);
  -moz-box-shadow: 0 0 32px 25px rgba(12, 7, 10, 0.96);
  box-shadow: 0 0 32px 25px rgba(12, 7, 10, 0.96);
  border-radius: 24px;
  @media ${theme.media.tablet} {
    padding-top: 20px;
  }
`
