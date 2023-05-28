import { useEffect, useState } from 'react'

const useActiveComponentId = () => {
  const [activeComponentId, setActiveComponentId] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      const centerOfViewportX = window.innerWidth / 2
      const centerOfViewportY = window.innerHeight / 2
      const elementAtCenterOfViewport = document.elementFromPoint(
        centerOfViewportX,
        centerOfViewportY - centerOfViewportY / 2,
      )

      if (elementAtCenterOfViewport) {
        const closestComponent = elementAtCenterOfViewport.closest('[id]')

        if (closestComponent) {
          setActiveComponentId(closestComponent.id)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return activeComponentId
}

export default useActiveComponentId
