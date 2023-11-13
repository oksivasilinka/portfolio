import './App.css'
import { Header } from 'layout/header/header'
import { Main } from 'layout/sections/main/main'
import { Skills } from 'layout/sections/skills/skills'
import { AboutMe } from 'layout/sections/about-me/about-me'
import { Portfolio } from 'layout/sections/portfolio/portfolio'
import { Contacts } from 'layout/sections/contacts/contacts'

function App() {
  return (
    <>
      <Header />
      <Main />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </>
  )
}

export default App
