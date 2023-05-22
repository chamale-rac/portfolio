import React from 'react'
import { Collapse, Gallery } from '@components'
import webDevelopment from '@data/webDevelopment.json'

const Work = () => {
  return (
    <Collapse title="What do I do?">
      <Gallery data={webDevelopment} />
    </Collapse>
  )
}

export default Work
