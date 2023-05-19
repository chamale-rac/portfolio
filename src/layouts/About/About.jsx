/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Collapse } from '@components'
import * as styles from './About.module.css'

const About = () => {
  return (
    <Collapse title="Me">
      <div className={styles.about}>
        <div className={styles.about_text}>
          <p className="font-body">
            I'm a 19 years old student of Computer Science at{' '}
            <a
              href="https://www.uvg.edu.gt/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'black' }}
            >
              Universidad del Valle de Guatemala.
            </a>
          </p>
          <p className="font-body">
            I'm passionate about web development, UI/UX, and nobby illustration.
          </p>
          <p className="font-body">
            Thanks, thats all you need to know about me.
          </p>
        </div>
        <div className={styles.about_images}>
          <img src="/about/me.jpeg" alt="me" />
          <img src="/public/about/char.jpeg" alt="char" />
          <img src="/public/about/text.jpeg" alt="text" />
        </div>
      </div>
    </Collapse>
  )
}

export default About
