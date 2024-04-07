import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'

const messages = {
  en,
  zh
}

export const i18n = createI18n({
  locale: 'zh',
  fallbackLocale: 'en',
  messages,
  legacy: false
})
