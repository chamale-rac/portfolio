import React from 'react'
import * as styles from './FullLoader.module.css'

const FullLoader = () => {
  // Disable scroll for entire page while loading (1.5s)
  React.useEffect(() => {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 3500)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.curtain_wrapper}>
        <div className={styles.curtain_left} />
      </div>
      <div className={styles.icon_wrapper}>
        <img
          src="/looney-locator-optimized.gif"
          alt="loader"
          className={styles.loader}
        />
      </div>
    </div>
  )
}

export default FullLoader
