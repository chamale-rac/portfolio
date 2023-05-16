import React from 'react'
import * as styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.logo}`}>
        <h1 className="font-subtitle">SCHR</h1>
      </div>
      <div className={`${styles.options} font-button`}>
        <ul>Work</ul>
        <ul>About</ul>
        <ul>Contact</ul>
      </div>
    </div>
  )
}

export default NavBar
