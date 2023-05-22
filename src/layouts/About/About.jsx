/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { Collapse } from '@components'
import * as styles from './About.module.css'

const About = () => {
  const [showImages, setShowImages] = useState(false)

  const texts = [
    'Son, brother, friend, and a lot more (CS student & pseudo-pianist).',
    '19 years old, living and in Guatemala and studying at UVG.',
    'When I was born I was given the name Samuel, and you can call me like that.',
  ]

  return (
    <Collapse title="Who I am?" change={showImages}>
      <div className={`${styles.container_max} font-body`}>
        <div className={styles.container}>
          {texts.map((text) => (
            <p className={`${styles.text} ${showImages ? styles.show : ''}`}>
              {text}
            </p>
          ))}
        </div>
        <button
          className={`${showImages ? styles.active : ''} font-button`}
          type="button"
          onClick={() => setShowImages((prev) => !prev)}
        >
          {showImages ? 'Hide' : 'Show'} @#$%^&*
        </button>
      </div>
    </Collapse>
  )
}

export default About
