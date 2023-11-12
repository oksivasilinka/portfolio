import styled from 'styled-components'
import { SectionTitle } from 'components/section-title/section-title'
import { FlexWrapper } from 'components/flex-wrapper'
import { Skill } from 'layout/sections/skills/skill/skill'

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
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper justify={'center'} gap={'50px'} wrap={'wrap'}>
        {skills.map((skill) => (
          <Skill key={skill.id} title={skill.title} idIcon={skill.idIcon} />
        ))}
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  background-color: darkseagreen;
  min-height: 50vh;
  padding: 0 15%;
`
