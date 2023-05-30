import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import * as styles from './Gallery.module.css'

const Gallery = ({ data }) => {
  const [cols, setCols] = useState([[], [], [], []])

  useEffect(() => {
    const temporalCols = [[], [], [], []]
    let col = 0
    for (let i = 0; i < data.length; i += 1) {
      if (col < temporalCols.length) {
        temporalCols[col].push(data[i])
        col += 1
      } else {
        col = 0
        temporalCols[col].push(data[i])
        col += 1
      }
    }
    setCols(temporalCols)
  }, [])

  return (
    <div className={styles.row}>
      {cols.map((col) => (
        <div className={styles.column}>
          {col.map((item) => (
            <div
              className={styles.card}
              style={{
                cursor: 'cell',
              }}
            >
              <div className={styles.card_content}>
                <h3
                  className="font-subtitle"
                  style={{
                    color: item.color ? item.color : 'black',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className={`${styles.description} font-body`}
                  style={{
                    cursor: 'text',
                  }}
                >
                  {item.description}
                </p>
                <div className={`${styles.buttons_container} font-button`}>
                  {(item.type === 'page' || item.type === 'building') && (
                    <a
                      className={`${styles.button}`}
                      href={item.code}
                      rel="noreferrer"
                      aria-label="Go to code"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faCode} />
                    </a>
                  )}
                  {(item.type === 'page' ||
                    item.type === 'illustration' ||
                    item.type === 'music' ||
                    item.type === 'writings') && (
                    <a
                      className={`${styles.button}`}
                      href={item.link}
                      rel="noreferrer"
                      aria-label="Go to page"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  )}
                </div>
              </div>
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

Gallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Gallery
