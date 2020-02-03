import { createContext } from 'react';
import { RU_LOCALE as defaultLocale } from '../constants'

const Locale = createContext(defaultLocale);

export default Locale;
