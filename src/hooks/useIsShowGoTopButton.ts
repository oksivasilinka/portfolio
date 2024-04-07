import { useEffect, useState } from 'react'

const useIsShowGoTopButton = (): boolean => {
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
  return isShowButton
}

export default useIsShowGoTopButton
