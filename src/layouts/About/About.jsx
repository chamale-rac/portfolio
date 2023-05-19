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
            I'm a 19 years old student of Computer Science at Universidad del
            Valle de Guatemala. I'm passionate about web development, UI/UX, and
            nobby illustration. I'm also a pianist and 'retired' cyclist.
          </p>
        </div>
        <div className={styles.about_images}>
          <img src="/about/me.jpeg" alt="me" />
        </div>
      </div>
    </Collapse>
  )
}

export default About
