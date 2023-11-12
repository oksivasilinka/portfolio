import styled from 'styled-components'
import { SectionTitle } from 'components/section-title/section-title'
import { FlexWrapper } from 'components/flex-wrapper'
import { Skill } from 'layout/sections/skills/skill/skill'

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Skills</SectionTitle>
      <FlexWrapper justify={'center'} gap={'50px'} wrap={'wrap'}>
        <Skill title={'React'} idIcon={'react'} />
        <Skill title={'React'} idIcon={'react'} />
        <Skill title={'React'} idIcon={'react'} />
        <Skill title={'React'} idIcon={'react'} />
        <Skill title={'React'} idIcon={'react'} />
        <Skill title={'React'} idIcon={'react'} />
        <Skill title={'React'} idIcon={'react'} />
        <Skill title={'React'} idIcon={'react'} />
        <Skill title={'React'} idIcon={'react'} />
        <Skill title={'React'} idIcon={'react'} />
      </FlexWrapper>
    </StyledSkills>
  )
}

const StyledSkills = styled.section`
  background-color: darkseagreen;
  min-height: 100vh;
  padding: 0 150px;
`
