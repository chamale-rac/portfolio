import { useRef } from 'react'
// I know this is a bit of a hack, but it works for now
// the main problem with using href="#id" is that it will scroll to the element but actually my navbar is sticky
// so it will scroll to the element but the element will be hidden behind the navbar

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
