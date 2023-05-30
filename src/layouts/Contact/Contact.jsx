import React from 'react'
import PropTypes from 'prop-types'
import { ContactItem, Collapse } from '@components'
import {
  faGithub,
  faInstagram,
  faBehance,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import contactItems from '@data/contactItems.json'
import * as styles from './Contact.module.css'

const otherInfo = [
  {
    label: 'Age',
    text: '19 years old (born on 2003)',
  },
  {
    label: 'Skills',
    text: 'JS, GIT, NODE',
  },
  {
    label: 'Languages',
    text: 'English, Spanish',
  },
  {
    label: 'Timezone',
    text: '(UTC-6)',
  },
]

const Contact = ({ associatedId }) => {
  const [change, setChange] = React.useState([false, false])

  const handleChange = (index) => {
    const newChange = [...change]
    newChange[index] = !newChange[index]
    setChange(newChange)
  }

  const getIcon = (iconName) => {
    const icons = {
      faEnvelope,
      faPhone,
      faGithub,
      faInstagram,
      faBehance,
      faLinkedin,
    }
    return icons[iconName] || null
  }

  return (
    <Collapse
      title="Info×1000"
      change={change}
      associatedId={associatedId}
      isSection
    >
      <div className={styles.container}>
        <Collapse
          title="Other"
          font="font-title"
          changeFunction={handleChange}
          index={0}
        >
          <div className={styles.collapse_inside}>
            <div className={`${styles.personal_info} font-body`}>
              {otherInfo.map((item) => (
                <div className={styles.info_item}>
                  <div className={styles.info_label}>{item.label}:</div>
                  <div className={styles.info_content}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </Collapse>
        <Collapse
          title="Contact"
          font="font-title"
          changeFunction={handleChange}
          index={1}
          closed={false}
        >
          <div className={styles.collapse_inside}>
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
        </Collapse>
      </div>
    </Collapse>
  )
}

Contact.propTypes = {
  associatedId: PropTypes.string.isRequired,
}

export default Contact
