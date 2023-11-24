import { Button } from 'components'
import { S } from './project_styles'

type Props = {
  name: string
  photo: string
  description: string
  demo: string
  code: string
}

export const Project = ({ name, description, demo, code, photo }: Props) => {
  return (
    <S.Project>
      <S.ImageWrapper>
        <S.Photo src={photo} alt={'photo'} />
        <S.ButtonWrapper>
          <Button>
            <a href={demo}>Demo</a>
          </Button>
          <Button variant={'outlined'}>
            <a href={code}>Code</a>
          </Button>
        </S.ButtonWrapper>
      </S.ImageWrapper>
      <S.InfoWrapper>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>
      <S.Link href={demo}>See project</S.Link>
    </S.Project>
  )
}
