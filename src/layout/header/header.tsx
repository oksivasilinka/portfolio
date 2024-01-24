import { DesktopMenu } from 'layout/header/header-menu/desktop-menu/desktop-menu'
import { Container } from 'components'
import { S } from './header_styles'
import { MobileMenu } from 'layout/header/header-menu/mobile-menu/mobile-menu'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export type MenuItem = { href: string; title: string }

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakPoint = 768
  const { t } = useTranslation()

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  const menuItems = [
    { href: 'home', title: `${t('menuHome', { ns: 'header' })}` },
    { href: 'aboutMe', title: `${t('menuAboutMe', { ns: 'header' })}` },
    { href: 'skills', title: `${t('menuSkills', { ns: 'header' })}` },
    { href: 'portfolio', title: `${t('menuPortfolio', { ns: 'header' })}` },
    { href: 'contacts', title: `${t('menuContacts', { ns: 'header' })}` },
  ]

  return (
    <S.Header>
      <Container>
        {width > breakPoint ? <DesktopMenu menuItems={menuItems} /> : <MobileMenu menuItems={menuItems} />}
      </Container>
    </S.Header>
  )
}
