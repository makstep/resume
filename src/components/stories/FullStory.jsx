import React, { Fragment } from 'react'

import Person from './Person'
import Experience from './Experience'
import Common from './Common'

export default function FullStory(_props) {
  return <Fragment>
    <Person />
    <Experience />
    <Common />
  </Fragment>
}
