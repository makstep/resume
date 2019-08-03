// @flow
import { RU_LOCALE, EN_LOCALE } from './constants'

export const baseURL = '/resume'

export const ru = `/${RU_LOCALE}`
export const en = `/${EN_LOCALE}`
export const root = `/`

export function routeWithBaseURL(route: string): string {
  return `${baseURL}${route}`
}
