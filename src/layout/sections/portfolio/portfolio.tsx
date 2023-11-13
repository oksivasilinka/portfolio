import { SectionTitle } from 'components/section-title/section-title'
import { PortfolioItem } from 'layout/sections/portfolio/portfolioItem/portfolioItem'
import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'

const projects = [
  {
    name: 'Tasks Manager',
    url: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus fugiat illum itaque labore minus\n' +
      '        sapiente totam voluptates. Accusamus accusantium aut consectetur dolores eligendi id ipsam perferendis quae\n' +
      '        rerum voluptates.',
  },
  {
    name: 'Social Network',
    url: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus fugiat illum itaque labore minus\n' +
      '        sapiente totam voluptates. Accusamus accusantium aut consectetur dolores eligendi id ipsam perferendis quae\n' +
      '        rerum voluptates.',
  },
  {
    name: 'Online Store',
    url: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus fugiat illum itaque labore minus\n' +
      '        sapiente totam voluptates. Accusamus accusantium aut consectetur dolores eligendi id ipsam perferendis quae\n' +
      '        rerum voluptates.',
  },
  {
    name: 'Cards',
    url: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus fugiat illum itaque labore minus\n' +
      '        sapiente totam voluptates. Accusamus accusantium aut consectetur dolores eligendi id ipsam perferendis quae\n' +
      '        rerum voluptates.',
  },
]

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <SectionTitle>Portfolio</SectionTitle>
      <FlexWrapper gap={'35px 45px'} wrap={'wrap'} justify={'center'}>
        {projects.map((project) => (
          <PortfolioItem name={project.name} key={project.name} description={project.description} url={project.url} />
        ))}
      </FlexWrapper>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.section`
  background-color: pink;
  padding: 0 20%;
  min-height: 100vh;
`
