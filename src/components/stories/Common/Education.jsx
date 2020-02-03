// @flow
import React, { Fragment } from 'react';

// Components
import Internalization from '../../Internalization';
import {
  H3,
  Bold,
  Experience,
  Table,
  TableRow,
  TableRowName,
  TableRowValue
} from '../../UIKit';

// Constants
import { RU_LOCALE, EN_LOCALE } from '../../../constants';

// Types
import type { Node } from 'react';

type Props = {
  header: string,
  secondarySpecialEducationField: string,
  secondarySpecialEducationValue: Node,
  highEducationField: string,
  highEducationValue: Node
};

function Shared({
  header,
  secondarySpecialEducationField,
  secondarySpecialEducationValue,
  highEducationField,
  highEducationValue
}: Props) {
  return (
    <Experience>
      <H3>{header}</H3>
      <Table>
        <TableRow>
          <TableRowName>{highEducationField}:</TableRowName>
          <TableRowValue>{highEducationValue}</TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>{secondarySpecialEducationField}:</TableRowName>
          <TableRowValue>{secondarySpecialEducationValue}</TableRowValue>
        </TableRow>
      </Table>
    </Experience>
  );
}

const ruProps: Props = {
  header: 'Образование',
  secondarySpecialEducationField: 'Среднее специальное',
  secondarySpecialEducationValue: (
    <Fragment>
      Ступинский техникум им. А.Т. Туманова. Информационные системы и
      программирование.
      <br />
      2012 - 2016
    </Fragment>
  ),
  highEducationField: 'Высшее (Бакалавриат)',
  highEducationValue: (
    <Fragment>
      Ступинский филиал МАИ. Информатика и вычислительная техника,{' '}
      <Bold>заочное отделение</Bold>.
      <br />
      2016 - 2021
    </Fragment>
  )
};

const enProps: Props = {
  header: 'Education',
  secondarySpecialEducationField: 'Secondary Special Education',
  secondarySpecialEducationValue: (
    <Fragment>
      Stupino's College named after A.T. Tumanov. Information systems and
      programming.
      <br />
      2012 - 2016
    </Fragment>
  ),
  highEducationField: 'High Education (Bachelor)',
  highEducationValue: (
    <Fragment>
      Stupino branch of the MAI. Computer Science and Engineering,{' '}
      <Bold>extramural department</Bold>.
      <br />
      2016 - 2021
    </Fragment>
  )
};

export default function Languages(_props: any) {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <Shared {...ruProps} />,
        [EN_LOCALE]: () => <Shared {...enProps} />
      }}
    />
  );
}
