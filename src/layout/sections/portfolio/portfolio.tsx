import { Project } from 'layout/sections/portfolio/project/project'
import styled from 'styled-components'
import imgCards from 'assets/portfolio/cards.webp'
import imgTasks from 'assets/portfolio/tasks.webp'
import imgNetwork from 'assets/portfolio/network.webp'
import imgHomeStore from 'assets/portfolio/homeStore.webp'
import { Container, FlexWrapper, SectionTitle } from 'components'
import { Fade } from 'react-awesome-reveal'
import { useTranslation } from 'react-i18next'

export const Portfolio = () => {
  const { t } = useTranslation()

  const projects = [
    {
      name: 'Learning Platform',
      demo: 'https://it-inc-cards.vercel.app',
      code: 'https://github.com/r2adler/it-inc-cards',
      photo: imgCards,
      description: `${t('descriptionCards', { ns: 'portfolio' })}`,
    },
    {
      name: 'Friend Connect',
      demo: 'https://oksivasilinka.github.io/friendConnect',
      code: 'https://github.com/oksivasilinka/friendConnect',
      photo: imgNetwork,
      description: `${t('descriptionSocialNetwork', { ns: 'portfolio' })}`,
    },
    {
      name: 'Check Flow',
      demo: 'https://oksivasilinka.github.io/checkFlow',
      code: 'https://github.com/oksivasilinka/checkFlow',
      photo: imgTasks,
      description: `${t('descriptionCheckFlow', { ns: 'portfolio' })}`,
    },
    {
      name: 'Home Store',
      demo: 'https://home-store-rouge.vercel.app/',
      code: 'https://github.com/oksivasilinka/homeStore',
      photo: imgHomeStore,
      description: `${t('descriptionHomeStore', { ns: 'portfolio' })}`,
    },
  ]

  return (
    <StyledPortfolio id={'portfolio'}>
      <Container>
        <SectionTitle>{t('title', { ns: 'portfolio' })}</SectionTitle>
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
