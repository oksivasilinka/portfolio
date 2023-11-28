import { Icon } from 'components'
import { S } from './social-icons_styles'

type Icons = {
  url: string
  id: string
}

type Props = {
  icons: Icons[]
}

export const SocialIcons = ({ icons }: Props) => {
  return (
    <S.IconsList>
      {icons.map((icon) => (
        <S.Icon key={icon.id}>
          <S.Link href={icon.url}>
            <Icon width={'30'} height={'30'} viewBox={'0 0 30 30'} id={icon.id} />
          </S.Link>
        </S.Icon>
      ))}
    </S.IconsList>
  )
}
