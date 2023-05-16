/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import * as styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={`${styles.container} font-heading`}>
      <div className={`${styles.main_text}`}>
        <div>
          Minimal <span className="font-subtitle"> but design</span>
        </div>
      </div>
      <div className={`${styles.main_text}`}>
        <div>
          Essential <span className="font-subtitle"> but striking</span>
        </div>
      </div>
      <div className={`${styles.main_text}`}>
        <div>
          Simple <span className="font-subtitle"> but functional</span>
        </div>
      </div>
      <div className={styles.raise_container}>
        <div className={`${styles.image_container} ${styles.prior_text}`}>
          <div className={`${styles.image_text}  font-body`}>
            <p>Poised to build boldly and learn endlessly.</p>
          </div>
          <img
            className={`${styles.image}`}
            src="/looney-brain-with-idea-bulb-and-flying-screens.svg"
          />
        </div>
        <div className={`${styles.image_container} ${styles.prior_image}`}>
          <img className={`${styles.image}`} src="/looney-astronomer.svg" />
          <div className={`${styles.image_text} font-body`}>
            <p>Imagining possibilities outside constraints and conventions.</p>
          </div>
        </div>
        <div className={`${styles.image_container} ${styles.prior_text} `}>
          <div
            className={`${styles.image_text}  font-body ${styles.with_contact}`}
          >
            <p>Together, building what improves our world.</p>
            <button className="font-button" type="button">
              Team Up
            </button>
          </div>
          <img
            className={`${styles.image}`}
            src="/looney-web-designer-constructing-web-site-and-painting-header.svg"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
