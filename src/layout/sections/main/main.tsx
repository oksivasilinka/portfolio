import photo from 'assets/SAVE_20200927_223544.webp'
import styled from 'styled-components'
import { FlexWrapper } from 'components/flex-wrapper'

export const Main = () => {
  return (
    <FlexWrapper justify={'center'} align={'center'}>
      <Photo src={photo} alt={'main-photo'} />
      <FlexWrapper direction={'column'} align={'start'}>
        <span>Oksana Kovalchuk</span>
        <h1>Frontend Developer, Minsk</h1>
      </FlexWrapper>
    </FlexWrapper>
  )
}

const Photo = styled.img`
  width: 310px;
  object-fit: cover;
`
