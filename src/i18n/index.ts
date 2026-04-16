import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    login: 'Login',
    logout: 'Logout',
    welcome: 'Welcome to our application!',
  },
  es: {
    login: 'Iniciar sesión',
    logout: 'Cerrar sesión',
    welcome: '¡Bienvenido a nuestra aplicación!',
  },
  pl: {
    login: 'Zaloguj się',
    logout: 'Wyloguj się',
    welcome: 'Witamy w naszej aplikacji!',
  }
}

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'en', // default locale
  fallbackLocale: 'en', // set fallback locale
  messages,
})

export default i18n