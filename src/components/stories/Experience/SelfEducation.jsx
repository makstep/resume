// @flow
import React from 'react'
import Internalization from '../../Internalization'
import { RU_LOCALE, EN_LOCALE } from '../../../constants'
import {
  H3,
  Experience,
  ExperienceDates,
  ExperienceDescription
} from '../../UIKit'

type Props = {
  header: string,
  description: string
}

function Shared({ header, description }: Props) {
  return (
    <Experience>
      <H3>{header}</H3>
      <ExperienceDates from={'2018-11-01'} to={ExperienceDates.NOW} />

      <ExperienceDescription>{description}</ExperienceDescription>
    </Experience>
  )
}

const ruProps: Props = {
  header: 'Фриланс (Самообразование)',
  description: `Фриланс на Ruby проектах в страховой сфере. Изучал разработку
  под IOS на языке Swift c основными фреймворками. Изучил инструменты
  Sketch и Figma для проектирования интерфейсов.`
}

const enProps: Props = {
  header: 'Freelance (Self-Education)',
  description: `Freelance on Ruby projects in the insurance field. 
  I learned the IOS development with Swift language on the main frameworks.
  Also, I have learned UI tools such as Sketch and Figma.`
}

export default function SelfEducation(_props: any) {
  return (
    <Internalization
      locales={{
        [RU_LOCALE]: () => <Shared {...ruProps} />,
        [EN_LOCALE]: () => <Shared {...enProps} />
      }}
    />
  )
}
