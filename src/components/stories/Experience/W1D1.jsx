// @flow

import React from 'react';

// Components
import Internalization from '../../Internalization';
import {
  H3,
  H3SubHeader,
  Experience,
  ExperienceDates,
  ExperienceDescription,
  Table,
  TableRow,
  TableRowName,
  TableRowValue,
  TableRowValueLink,
  TableRowValueAsList,
  List,
  ListItem,
  ListHeader
} from '../../UIKit';

// Constants
import { RU_LOCALE, EN_LOCALE } from '../../../constants';

// Types
type Props = {
  header: string,
  description: string,
  linkField: string,
  position: string,
  positionField: string,
  tasksField: string,
  achievementsField: string,
  technologiesField: string,
  tasks: Array<string>,
  achievements: Array<string>
};

function Shared({
  header,
  description,
  position,
  linkField,
  positionField,
  tasksField,
  achievementsField,
  technologiesField,
  tasks,
  achievements
}: Props) {
  return (
    <Experience>
      <H3>
        {header} <H3SubHeader>W1D1 inc.</H3SubHeader>
      </H3>
      <ExperienceDates from={'2019-08-01'} to={'2019-11-01'} />

      <ExperienceDescription>{description}</ExperienceDescription>

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
          {achievements.map((achievement, index) => (
            <ListItem key={index}>{achievement}</ListItem>
          ))}
        </List>
      </ExperienceDescription>

      <Table>
        <TableRow>
          <TableRowName>{linkField}:</TableRowName>
          <TableRowValue>
            <TableRowValueLink target="_blank" href="https://w1d1.com">
              w1d1.com
            </TableRowValueLink>
          </TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>{positionField}:</TableRowName>
          <TableRowValue>{position}</TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>{technologiesField}:</TableRowName>
          <TableRowValue>
            <TableRowValueAsList
              value={[
                'React Native',
                'GraphQL',
                'Apollo Stack',
                'RamdaJS',
                'FlowJS',
                'AWS'
              ]}
            />
          </TableRowValue>
        </TableRow>
      </Table>
    </Experience>
  );
}

const ruProps: Props = {
  header: 'W1D1',
  description: `Стартап из Нью-Йорка, разрабатывающий мобильное приложение, которое предоставляет 
  ежедневные челленджи в групповой среде и помогает превратить креативность в привычку.`,
  position: 'React Native разработчик',
  linkField: 'Ссылка',
  tasksField: 'Задачи',
  achievementsField: 'Достижения',
  positionField: 'Позиция',
  technologiesField: 'Технологии',
  tasks: [
    'Реализовывать гипотезы в мобильном приложении для тестирования аудиторией',
    'Отлавливание багов и работа над стабильностью приложения',
    'Внедрять новые возможности на сайте администрирования контента',
    'Внедрение современных технологий'
  ],
  achievements: [
    'Запуск тестирования в компаниях: Intercom, Yandex, Miro, Mos.ru, Aero.'
  ]
};

const enProps: Props = {
  header: 'W1D1',
  description: `Startup from New York, developing the mobile application that provides 
  daily challenges in a group environment, helping you to turn creativity into a habit.`,
  position: 'React Native developer',
  linkField: 'Link',
  tasksField: 'Tasks',
  achievementsField: 'Achievements',
  positionField: 'Position',
  technologiesField: 'Technologies',
  tasks: [
    'Implement new hypotheses in the mobile application for audience testing',
    "Catching bugs and stabilizing the application's executing",
    'Implement new features in the site of content administration',
    'Replace old technologies with new ones'
  ],
  achievements: [
    'Start testing in companies: Intercom, Yandex, Miro, Mos.ru, Aero.'
  ]
};

export default function W1D1(_props: any) {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <Shared {...ruProps} />,
        [EN_LOCALE]: () => <Shared {...enProps} />
      }}
    />
  );
}
