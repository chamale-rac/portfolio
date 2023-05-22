import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as styles from './ContactItem.module.css'

const ContactItem = ({ icon, href, label, text, target = false }) => {
  return (
    <div className={styles.contact_item}>
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
          {text}
        </a>
      </div>
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
