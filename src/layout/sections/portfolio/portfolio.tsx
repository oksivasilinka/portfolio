import { Project } from 'layout/sections/portfolio/project/project'
import styled from 'styled-components'
import imgCards from 'assets/portfolio/cards.webp'
import imgTasks from 'assets/portfolio/tasks.webp'
import imgNetwork from 'assets/portfolio/network.webp'
import imgHomeStore from 'assets/portfolio/homeStore.webp'
import { Container, FlexWrapper, SectionTitle } from 'components'
import { Fade } from 'react-awesome-reveal'

const projects = [
  {
    name: 'Learning Platform',
    demo: 'https://it-inc-cards.vercel.app',
    code: 'https://github.com/r2adler/it-inc-cards',
    photo: imgCards,
    description:
      'This application is designed for effective learning through flashcards that contain questions and answers. Users can create their own sets of flashcards or utilize pre-made decks. The application also allows adding images and videos to the flashcards to enhance information retention.',
  },
  {
    name: 'Friend Connect',
    demo: 'https://oksivasilinka.github.io/friendConnect',
    code: 'https://github.com/oksivasilinka/friendConnect',
    photo: imgNetwork,
    description:
      'Friend Connect is a web application that serves as a social networking platform. It provides users with a platform to connect, interact, and share content with friends and acquaintances. With personalized profiles, messaging functionality, and news feeds, Friend Connect creates a vibrant online community where users can stay connected and engage with their social circles.',
  },
  {
    name: 'Check Flow',
    demo: 'https://oksivasilinka.github.io/checkFlow',
    code: 'https://github.com/oksivasilinka/checkFlow',
    photo: imgTasks,
    description:
      'The "Check Flow" project provides a convenient interface for creating, editing, deleting, and displaying tasks and to-do lists. Users can easily add new tasks, set their completion status, modify deadlines, and priorities.',
  },
  {
    name: 'Home Store',
    demo: 'https://home-store-rouge.vercel.app/',
    code: 'https://github.com/oksivasilinka/homeStore',
    photo: imgHomeStore,
    description: 'HomeStore is an online furniture store that is under active development.',
  },
]

export const Portfolio = () => {
  return (
    <StyledPortfolio id={'portfolio'}>
      <Container>
        <SectionTitle>Portfolio</SectionTitle>
        <Fade>
          <FlexWrapper wrap={'wrap'} justify={'space-evenly'} gap={'20px'} align={'stretch'}>
            {projects.map((project) => (
              <Project
                name={project.name}
                key={project.name}
                description={project.description}
                demo={project.demo}
                code={project.code}
                photo={project.photo}
              />
            ))}
          </FlexWrapper>
        </Fade>
      </Container>
    </StyledPortfolio>
  )
}

const StyledPortfolio = styled.section`
  position: relative;
`
