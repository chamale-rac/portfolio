import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
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
    <div className="row">
      {cols.map((col) => (
        <div className="column">
          {col.map((item) => (
            <div className={styles.card}>
              <div className={styles.card_content}>
                <h3
                  className="font-title"
                  style={{
                    color: item.color ? item.color : 'black',
                  }}
                >
                  {item.title}
                </h3>
                {item.description && (
                  <p className="font-body">{item.description}</p>
                )}
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
