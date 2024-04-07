import styled from 'styled-components'
import { Icon } from 'components'
import { theme } from 'styles/theme'
import { animateScroll as scroll } from 'react-scroll'
import { AnimatePresence, motion } from 'framer-motion'
import useIsShowGoTopButton from 'hooks/useIsShowGoTopButton'

export const GoTopButton = () => {
  const isShowButton = useIsShowGoTopButton()

  return (
    <AnimatePresence>
      {isShowButton && (
        <StyledGoTopButton onClick={scroll.scrollToTop}>
          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 30, opacity: 0 }}>
            <Icon id={'arrowTop'} height={'40'} width={'40'} viewBox={'0 0 40 40'} />
          </motion.div>
        </StyledGoTopButton>
      )}
    </AnimatePresence>
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
    scale: 1.4;
    transition: ${theme.animations.transitions};
  }

  @media ${theme.media.tablet} {
    &:hover {
      scale: 1.05;
    }
  }
`
