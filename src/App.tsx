import { Header } from 'layout/header/header'
import { Main } from 'layout/sections/main/main'
import { Skills } from 'layout/sections/skills/skills'
import { AboutMe } from 'layout/sections/about-me/about-me'
import { Portfolio } from 'layout/sections/portfolio/portfolio'
import { Contacts } from 'layout/sections/contacts/contacts'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </ThemeProvider>
  )
}

export default App
