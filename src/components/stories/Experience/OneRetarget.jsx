// @flow
import React from 'react';

// Componets
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
  companyName: string,
  description: string,
  tasksField: string,
  achievementsField: string,
  linkField: string,
  processField: string,
  adNetworksField: string,
  positionField: string,
  position: string,
  tasks: Array<string>,
  achievements: Array<string>
};

function Shared({
  companyName,
  description,
  tasksField,
  achievementsField,
  linkField,
  processField,
  positionField,
  tasks,
  achievements,
  position,
  adNetworksField
}: Props) {
  return (
    <Experience>
      <H3>
        OneRetarget <H3SubHeader>{companyName}</H3SubHeader>
      </H3>
      <ExperienceDates from={'2018-02-01'} to={'2018-11-01'} />

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
            <TableRowValueLink target="_blank" href="https://oneretarget.com">
              oneretarget.com
            </TableRowValueLink>
          </TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>{positionField}:</TableRowName>
          <TableRowValue>{position}</TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>{adNetworksField}:</TableRowName>
          <TableRowValue>
            <TableRowValueAsList
              value={['Facebook', 'Instagram', 'VK', 'MyTarget', 'Google']}
            />
          </TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>{processField}:</TableRowName>
          <TableRowValue>
            <TableRowValueAsList
              value={[
                'JIRA',
                'Github',
                'Docker',
                'Jenkins CI',
                'git-glow',
                'staging'
              ]}
            />
          </TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>Back-end:</TableRowName>
          <TableRowValue>
            <TableRowValueAsList
              value={[
                'Ruby on Rails 4/5',
                'PostgreSQL',
                'RSpec',
                'Cucumber',
                'Headless-Сhrome',
                'dry-rb',
                'rubocop',
                'yard'
              ]}
            />
          </TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>Front-end:</TableRowName>
          <TableRowValue>
            <TableRowValueAsList
              value={[
                'Webpack',
                'React',
                'Redux',
                'Javascript ES7',
                'FlowJS',
                'PrettierJS',
                'Styled-Components'
              ]}
            />
          </TableRowValue>
        </TableRow>
      </Table>
    </Experience>
  );
}

const ruProps: Props = {
  description:
    'Сервис автоматизации таргетированной рекламы и ретаргетинга из одного кабинета.',
  companyName: 'ООО Лайк',
  tasksField: 'Задачи',
  achievementsField: 'Достижения',
  positionField: 'Позиция',
  tasks: [
    'Реализовывать возможности рекламных сетей',
    'Реализовывать новые рекламные форматы',
    'Ревью кода',
    'Отлавливать и устранять ошибки',
    'Покрытие всех фичей интеграционными и блочными тестами',
    'Поддерживать актуальность API рекламных сетей',
    'Поддерживать интерфейс дружелюбным к пользователю'
  ],
  achievements: [
    'Переписан front-end с JQuery на React с Redux',
    'Переведены унифицированные функции на специфичные к сетям',
    'Интеграции к API партнеров',
    'Привязка собственных страниц VK и Facebook',
    'Реализованы агентские кабинеты с разными моделями пополнения клиентских кабинетов'
  ],
  linkField: 'Ссылка',
  processField: 'Процесс разработки',
  position: 'FullStack разработчик',
  adNetworksField: 'Рекламные сети'
};

const enProps: Props = {
  description:
    'Service of automated targeting and remarketing management on different platforms in one account.',
  companyName: 'LLC Like',
  tasksField: 'Tasks',
  achievementsField: 'Achievements',
  positionField: 'Position',
  tasks: [
    "To implement advertising platforms' features",
    'To implement new advertising formats',
    'To review pull requests',
    "To catch the service's errors",
    'To cover features with integration and unit tests',
    "To keep advertising platforms' API to the actual version",
    'To keep UI friendly to a user'
  ],
  achievements: [
    'Rewritten front-end from JQuery to React with Redux',
    "Unified features translated into platform's specific options",
    'Integration to partners for joint benefits',
    'Connecting user owned VK and Facebook pages',
    'Implemented agent sections with different models of client account replenishment'
  ],
  linkField: 'Link',
  processField: 'Dev Process',
  position: 'FullStack developer',
  adNetworksField: 'Ad Networks'
};

export default function OneRetarget(_props: any) {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <Shared {...ruProps} />,
        [EN_LOCALE]: () => <Shared {...enProps} />
      }}
    />
  );
}
