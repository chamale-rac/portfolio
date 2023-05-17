import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './Section.module.css'

const Section = ({ children, isSticky = false }) => {
  return (
    <div
      style={{
        position: isSticky ? 'sticky' : 'relative',
        top: isSticky ? 0 : 'auto',
        zIndex: isSticky ? 2 : 'auto',
      }}
      className={`${styles.container}`}
    >
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  isSticky: PropTypes.bool.isRequired,
}

export default Section
