import React from 'react'
import { ContactItem } from '@components'
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import contactItems from '@data/contactItems.json'
import * as styles from './Contact.module.css'

const Contact = () => {
  const getIcon = (iconName) => {
    const icons = {
      faEnvelope,
      faPhone,
      faGithub,
      faInstagram,
    }
    return icons[iconName] || null
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.title} font-heading`}>Contact</div>
      <div className={styles.contact_info}>
        {contactItems.map((item) => (
          <ContactItem
            key={item.label}
            icon={getIcon(item.icon)}
            href={item.href}
            label={item.label}
            text={item.text}
            target={item.target}
          />
        ))}
      </div>
    </div>
  )
}

export default Contact
