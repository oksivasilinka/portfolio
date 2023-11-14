import { Icon } from 'components/icon/icon'
import styled from 'styled-components'

type Icons = {
  url: string
  idIcon: string
  id: string
}

type Props = {
  icons: Icons[]
}

export const SocialIcons = ({ icons }: Props) => {
  return (
    <SocialIconsList>
      {icons.map((icon) => (
        <SocialItem key={icon.id}>
          <SocialIconLink>
            <Icon width={'40'} height={'40'} id={icon.idIcon} />
          </SocialIconLink>
        </SocialItem>
      ))}
    </SocialIconsList>
  )
}

const SocialIconsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 30px;
`
const SocialItem = styled.li``

const SocialIconLink = styled.a``
