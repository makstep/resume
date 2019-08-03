import React from 'react'
import styled from 'styled-components'
import { textColor, grayTextColor } from './shared'

import {
  TEXT_MAX_WIDTH,
  MAX_CONTAINER_WIDTH,
  MOBILE_MEDIA_QUERY_WIDTH,
  IPAD_MEDIA_QUERY_WIDTH
} from '../../constants'

export const LanguageSwitcher = require('./LanguageSwitcher').default
export const ExperienceDates = require('./ExperienceDates').default

export const Wrapper = styled.div`
  max-width: ${MAX_CONTAINER_WIDTH}px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 3px;
  padding: 70px 30px 30px 30px;
  background-color: #ffffff;

  @media (max-width: ${MOBILE_MEDIA_QUERY_WIDTH}px) {
    padding: 70px 16px 30px 16px;
  }
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 44px;
  line-height: 1;
  color: ${textColor};
`

export const H2 = styled.h2`
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  font-size: 38px;
  line-height: 1;
  color: ${textColor};
`

export const H2SubHeader = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${grayTextColor};
`

export const H3 = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 30px;
  color: ${textColor};
`

export const H3SubHeader = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: ${grayTextColor};
`

export const P = styled.p`
  margin-bottom: 10px;
  margin-top: 5px;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.2px;
  color: ${textColor};
`

export const AboutSection = styled.div`
  margin-top: 35px;
`

export const FaceImage = styled.div`
  margin-top: 20px;
  width: 112px;
  height: 152px;
  background-color: #c4c4c4;
  background: url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
  border-radius: 6px;
  transition: transform 0.2s;
  border: 1px solid #ddd;

  @media print {
    & {
      -webkit-print-color-adjust: exact !important;
      color-adjust: exact !important;
    }
  }
`

export const Contacts = styled.div`
  margin-top: 26px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const ContactColumn = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 25%;

  @media (max-width: ${IPAD_MEDIA_QUERY_WIDTH}px) {
    flex-basis: 50%;
    margin-bottom: 15px;
  }

  @media (max-width: ${MOBILE_MEDIA_QUERY_WIDTH}px) {
    flex-basis: 100%;
    margin-bottom: 15px;
  }
`

export const ContactName = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  color: ${textColor};
`

export const ContactValue = styled.a`
  display: inline-block;
  margin-top: 3px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-decoration: none;
  color: ${textColor};
`

export const AboutText = styled.div`
  max-width: ${TEXT_MAX_WIDTH}px;
  margin-top: 30px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: justify;
  letter-spacing: 0.01em;
  color: ${textColor};
`

export const ExperienceSection = styled.div`
  margin-top: 65px;
`

export const Experience = styled.div`
  margin-top: 46px;
`

export const ExperienceDescription = styled.div`
  max-width: ${TEXT_MAX_WIDTH}px;
  margin-top: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: justify;
  line-height: 1.3;
  letter-spacing: 0.2px;
  color: ${textColor};
`

export const Bold = styled.span`
  font-weight: bold;
  color: ${textColor};
`

export const Link = styled.a`
  color: ${textColor};
`

// Table start

export const Table = styled.div`
  margin-top: 30px;
`

export const TableRow = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;

  @media (max-width: ${MOBILE_MEDIA_QUERY_WIDTH}px) {
    flex-direction: column;
  }
`

export const TableRowName = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 160px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${textColor};

  @media (max-width: ${MOBILE_MEDIA_QUERY_WIDTH}px) {
    width: auto;
    flex-basis: auto;
    font-weight: bold;
  }
`

export const TableRowValue = styled.div`
  flex-grow: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${textColor};
`

const TableRowValueList = styled.div``

const TableRawValueListItem = styled.div`
  display: inline-block;
  margin-right: 12px;
  color: ${textColor};
`

export function TableRowValueAsList({ value }) {
  return (
    <TableRowValueList>
      {value.map((text, index) => (
        <TableRawValueListItem key={index}>{text}</TableRawValueListItem>
      ))}
    </TableRowValueList>
  )
}

export const TableRowValueLink = styled.a`
  color: ${textColor};
`

// Table end

export const CommonSection = styled.div`
  margin-top: 100px;
`

export const ListHeader = styled.div`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 6px;
  color: ${textColor};
`

export const List = styled.ol`
  list-style-type: none;
  list-style-position: inside;
`

export const ListItem = styled.li`
  text-indent: 4px;
  font-size: 16px;
  color: ${textColor};
  text-align: left;

  &:before {
    content: '- ';
  }
`
