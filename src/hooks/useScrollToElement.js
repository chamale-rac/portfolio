import { useRef } from 'react'

const useScrollToElement = (scrollUpVh) => {
  const elementRef = useRef(null)

  const scrollToElement = (id) => {
    console.log(scrollUpVh)
    console.log('scrollToElement')
    const element = document.getElementById(id)
    console.log(element)
    if (element) {
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset
      console.log(elementTop)
      window.scrollTo({ top: elementTop, behavior: 'smooth' })
      const scrollUpPx = Math.round((scrollUpVh * window.innerHeight) / 100)
      // TODO this line is not working
      window.scrollBy({ top: -20, behavior: 'smooth' })
    }
  }

  return [elementRef, scrollToElement]
}

export default useScrollToElement
