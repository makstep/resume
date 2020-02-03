// @flow
import React from 'react';

// Components
import Internalization from '../../Internalization';
import {
  H3,
  Experience,
  ExperienceDates,
  ExperienceDescription,
  Table,
  TableRow,
  TableRowName,
  TableRowValue,
  TableRowValueAsList,
  List,
  ListItem,
  ListHeader,
  TableRowValueLink,
  H3SubHeader
} from '../../UIKit';

// Constants
import { RU_LOCALE, EN_LOCALE } from '../../../constants';

// Types
type Props = {
  header: string,
  freelance: string,
  description: string,
  rebranding: string,
  technologiesField: string,
  tasksField: string,
  achievementsField: string,
  linkField: string,
  tasks: Array<string>,
  achievements: Array<string>
};

function Shared({
  header,
  freelance,
  description,
  rebranding,
  technologiesField,
  tasksField,
  achievementsField,
  linkField,
  tasks,
  achievements
}: Props) {
  return (
    <Experience>
      <H3>
        {header} <H3SubHeader>{freelance}</H3SubHeader>
      </H3>

      <ExperienceDates from={'2016-09-01'} to={'2017-01-01'} />

      <ExperienceDescription>{description}</ExperienceDescription>
      <ExperienceDescription>{rebranding}.</ExperienceDescription>

      <ExperienceDescription>
        <ListHeader>{tasksField}</ListHeader>
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index}>{task}</ListItem>
          ))}
        </List>
      </ExperienceDescription>

      <ExperienceDescription>
        <ListHeader>{achievementsField}</ListHeader>
        <List>
          {achievements.map((task, index) => (
            <ListItem key={index}>{task}</ListItem>
          ))}
        </List>
      </ExperienceDescription>

      <Table>
        <TableRow>
          <TableRowName>{linkField}:</TableRowName>
          <TableRowValue>
            <TableRowValueLink target="_blank" href="https://www.golama.ru">
              golama.ru
            </TableRowValueLink>
          </TableRowValue>
        </TableRow>
        <TableRow>
          <TableRowName>{technologiesField}:</TableRowName>
          <TableRowValue>
            <TableRowValueAsList
              value={[
                'React',
                'React Native 0.37',
                'Redux',
                'FetchAPI',
                'redux-persist',
                'SwaggerUI'
              ]}
            />
          </TableRowValue>
        </TableRow>
      </Table>
    </Experience>
  );
}

const ruProps: Props = {
  header: 'Мобильное приложение Teleport',
  description: `Приложение курьерской доставки еды на дом из магазинов, где курьер может
  зарегистрироваться, пройти верификацию и начать принимать заказы.
  Разрабатывал версию под Android.`,
  rebranding: 'В настоящее время проект называется GoLama',
  technologiesField: 'Технологии',
  tasksField: 'Задачи',
  achievementsField: 'Достижения',
  linkField: 'Ссылка',
  freelance: 'Фриланс',
  tasks: [
    'Верстка по PDS шаблону',
    'Интеграция к API бекэнда',
    'Загружать билды в Google Play на тестирование'
  ],
  achievements: [
    'Реализованы: маршрутизация экранов, регистрация, позиционирование, поиск заказа на карте.',
    `Бизнес процессы связанные с заказом: получение заказа, процесс сбора продуктов, 
    постройка маршрута до клиента, фотографирование заказа у клиента.`
  ]
};

const enProps: Props = {
  header: 'Teleport Mobile Application',
  description: `The application of courier delivery from grocery shops to clients.
  A courier can register, pass the verification and start taking orders.
  I developed only for Android.`,
  rebranding: 'Nowadays the projects rebranded as GoLama',
  technologiesField: 'Technologies',
  tasksField: 'Tasks',
  achievementsField: 'Achievements',
  linkField: 'Link',
  freelance: 'Freelance',
  tasks: [
    'Implement layout from PDS files',
    'Back-end API Integration',
    'Build app versions and upload them to Google Play for testing'
  ],
  achievements: [
    'Implemented: screen routing, registration, positioning, searching an order on the map',
    `Business processes related to ordering: taking an order, products' collection process, 
    building a route to the client, photographing the order at the client.`
  ]
};

export default function Teleport(_props: any) {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <Shared {...ruProps} />,
        [EN_LOCALE]: () => <Shared {...enProps} />
      }}
    />
  );
}
