import { Icon } from 'components/icon/icon'
import styled from 'styled-components'

type Icons = {
  url: string
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
            <Icon width={'50'} height={'50'} viewBox={'0 0 50 50'} id={icon.id} />
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

const SocialIconLink = styled.button``
