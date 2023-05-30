/* eslint-disable no-unused-vars */
import React from 'react'
import { useSnapshot } from 'valtio'
import { collapseToggle } from '@proxies'
import { useActiveComponentId, useScrollToElement } from '@hooks'
import { navHeight } from '@config'
import * as styles from './NavBar.module.css'
/*ASDASDASD */

const sections = ['About', 'Work', 'Contact']

const NavBar = () => {
  const collapseToggleSnap = useSnapshot(collapseToggle)
  const activeComponentId = useActiveComponentId()
  const [elementRef, scrollToElement] = useScrollToElement(navHeight)

  const handleClick = (id, delay = 0) => {
    collapseToggle.associatedId = id
    collapseToggle.toggleInstant = !collapseToggleSnap.toggleInstant
    scrollToElement(id, delay)
  }

  return (
    <div className={`${styles.container}`}>
      <div
        className={`${styles.logo}`}
        onClick={() => handleClick('display', 0)}
      >
        <h1 className="font-subtitle">SCHR</h1>
      </div>
      <div className={`${styles.options} font-button`}>
        {sections.map((section) => (
          <ul
            onClick={() => handleClick(section.toLowerCase(), 700)}
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
