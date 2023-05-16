import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import * as styles from './Collapse.module.css'

const Collapse = ({ children, title = 'title' }) => {
  const [isClosed, setIsClosed] = useState(true)
  const [contentHeight, setContentHeight] = useState(null)

  const contentRef = useRef()

  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight)
  }, [])

  return (
    <div>
      <div
        onClick={() => setIsClosed(!isClosed)}
        className={`${styles.title} font-heading ${
          isClosed ? '' : styles.closed
        }`}
      >
        <div className={styles.title_text}>{title} </div>
      </div>
      <div
        className={`${styles.content} ${isClosed ? styles.closed : ''}`}
        style={{ maxHeight: isClosed ? 0 : contentHeight }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Collapse
