import { SectionTitle } from 'components/section-title/section-title'
import { PortfolioItem } from 'layout/sections/portfolio/portfolioItem/portfolioItem'
import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'
import { Container } from 'components/container/container'

const projects = [
  {
    name: 'Learning Platform',
    url: '#',
    description:
      'This application is designed for effective learning through flashcards that contain questions and answers. Users can create their own sets of flashcards or utilize pre-made decks. The application also allows adding images and videos to the flashcards to enhance information retention.',
  },
  {
    name: 'Friend Connect',
    url: '#',
    description:
      'Friend Connect is a web application that serves as a social networking platform. It provides users with a platform to connect, interact, and share content with friends and acquaintances. With personalized profiles, messaging functionality, and news feeds, Friend Connect creates a vibrant online community where users can stay connected and engage with their social circles.',
  },
  {
    name: 'Home Style Store',
    url: '#',
    description:
      'Home Style Store is an online furniture store application that offers a wide selection of modern furniture and home decor products. The application features an attractive and user-friendly interface, allowing customers to easily find and purchase the desired items.',
  },
  {
    name: 'Check Flow',
    url: '#',
    description:
      'The "Check Flow" project provides a convenient interface for creating, editing, deleting, and displaying tasks and to-do lists. Users can easily add new tasks, set their completion status, modify deadlines, and priorities.',
  },
]

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Container>
        <SectionTitle>Portfolio</SectionTitle>

        <FlexWrapper wrap={'wrap'} justify={'space-around'} align={'stretch'}>
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
