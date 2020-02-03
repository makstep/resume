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
  TableRowValueAsList,
  ListHeader,
  List,
  ListItem
} from '../../UIKit';

// Constants
import { RU_LOCALE, EN_LOCALE } from '../../../constants';

// Types
type Props = {
  header: string,
  description: string,
  networksField: string,
  technologiesField: string,
  achievementsField: string,
  freelance: string,
  achievements: Array<string>
};

function Shared({
  header,
  freelance,
  description,
  networksField,
  technologiesField,
  achievementsField,
  achievements
}: Props) {
  return (
    <Experience>
      <H3>
        {header} <H3SubHeader>{freelance}</H3SubHeader>
      </H3>

      <ExperienceDates from={'2016-09-01'} to={'2016-09-24'} />
      <ExperienceDescription>{description}</ExperienceDescription>

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
          <TableRowName>{networksField}:</TableRowName>
          <TableRowValue>
            <TableRowValueAsList
              value={['VK', 'Twitter', 'Instagram', 'YouTube']}
            />
          </TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>{technologiesField}:</TableRowName>
          <TableRowValue>
            <TableRowValueAsList value={['Ruby on Rails 4', 'JQuery']} />
          </TableRowValue>
        </TableRow>
      </Table>
    </Experience>
  );
}

const ruProps: Props = {
  header: 'Сервис SocialChecker',
  description: `Сервис предлагает получить денежное вознаграждение за социальную
  активность: лайки, репосты, просмотры видео, комментарии в сетях. Лиды и задания
  приходят из партнерских сетей.`,
  networksField: 'Сети',
  technologiesField: 'Технологии',
  achievementsField: 'Достижения',
  freelance: 'Фриланс',
  achievements: [
    'Авторизация пользователя через сети для идентификации пользователя',
    'Проверка выполнения задания',
    'Реализована возможность посчитать просмотр на YouTube',
    'Запланированная проверка наличия лайка и репоста после выполнения задачи'
  ]
};

const enProps: Props = {
  header: 'SocialChecker Service',
  description: `The service offers to receive a reward for social
  activity: likes, reposts, video views, comments on networks. Leads and tasks
  come from partners.`,
  networksField: 'Networks',
  technologiesField: 'Technologies',
  achievementsField: 'Achievements',
  freelance: 'Freelance',
  achievements: [
    'User authorization via social networks to identify the user',
    'Task execution check',
    `Implemented the ability to count the YouTube's video view`,
    'Background task scheduler to check task done after some time'
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
