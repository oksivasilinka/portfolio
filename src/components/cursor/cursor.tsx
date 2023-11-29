import AnimatedCursor from 'react-animated-cursor'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

export const Cursor = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakPoint = 768

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <StyledCursor>
      {width > breakPoint && (
        <AnimatedCursor
          innerSize={10}
          outerSize={25}
          innerScale={1.5}
          outerScale={1.3}
          innerStyle={{
            backgroundColor: theme.colors.font,
          }}
          outerStyle={{
            backgroundColor: ' rgba(158, 255, 0, 0.3)',
          }}
        />
      )}
    </StyledCursor>
  )
}

const StyledCursor = styled.div`
  position: relative;
  z-index: 99999999999;
`
