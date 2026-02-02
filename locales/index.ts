import en from 'element-plus/es/locale/lang/en'

export const elementLocale = en

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
  }
})
