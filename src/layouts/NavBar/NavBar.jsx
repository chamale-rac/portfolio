/* eslint-disable no-unused-vars */
import React from 'react'
import { useActiveComponentId, useScrollToElement } from '@hooks'
import { navHeight } from '@config'
import * as styles from './NavBar.module.css'

const sections = ['About', 'Work', 'Contact']

const NavBar = () => {
  const activeComponentId = useActiveComponentId()
  const [elementRef, scrollToElement] = useScrollToElement(navHeight)

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.logo}`}>
        <h1 className="font-subtitle">SCHR</h1>
      </div>
      <div className={`${styles.options} font-button`}>
        {sections.map((section) => (
          <ul
            onClick={() => scrollToElement(section.toLowerCase())}
            className={
              activeComponentId === section.toLowerCase()
                ? `${styles.active}`
                : ''
            }
          >
            {section}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default NavBar
