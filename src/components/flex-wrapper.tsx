import styled from 'styled-components'

type Props = {
  direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse'
  justify?: 'center' | 'space-between' | 'start' | 'end' | 'space-around'
  align?: 'stretch' | 'center' | 'start' | 'end'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  gap?: string
}
export const FlexWrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'start'};
  align-items: ${(props) => props.align || 'stretch'};
  flex-wrap: ${(props) => props.wrap || 'nowrap'};
  gap: ${(props) => props.gap || '0'};
`
