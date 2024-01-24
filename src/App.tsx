import { Header } from 'layout/header/header'
import { Main } from 'layout/sections/main/main'
import { Skills } from 'layout/sections/skills/skills'
import { AboutMe } from 'layout/sections/about-me/about-me'
import { Portfolio } from 'layout/sections/portfolio/portfolio'
import { Contacts } from 'layout/sections/contacts/contacts'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { Footer } from 'layout/sections/footer/footer'
import { Particle } from 'components/particle/particle'
import { GoTopButton } from 'components/go-top-button/go-top-button'
import { Cursor } from 'components/cursor/cursor'
import { LanguageSwitcher } from 'layout/languageSwicher/languageSwitcher'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cursor />
      <Particle />
      <Header />
      <LanguageSwitcher />
      <Main />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
      <Footer />
      <GoTopButton />
    </ThemeProvider>
  )
}

export default App
