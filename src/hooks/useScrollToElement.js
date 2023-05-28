import { useRef } from 'react'

const useScrollToElement = (scrollUpVh) => {
  const elementRef = useRef(null)

  const scrollToElement = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset
      const scrollUpPx = Math.round((scrollUpVh * window.innerHeight) / 100)
      window.scrollTo({ top: elementTop - scrollUpPx, behavior: 'smooth' })
    }
  }

  return [elementRef, scrollToElement]
}

export default useScrollToElement
