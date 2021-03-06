// @flow
import React from 'react';

// Components
import Internalization from '../Internalization';
import { RU_LOCALE, EN_LOCALE } from '../../constants';
import { H2, CommonSection } from '../UIKit';

// Common Components
import Education from './Common/Education';
import Languages from './Common/Languages';

// Types
type SharedProps = {
  header: string
};

function Shared({ header }: SharedProps) {
  return (
    <CommonSection>
      <H2>{header}</H2>

      <Education />
      <Languages />
    </CommonSection>
  );
}

const ruProps = {
  header: 'Общее'
};

const enProps = {
  header: 'Common'
};

export default function() {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <Shared {...ruProps} />,
        [EN_LOCALE]: () => <Shared {...enProps} />
      }}
    />
  );
}
