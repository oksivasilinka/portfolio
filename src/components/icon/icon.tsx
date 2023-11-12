import IconSprite from 'assets/icons-sprite.svg'

type Props = {
  id: string
}

export const Icon = ({ id }: Props) => {
  return (
    <svg width="50" height="45" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${IconSprite}#${id}`} />
    </svg>
  )
}
