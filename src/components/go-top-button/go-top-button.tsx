import styled from 'styled-components'
import { Icon } from 'components/icon'
import { theme } from 'styles/theme'
import { animateScroll as scroll } from 'react-scroll'
import { useEffect, useState } from 'react'

export const GoTopButton = () => {
  const [isShowButton, setIsShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsShowButton(true)
      } else {
        setIsShowButton(false)
      }
    })
  }, [])

  return (
    <>
      {isShowButton && (
        <StyledGoTopButton onClick={scroll.scrollToTop}>
          <Icon id={'arrowTop'} height={'40'} width={'40'} viewBox={'0 0 40 40'} />
        </StyledGoTopButton>
      )}
    </>
  )
}

const StyledGoTopButton = styled.button`
  position: fixed;
  background-color: ${theme.colors.primaryBg};
  border-radius: 100%;
  box-shadow: 0 0 20px 20px rgba(12, 7, 10, 0.8);
  right: 30px;
  bottom: 30px;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    scale: 1.2;
    transition: 1s;
  }
`
