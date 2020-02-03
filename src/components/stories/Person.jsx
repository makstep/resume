// @flow
import React from 'react';

// Components
import {
  AboutSection,
  H1,
  FaceImage,
  Contacts,
  ContactColumn,
  ContactName,
  ContactValue,
  AboutText
} from '../UIKit';
import Internalization from '../Internalization';

// Constants
import { RU_LOCALE, EN_LOCALE } from '../../constants';
import contacts from '../../contacts';

// Images
import feceImage from '../../images/portaint.jpg';

// Types
type Props = {
  name: string,
  about: string,
  phoneField: string
};

function Shared({ name, about, phoneField }: Props) {
  return (
    <AboutSection>
      <H1>{name}</H1>

      <FaceImage image={feceImage} />

      <Contacts>
        <ContactColumn>
          <ContactName>Email</ContactName>
          <ContactValue href={`mainto:${contacts.email}`}>
            {contacts.email}
          </ContactValue>
        </ContactColumn>

        <ContactColumn>
          <ContactName>{phoneField}</ContactName>
          <ContactValue href="tel:+7 (926) 284 1017">
            {contacts.phone}
          </ContactValue>
        </ContactColumn>

        <ContactColumn>
          <ContactName>Telegram</ContactName>
          <ContactValue
            target="_blank"
            href={`https://t.me/${contacts.telegram_username}`}
          >
            @{contacts.telegram_username}
          </ContactValue>
        </ContactColumn>

        <ContactColumn>
          <ContactName>GitHub</ContactName>
          <ContactValue
            target="_blank"
            href={`https://github.com/${contacts.github_username}`}
          >
            {contacts.github_username}
          </ContactValue>
        </ContactColumn>
      </Contacts>

      <AboutText>{about}</AboutText>
    </AboutSection>
  );
}

const ruProps: Props = {
  name: 'Иванов Максим',
  about: `Пишу чистый и поддерживаемый код. 
  Разбираюсь в чужом коде и улучшаю его.
  Люблю проектировать и стандартизировать. 
  Постоянно изучаю новые и трендовые технологии. 
  Есть опыт удалённой работы с командой в разный часовых поясах.`,
  phoneField: 'Телефон'
};

const enProps: Props = {
  name: 'Maksim Ivanov',
  about: `I write clean and maintainable code. 
  I like to see into code and to increase its quality. 
  I like to design and to standardize.
  I always learn new and trend technologies.
  I have remote team work experience.`,
  phoneField: 'Phone'
};

export default function Person(_props: Object) {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <Shared {...ruProps} />,
        [EN_LOCALE]: () => <Shared {...enProps} />
      }}
    />
  );
}
