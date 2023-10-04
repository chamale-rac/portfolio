import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'
import * as styles from './ContactItem.module.css'

const ContactItem = ({ icon, href, label, text, target = false }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(target ? href : text)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      // console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className={`${styles.contact_item} font-body`}>
      <div className={styles.item_icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className={styles.item_content}>
        <a
          href={href}
          rel="noopener noreferrer"
          aria-label={label}
          target={target ? '_blank' : '_self'}
        >
          {isCopied ? 'Copied!' : text}
        </a>
      </div>
      <button type="button" onClick={handleCopyClick}>
        <FontAwesomeIcon icon={faCopy} className={styles.copy_icon} />
      </button>
    </div>
  )
}

ContactItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  target: PropTypes.bool.isRequired,
}

export default ContactItem
