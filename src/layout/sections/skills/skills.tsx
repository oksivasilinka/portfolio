import styled from 'styled-components'
import { SectionTitle } from 'components/section-title/section-title'
import { FlexWrapper } from 'components/flex-wrapper'
import { Skill } from 'layout/sections/skills/skill/skill'
import { Container } from 'components/container/container'

const skills = [
  { id: 1, idIcon: 'react', title: 'React' },
  { id: 2, idIcon: 'react', title: 'React' },
  { id: 3, idIcon: 'react', title: 'React' },
  { id: 4, idIcon: 'react', title: 'React' },
  { id: 5, idIcon: 'react', title: 'React' },
  { id: 6, idIcon: 'react', title: 'React' },
  { id: 7, idIcon: 'react', title: 'React' },
  { id: 8, idIcon: 'react', title: 'React' },
  { id: 9, idIcon: 'react', title: 'React' },
  { id: 10, idIcon: 'react', title: 'React' },
  { id: 11, idIcon: 'react', title: 'React' },
  { id: 12, idIcon: 'react', title: 'React' },
]

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <SkillsWrapper>
          <FlexWrapper justify={'center'} gap={'50px'} wrap={'wrap'}>
            {skills.map((skill) => (
              <Skill key={skill.id} title={skill.title} idIcon={skill.idIcon} />
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
