import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en,
    },
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
