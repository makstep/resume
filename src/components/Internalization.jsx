// @flow
import React, { useContext } from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import LocaleContext from '../contexts/Locale'

import type { Node } from 'react'

const Warning = styled.div`
  background-color: red;
  color: #fff;
`

console.log(process.env.NODE_ENV)

type Props = {
  locales: { [string]: () => Node }
}

export default function Internalization(props: Props) {
  const locale = useContext(LocaleContext)
  const { locales } = props

  const componentRenderer = locales[locale]

  if (_.isUndefined(componentRenderer)) {
    // TODO: Check NODE_ENV, may by WEBPACK_MODE?
    if (process.env.NODE_ENV !== 'production') {
      return <Warning>Locale renderer not found</Warning>
    }

    return null
  }

  return componentRenderer()
}
