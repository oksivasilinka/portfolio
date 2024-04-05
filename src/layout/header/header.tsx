import { DesktopMenu } from 'layout/header/header-menu/desktop-menu/desktop-menu'
import { Container } from 'components'
import { S } from './header_styles'
import { MobileMenu } from 'layout/header/header-menu/mobile-menu/mobile-menu'
import { useTranslation } from 'react-i18next'

export type MenuItem = { href: string; title: string }

type Props = {
  isMobile: boolean
}

export const Header = ({ isMobile }: Props) => {
  const { t } = useTranslation()

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
        {isMobile && <MobileMenu menuItems={menuItems} />}
        {!isMobile && <DesktopMenu menuItems={menuItems} />}
      </Container>
    </S.Header>
  )
}
