import React from 'react'
import PropTypes from 'prop-types'
import { Collapse, Gallery } from '@components'
import webDevelopment from '@data/webDevelopment.json'

const Work = ({ associatedId }) => {
  return (
    <Collapse title="What do I do?" associatedId={associatedId} isSection>
      <Gallery data={webDevelopment} />
    </Collapse>
  )
}

Work.propTypes = {
  associatedId: PropTypes.string.isRequired,
}

export default Work
