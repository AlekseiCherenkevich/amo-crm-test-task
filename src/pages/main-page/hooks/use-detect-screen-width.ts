import { useEffect, useState } from 'react'

export const useDetectScreenWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const detectWidth = () => setWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', detectWidth)

    return () => {
      window.removeEventListener('resize', detectWidth)
    }
  }, [])

  return width
}
