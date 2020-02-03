// @flow
import React from 'react';

// Components
import { H2, H2SubHeader, ExperienceSection } from '../UIKit';
import Internalization from '../Internalization';

// Experience Components
import Teleport from './Experience/Teleport';
import SocialChecker from './Experience/SocialChecker';
import TopUnits from './Experience/TopUnits';
import OneRetarget from './Experience/OneRetarget';
import SelfEducation from './Experience/SelfEducation';
import W1D1 from './Experience/W1D1';

// Constants
import { RU_LOCALE, EN_LOCALE } from '../../constants';

// Types
type Props = {
  header: string,
  experienceRange: string
};

function Shared({ header, experienceRange }: Props) {
  return (
    <ExperienceSection>
      <H2>
        {header} <H2SubHeader>{experienceRange}</H2SubHeader>
      </H2>

      <W1D1 />
      <SelfEducation />
      <OneRetarget />
      <TopUnits />
      <SocialChecker />
      <Teleport />
    </ExperienceSection>
  );
}

const ruProps: Props = {
  header: 'Опыт работы',
  experienceRange: '2 года 5 месяцев'
};

const enProps: Props = {
  header: 'Experience',
  experienceRange: '2 years 5 months'
};

export default function Experience(_props: any) {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <Shared {...ruProps} />,
        [EN_LOCALE]: () => <Shared {...enProps} />
      }}
    />
  );
}
