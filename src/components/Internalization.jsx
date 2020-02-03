// @flow
import React, { useContext } from 'react';

// Libs
import styled from 'styled-components';
import _ from 'lodash';

// React Context
import LocaleContext from '../contexts/Locale';

// Types
import type { Node } from 'react';

type Props = {
  locales: { [string]: () => Node }
};

const Warning = styled.div`
  background-color: red;
  color: #fff;
`;

export default function Internalization(props: Props) {
  const locale = useContext(LocaleContext);
  const { locales } = props;

  const componentRenderer = locales[locale];

  if (_.isUndefined(componentRenderer)) {
    if (process.env.NODE_ENV !== 'production') {
      return <Warning>Locale renderer not found</Warning>;
    }

    return null;
  }

  return componentRenderer();
}
