import React from 'react'
import PropTypes from 'prop-types'
import * as styles from './Section.module.css'

const Section = ({ children, isSticky = false, htmlId = '' }) => {
  return (
    <div
      id={htmlId}
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
  htmlId: PropTypes.string.isRequired,
}

export default Section
