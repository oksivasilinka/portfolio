import { Button } from 'components'
import { S } from './project_styles'
import { useTranslation } from 'react-i18next'

type Props = {
  name: string
  photo: string
  description: string
  demo: string
  code: string
}

export const Project = ({ name, description, demo, code, photo }: Props) => {
  const { t } = useTranslation()
  return (
    <S.Project>
      <S.ImageWrapper>
        <S.Photo src={photo} alt={name} />
        <S.ButtonWrapper>
          <Button>
            <a href={demo}>{t('buttonDemo', { ns: 'portfolio' })}</a>
          </Button>
          <Button variant={'outlined'}>
            <a href={code}>{t('buttonCode', { ns: 'portfolio' })}</a>
          </Button>
        </S.ButtonWrapper>
      </S.ImageWrapper>
      <S.InfoWrapper>
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
      </S.InfoWrapper>
      <S.Link href={demo}>{t('LinkView', { ns: 'portfolio' })}</S.Link>
    </S.Project>
  )
}
