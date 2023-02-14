import type { Resource } from 'i18next';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { ptContents } from './locales/ptBR';
import { enContents } from './locales/enUS';
import { esContents } from './locales/esES';

const languages = {
  ptBr: 'pt_BR',
  enUs: 'en-US',
  esES: 'es-ES',
};

const namespaces = {
  screens: 'screens',
  components: 'components',
};

const resources: Resource = {
  pt_BR: {
    screens: ptContents.screens,
    components: ptContents.components,
  },
  'en-US': {
    screens: enContents.screens,
    components: enContents.components,
  },
  'es-ES': {
    screens: esContents.screens,
    components: esContents.components,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  ns: [namespaces.screens, namespaces.components],
  defaultNS: namespaces.screens,
  lng: languages.ptBr,
  fallbackLng: languages.ptBr,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
