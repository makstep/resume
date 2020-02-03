// @flow

import React, { Fragment } from 'react';

// Components
import Person from './Person';
import Experience from './Experience';
import Common from './Common';

export default function FullStory(_props: any) {
  return (
    <Fragment>
      <Person />
      <Experience />
      <Common />
    </Fragment>
  );
}
