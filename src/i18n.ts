import i18next from 'i18next'
import enMain from 'locales/en/enMain.json'
import ruMain from 'locales/ru/ruMain.json'
import enHeader from 'locales/en/enHeader.json'
import ruHeader from 'locales/ru/ruHeader.json'
import enAboutMe from 'locales/en/enAboutMe.json'
import ruAboutMe from 'locales/ru/ruAboutMe.json'
import enSkills from 'locales/en/enSkills.json'
import ruSkills from 'locales/ru/ruSkills.json'
import enPortfolio from 'locales/en/enPortfolio.json'
import ruPortfolio from 'locales/ru/ruPortfolio.json'
import enContacts from 'locales/en/enContacts.json'
import ruContacts from 'locales/ru/ruContacts.json'
import enFooter from 'locales/en/enFooter.json'
import ruFooter from 'locales/ru/ruFooter.json'
import { initReactI18next } from 'react-i18next'

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  defaultNS: 'ns1',
  fallbackNS: 'fallback',
  resources: {
    en: {
      header: enHeader,
      main: enMain,
      aboutMe: enAboutMe,
      skills: enSkills,
      portfolio: enPortfolio,
      contacts: enContacts,
      footer: enFooter,
    },
    ru: {
      header: ruHeader,
      main: ruMain,
      aboutMe: ruAboutMe,
      skills: ruSkills,
      portfolio: ruPortfolio,
      contacts: ruContacts,
      footer: ruFooter,
    },
  },
})

export default i18next
