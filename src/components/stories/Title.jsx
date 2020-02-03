// @flow

import React from 'react';

// Libs
import DocumentTitle from 'react-document-title';

// Components
import Internalization from '../Internalization';

// Constants
import { RU_LOCALE, EN_LOCALE } from '../../constants';

export default function FullStory(_props: any) {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <DocumentTitle title={'Резюме Иванова Максима'} />,
        [EN_LOCALE]: () => <DocumentTitle title={"Maksim Ivanov's Resume"} />
      }}
    />
  );
}
