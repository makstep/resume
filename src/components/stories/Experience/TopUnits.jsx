// @flow
import React, { Fragment } from 'react';

// Components
import Internalization from '../../Internalization';
import {
  H3,
  H3SubHeader,
  Experience,
  ExperienceDates,
  ExperienceDescription,
  Bold,
  Link,
  Table,
  TableRow,
  TableRowName,
  TableRowValue,
  TableRowValueAsList
} from '../../UIKit';

// Constants
import { RU_LOCALE, EN_LOCALE } from '../../../constants';

// Types
import type { Node } from 'react';

type Props = {
  description: string,
  trafficLight: Node,
  weddingERP: Node,
  weddingMobile: Node,
  weddingCatalog: Node,
  realEstate: Node,
  positionField: string,
  position: string,
  technologiesField: string,
  llc: string
};

function Shared({
  description,
  trafficLight,
  weddingERP,
  weddingMobile,
  weddingCatalog,
  realEstate,
  positionField,
  position,
  technologiesField,
  llc
}: Props) {
  return (
    <Experience>
      <H3>
        TopUnits <H3SubHeader>{llc}</H3SubHeader>{' '}
      </H3>
      <ExperienceDates from={'2016-09-01'} to={'2017-12-01'} />
      <ExperienceDescription>{description}</ExperienceDescription>

      <ExperienceDescription>1. {trafficLight}</ExperienceDescription>
      <ExperienceDescription>2. {weddingERP}</ExperienceDescription>
      <ExperienceDescription>3. {weddingMobile}</ExperienceDescription>
      <ExperienceDescription>4. {weddingCatalog}</ExperienceDescription>
      <ExperienceDescription>5. {realEstate}</ExperienceDescription>

      <Table>
        <TableRow>
          <TableRowName>{positionField}:</TableRowName>
          <TableRowValue>{position}</TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>{technologiesField}:</TableRowName>
          <TableRowValue>
            <TableRowValueAsList
              value={[
                'Ruby on Rails 4/5',
                'PostgreSQL',
                'Nginx',
                'Redis',
                'React',
                'Redux',
                'React Native'
              ]}
            />
          </TableRowValue>
        </TableRow>
      </Table>
    </Experience>
  );
}

const ruProps: Props = {
  description: 'Заказная разработка. Удаленная работа.',
  trafficLight: (
    <Fragment>
      <Bold>Сборщик лидов и рекламный менеджер</Bold> - я присоединился к уже
      существующему проекту. Занимался интеграцией к Google Adwords и Yandex
      Direct, механизм переноса рекламных кампаний между рекламными площадками,
      сбор, фильтрацию и регистрацию лидов в AmoCRM.
    </Fragment>
  ),
  weddingERP: (
    <Fragment>
      <Bold>ERP для сети свадебных магазинов</Bold> - разработал журнал задач c
      автоматическим планировщиком и фоновыми проверками состояния задач, график
      сотрудников с планировщиком, страницы статистики и аналитики, интеграцию к
      VoxImplant (возможность звонить и принимать звонки от клиентов), страницы
      управления магазинами, страницы клиентов, финансовые отчеты, уведомления в
      браузере о произошедших событиях в ERP в реальном времени, истории
      клиентов.
    </Fragment>
  ),
  weddingMobile: (
    <Fragment>
      <Bold>Мобильное приложение для ERP сети свадебных магазинов</Bold> - IOS и
      Android приложения для сотрудников магазина. Разработал авторизацию по
      токену, просмотр текущей примерки и клиента, а также регистрацию
      примеренных клиентом платьев по QR коду.
    </Fragment>
  ),
  weddingCatalog: (
    <Fragment>
      <Bold>Каталог для ERP сети свадебных магазинов</Bold>{' '}
      <Link target="_blank" href="https://venezia-wedding.ru">
        venezia-wedding.ru
      </Link>{' '}
      - разработал интерфейс для синхронизацией с ERP, интерфейс администратора
      и дорабатывал систему.
    </Fragment>
  ),
  realEstate: (
    <Fragment>
      <Bold>Портал недвижимости</Bold> - разработал парсер недвижимости с avito,
      разделы сайта с фильтрами, отслеживание событий в браузере и передачу в
      Google Analytics и Yandex.Metrika, генерация поисковых страниц для SEO,
      панель администратора, калькулятор ипотеки, блок выбора квартиры в жилом
      комплексе.
    </Fragment>
  ),
  positionField: 'Позиция',
  position: 'FullStack разработчик',
  technologiesField: 'Технологии',
  llc: 'ООО'
};

const enProps: Props = {
  description: 'Outsource development. Remote Job.',
  trafficLight: (
    <Fragment>
      <Bold>Lead Collector and Ad-Manager</Bold> - I joined in the middle of the
      development. I have made integrations to Google AdWords and YandexDirect.
      I have implemented migration mechanism for advertising campaigns between
      the platforms. Collecting leads, filtering and sending them to AmoCRM.
    </Fragment>
  ),
  weddingERP: (
    <Fragment>
      <Bold>ERP for the bridal shop network</Bold> - I have implemented a task
      journal with the automated task planner and background task tracking, the
      employee schedule and its planner, pages of statistics and analytics,
      integration to VoxImplant (ability to call and to answer clients), shops'
      management, customers' pages, financial reports, real-time notification in
      the browser of events happened in the ERP, customer history.
    </Fragment>
  ),
  weddingMobile: (
    <Fragment>
      <Bold>Mobile application for the bridal ERP</Bold> - IOS and Android
      applications for the store employees. I have implemented a token
      authorization, viewing current fitting and client, registration dresses
      fitted by a client via camera by QR code.
    </Fragment>
  ),
  weddingCatalog: (
    <Fragment>
      <Bold>Catalog integrated to the bridal ERP</Bold>{' '}
      <Link target="_blank" href="https://venezia-wedding.ru">
        venezia-wedding.ru
      </Link>{' '}
      - I have implemented the synchronization mechanism to the ERP, Admin and
      User UI.
    </Fragment>
  ),
  realEstate: (
    <Fragment>
      <Bold>Real Estate Portal</Bold> - I have implemented a real estate parser
      from the Avito portal, sections of detailed filters, tracking events in
      the browser and transfer to Google Analytics and Yandex.Metrika,
      generating large amount of search pages for SEO, admin panel, mortgage
      calculator, apartment selection block from housing complex.
    </Fragment>
  ),
  positionField: 'Position',
  position: 'FullStack developer',
  technologiesField: 'Technologies',
  llc: 'LLC'
};

export default function TopUnits(_props: any) {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <Shared {...ruProps} />,
        [EN_LOCALE]: () => <Shared {...enProps} />
      }}
    />
  );
}
