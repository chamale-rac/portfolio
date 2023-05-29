import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSnapshot } from 'valtio'
import { collapseToggle } from '@proxies'
import * as styles from './Collapse.module.css'

const Collapse = ({
  children,
  title = 'title',
  change = false,
  font = 'font-heading',
  index = null,
  changeFunction = null,
  closed = true,
  associatedId = null,
  isSection = false,
}) => {
  const collapseToggleSnap = useSnapshot(collapseToggle)
  const [isClosed, setIsClosed] = useState(closed)
  const [contentHeight, setContentHeight] = useState(null)

  const contentRef = useRef()

  // Add on resize listener
  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight)
  }, [isClosed])

  useEffect(() => {
    setTimeout(() => {
      setContentHeight(contentRef.current.scrollHeight)
    }, 1000)
  }, [change])

  const handleClose = () => {
    setIsClosed(!isClosed)
    if (changeFunction) {
      changeFunction(index)
    }
  }

  useEffect(() => {
    if (isSection) {
      if (collapseToggleSnap.associatedId === associatedId) {
        setIsClosed(false)
      } else {
        setIsClosed(true)
      }
    }
  }, [collapseToggleSnap.associatedId, collapseToggleSnap.toggleInstant])

  return (
    <div>
      <h1
        onClick={() => handleClose()}
        className={`${styles.title} ${font} ${isClosed ? '' : styles.closed}`}
      >
        <div className={styles.title_text}>{title}</div>
      </h1>
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
  change: PropTypes.bool.isRequired,
  font: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  changeFunction: PropTypes.func.isRequired,
  closed: PropTypes.bool.isRequired,
  associatedId: PropTypes.string.isRequired,
  isSection: PropTypes.bool.isRequired,
}

export default Collapse
