// @flow

import React from 'react';

// Components
import FullStory from './stories/FullStory';
import Title from './stories/Title';

import { Wrapper, LanguageSwitcher } from './UIKit';

export default function Resume(_props: any) {
  return (
    <Wrapper>
      <Title />
      <LanguageSwitcher />

      <FullStory />
    </Wrapper>
  );
}
