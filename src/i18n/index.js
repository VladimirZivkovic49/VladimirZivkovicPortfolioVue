import { createI18n } from 'vue-i18n'
import sr from './sr.json'
import en from './en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'sr',
  fallbackLocale: 'en',
  messages: { sr, en }
})

export default i18n