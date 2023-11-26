import { DesktopMenu } from 'layout/header/header-menu/desktop-menu/desktop-menu'
import { Container } from 'components'
import { S } from './header_styles'
import { MobileMenu } from 'layout/header/header-menu/mobile-menu/mobile-menu'
import { useEffect, useState } from 'react'

export type MenuItem = { href: string; title: string }
const menuItems = [
  { href: 'home', title: 'Home' },
  { href: 'aboutMe', title: 'About Me' },
  { href: 'skills', title: 'Skills' },
  { href: 'portfolio', title: 'Portfolio' },
  { href: 'contacts', title: 'Contacts' },
]

export const Header = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakPoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <S.Header>
      <Container>
        {width > breakPoint ? <DesktopMenu menuItems={menuItems} /> : <MobileMenu menuItems={menuItems} />}
      </Container>
    </S.Header>
  )
}
