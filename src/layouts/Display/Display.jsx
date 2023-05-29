/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react'
import { useScrollToElement } from '@hooks'
import { navHeight } from '@config'
import phrases from '@data/phrases.json'
import * as styles from './Display.module.css'

// TODO make this responsive
const Display = () => {
  const [text, setText] = useState(phrases[0])
  const [elementRef, scrollToElement] = useScrollToElement(navHeight)

  const [typedText, setTypedText] = useState(null)
  const [isTyping, setIsTyping] = useState(true)

  const [isFirstTime, setIsFirstTime] = useState(true)
  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length)
      const newWord = phrases[randomIndex]
      setIsTyping(true)
      setIsFirstTime(false)
      for (let i = 0; i <= newWord.length; i += 1) {
        setTimeout(() => {
          setTypedText(newWord.slice(0, i))
          if (i === newWord.length) {
            setIsTyping(false)
            setTimeout(() => {
              setIsTyping(true)
              for (let j = newWord.length; j >= 0; j -= 1) {
                setTimeout(() => {
                  setTypedText(newWord.slice(0, j))
                  if (j === 0) {
                    setIsTyping(false)
                  }
                }, (newWord.length - j) * 30)
              }
            }, 1000)
          }
        }, i * 30)
      }
      setText(newWord)
    }, 3500)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className="font-heading">
          This is{isFirstTime ? '' : ' '}
          {typedText}
          {isTyping && (isFirstTime ? '?' : '|')}
        </h1>
        <button
          type="button"
          onClick={() => scrollToElement('hero')}
          className="font-subtitle"
        >
          Begin Here
        </button>
      </div>
    </div>
  )
}

export default Display
