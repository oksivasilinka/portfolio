import styled from 'styled-components'
import { Skill } from 'layout/sections/skills/skill/skill'
import { theme } from 'styles/theme'
import { Container, FlexWrapper, SectionTitle } from 'components'
import { Fade } from 'react-awesome-reveal'

const skills = [
  { idIcon: 'js', title: 'Java Script' },
  { idIcon: 'ts', title: 'Type Script' },
  { idIcon: 'react', title: 'React' },
  { idIcon: 'redux', title: 'Redux' },
  { idIcon: 'axios', title: 'Axios' },
  { idIcon: 'storybook', title: 'Storybook' },
  { idIcon: 'git', title: 'Git' },
  { idIcon: 'html', title: 'HTML' },
  { idIcon: 'css', title: 'CSS' },
  { idIcon: 'sass', title: 'SASS' },
  { idIcon: 'styled', title: 'Styled Components' },
]

export const Skills = () => {
  return (
    <StyledSkills id={'skills'}>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsWrapper>
          <FlexWrapper justify={'center'} gap={'50px'} wrap={'wrap'}>
            <Fade damping={0.1} direction={'up'}>
              {skills.map((skill) => (
                <Skill key={skill.idIcon} title={skill.title} idIcon={skill.idIcon} />
              ))}
            </Fade>
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
