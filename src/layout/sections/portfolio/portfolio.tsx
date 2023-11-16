import { SectionTitle } from 'components/section-title/section-title'
import { PortfolioItem } from 'layout/sections/portfolio/portfolioItem/portfolioItem'
import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import { Container } from 'components/container/container'

const projects = [
  {
    name: 'Tasks Manager',
    url: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus fugiat illum itaque labore minus\n' +
      '        sapiente totam voluptates. Accusamus accusantium aut consectetur dolores eligendi id ipsam perferendis quae\n' +
      '        rerum voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  },
  {
    name: 'Social Network',
    url: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus fugiat illum itaque labore minus\n' +
      '        sapiente totam voluptates. ',
  },
  {
    name: 'Online Store',
    url: '#',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus fugiat illum itaque labore minus\n' +
      '        sapiente totam voluptates. Accusamus accusantium aut consectetur dolores eligendi id ipsam perferendis quae\n' +
      '        rerum voluptates.Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
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
      <Container>
        <SectionTitle>Portfolio</SectionTitle>

        <FlexWrapper wrap={'wrap'} justify={'space-around'}>
          {projects.map((project) => (
            <PortfolioItem name={project.name} key={project.name} description={project.description} url={project.url} />
          ))}
        </FlexWrapper>
      </Container>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.section`
  min-height: 100vh;
`
