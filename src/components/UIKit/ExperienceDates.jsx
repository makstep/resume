// @flow
import React, { useContext } from 'react';

// Libs
import _ from 'lodash';
import { Interval, DateTime } from 'luxon';
import styled from 'styled-components';

// Components
import LocaleContext from '../../contexts/Locale';

// Constants
import { RU_LOCALE, EN_LOCALE } from '../../constants';

// REGEXP
const ISO_DATE_REGEXP = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])(T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?)*$/;

// Types
type Props = {
  from: string,
  to: string
};

export default function ExperienceDates({ from: rawFrom, to: rawTo }: Props) {
  const from = convertDatePropsToLuxon(rawFrom);
  const to = convertDatePropsToLuxon(rawTo);

  const locale = useContext(LocaleContext);

  const fromString = from.toFormat('y.MM');
  const toString = to.toFormat('y.MM');
  const monthInteval = _.round(
    Interval.fromDateTimes(from, to).length('months')
  );

  return (
    <ExperienceDatesWrapper>
      <ExperienceDatesRange>
        {fromString} - {toString}
      </ExperienceDatesRange>
      <ExperienceDatesInWords>
        {monthInteval} {pluralityFormOfMonths(monthInteval, locale)}
      </ExperienceDatesInWords>
    </ExperienceDatesWrapper>
  );
}

function convertDatePropsToLuxon(raw: string): Object {
  if (raw === ExperienceDates.NOW) return DateTime.local();
  if (_.isString(raw) && raw.match(ISO_DATE_REGEXP))
    return DateTime.fromISO(raw);
  if (raw instanceof DateTime) return raw;

  throw new Error('Date format is not mached');
}

function pluralityFormOfMonths(months: number, locale: string) {
  // TODO: refactor
  if (locale === RU_LOCALE) {
    if (months === 1) return 'месяц';
    if (_.includes([2, 3, 4], months)) return 'месяца';
    return 'месяцев';
  }

  if (locale === EN_LOCALE) {
    if (months === 1) {
      return 'month';
    } else {
      return 'months';
    }
  }
}

Object.defineProperty(ExperienceDates, 'NOW', {
  enumerable: false,
  configurable: false,
  writable: false,
  value: 'NOW'
});

const ExperienceDatesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
`;

const ExperienceDatesRange = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #787878;
`;

const ExperienceDatesInWords = styled.div`
  margin-left: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #787878;
`;
