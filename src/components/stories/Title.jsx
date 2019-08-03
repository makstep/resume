import React from 'react'
import DocumentTitle from 'react-document-title'
import Internalization from '../Internalization'
import { RU_LOCALE, EN_LOCALE } from '../../constants'

export default function FullStory(_props) {
  return <Internalization locales={{ 
    [RU_LOCALE]: () => <DocumentTitle title={"Резюме Иванова Максима"} />,
    [EN_LOCALE]: () => <DocumentTitle title={"Maksim Ivanov's Resume"} />
  }} />
}
