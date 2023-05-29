import { useRef } from 'react'

const useScrollToElement = (scrollUpVh) => {
  const elementRef = useRef(null)

  const scrollToElement = (id, delay = 0) => {
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.scrollY
        const scrollUpPx = Math.round((scrollUpVh * window.innerHeight) / 100)
        window.scrollTo({
          top: elementTop - scrollUpPx,
          behavior: 'smooth',
          acceleration: 0.1,
        })
      }
    }, delay)
  }

  return [elementRef, scrollToElement]
}

export default useScrollToElement
