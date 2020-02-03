// @flow
import React from 'react'
import Internalization from '../../Internalization'
import { RU_LOCALE, EN_LOCALE } from '../../../constants'
import {
  H3,
  Experience,
  Table,
  TableRow,
  TableRowName,
  TableRowValue
} from '../../UIKit'

type Props = {
  header: string,
  russianField: string,
  russianValue: string,
  englishField: string,
  englishValue: string
}

function Shared({
  header,
  russianField,
  russianValue,
  englishField,
  englishValue
}: Props) {
  return (
    <Experience>
      <H3>{header}</H3>
      <Table>
        <TableRow>
          <TableRowName>{russianField}:</TableRowName>
          <TableRowValue>{russianValue}</TableRowValue>
        </TableRow>

        <TableRow>
          <TableRowName>{englishField}:</TableRowName>
          <TableRowValue>{englishValue}</TableRowValue>
        </TableRow>
      </Table>
    </Experience>
  )
}

const ruProps: Props = {
  header: 'Языки',
  russianField: 'Русский',
  russianValue: 'Родной',
  englishField: 'Английский',
  englishValue: 'Intermediate'
}

const enProps: Props = {
  header: 'Языки',
  russianField: 'Russian',
  russianValue: 'Native',
  englishField: 'English',
  englishValue: 'Intermediate'
}

export default function Languaged(_props: any) {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <Shared {...ruProps} />,
        [EN_LOCALE]: () => <Shared {...enProps} />
      }}
    />
  )
}
