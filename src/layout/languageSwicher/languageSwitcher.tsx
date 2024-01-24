import { Button } from 'components'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [isShowButton, setIsShowButton] = useState(true)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY < 60) {
        setIsShowButton(true)
      } else {
        setIsShowButton(false)
      }
    })
  }, [])

  const { i18n } = useTranslation()
  const onChangeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setSelectedLanguage(language)
  }

  return (
    <AnimatePresence>
      {isShowButton && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <LanguageSwitcherStyled>
            <Button
              variant={'text'}
              active={selectedLanguage === 'en'}
              value={'en'}
              onClick={() => onChangeLanguage('en')}
            >
              EN
            </Button>
            <Button
              variant={'text'}
              active={selectedLanguage === 'ru'}
              value={'ru'}
              onClick={() => onChangeLanguage('ru')}
            >
              RU
            </Button>
          </LanguageSwitcherStyled>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const LanguageSwitcherStyled = styled.div`
  position: absolute;
  top: 120px;
  right: 10px;
  box-shadow: ${theme.shadow.main};
  border-radius: 10px;

  z-index: 9998;
  @media ${theme.media.tablet} {
    box-shadow: none;
    top: 10px;
    left: 10px;
    z-index: 9999;
    display: flex;
  }
`
