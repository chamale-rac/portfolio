/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSnapshot } from 'valtio'
import { collapseToggle } from '@proxies'
import { useScrollToElement } from '@hooks'
import { navHeight } from '@config'
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

  const [elementRef, scrollToElement] = useScrollToElement(navHeight)

  const contentRef = useRef()

  // TODO Add on resize listener
  useEffect(() => {
    const handleResize = () => {
      setContentHeight(contentRef.current.scrollHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight)
  }, [isClosed])

  useEffect(() => {
    setTimeout(() => {
      setContentHeight(contentRef.current.scrollHeight)
    }, 1000)
  }, [change])

  const handleClose = (id, delay = 0) => {
    if (isSection && isClosed === true) {
      collapseToggle.associatedId = id
      collapseToggle.toggleInstant = !collapseToggleSnap.toggleInstant
      scrollToElement(id, delay)
    } else {
      setIsClosed(!isClosed)
    }
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
        onClick={() => handleClose(associatedId, 700)}
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
