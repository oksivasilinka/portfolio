import styled from 'styled-components'

type Props = {
  direction?: 'column' | 'row'
  justify?: 'center' | 'space-between' | 'start' | 'end'
  align?: string
  wrap?: string
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
