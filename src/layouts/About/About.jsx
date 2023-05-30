import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from '@components'
import * as styles from './About.module.css'

const About = ({ associatedId }) => {
  const [showImages, setShowImages] = useState(false)

  const texts = [
    'Son, brother, friend, and a lot more (CS student & pseudo-pianist).',
    '19 years old, living and in Guatemala and studying at UVG.',
    'Blame my parents for my name, Samuel.',
  ]

  return (
    <Collapse
      title="Who I am?"
      change={showImages}
      associatedId={associatedId}
      isSection
    >
      <div className={`${styles.container_max} font-body`}>
        <div className={styles.container}>
          {texts.map((text) => (
            <p className={`${styles.text} ${showImages ? styles.show : ''}`}>
              {text}
            </p>
          ))}
        </div>
        <button
          className={`${showImages ? styles.active : ''} font-button`}
          type="button"
          onClick={() => setShowImages((prev) => !prev)}
        >
          {showImages ? 'Hide' : 'Show'} @#$%^&*
        </button>
      </div>
    </Collapse>
  )
}

About.propTypes = {
  associatedId: PropTypes.string.isRequired,
}

export default About
