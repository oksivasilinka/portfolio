import { Icon } from 'components'
import styled from 'styled-components'
import { theme } from 'styles/theme'

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
            <Icon width={'30'} height={'30'} viewBox={'0 0 30 30'} id={icon.id} />
          </SocialIconLink>
        </SocialItem>
      ))}
    </SocialIconsList>
  )
}

const SocialIconsList = styled.ul`
  display: flex;
  gap: 50px;
  width: 100%;
  justify-content: center;
  padding-bottom: 20px;
  @media ${theme.media.mobile} {
    padding-bottom: 30px;
  }
`
const SocialItem = styled.li`
  &:hover {
    transform: scale(1.2);
  }
`

const SocialIconLink = styled.a`
  color: ${theme.colors.accent};

  &:hover {
    color: ${theme.colors.font};
  }
`
