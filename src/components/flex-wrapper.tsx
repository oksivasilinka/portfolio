import styled from 'styled-components'

type Props = {
  direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
  justify?: 'center' | 'space-between' | 'flex-start' | 'space-around' | 'space-evenly'
  align?: 'stretch' | 'center' | 'start' | 'end'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: string
}
export const FlexWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'start'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  gap: ${(props) => props.gap || '0'};
  height: 100%;
`
