import React from 'react'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as styles from './Extra.module.css'

const Extra = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttons_container}>
        <a
          className={styles.button_wrapper}
          type="button"
          href={`https://twitter.com/intent/tweet?text=check%20this%20<3%20${window.location.href}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className={`${styles.icon_container} font-heading`}>
            <FontAwesomeIcon icon={faTwitter} />
          </div>
          <h3 className="font-subtitle">Share</h3>
        </a>
        <a
          className={styles.button_wrapper}
          type="button"
          href="https://github.com/chamale-rac"
          target="_blank"
          rel="noreferrer"
        >
          <div className={`${styles.icon_container} font-heading`}>
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <h3 className="font-subtitle">+Projects</h3>
        </a>
        {/**
        <a
          className={styles.button_wrapper}
          type="button"
          href="https://wa.me/50255985395"
          target="_blank"
          rel="noreferrer"
        >
          <div className={`${styles.icon_container} font-heading`}>
            <FontAwesomeIcon icon={faWhatsapp} />
          </div>
          <h3 className="font-subtitle">TXT</h3>
        </a>        
         */}
      </div>
      <div className={styles.gif_container}>
        <img src="/looney-locator.gif" />
      </div>
    </div>
  )
}

export default Extra
