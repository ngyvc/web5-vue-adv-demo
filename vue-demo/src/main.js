import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createI18n } from 'vue-i18n';
// old way using static messages inside main.js
// const i18n = createI18n({
//   locale: 'ja',
//   fallbackLocale: 'en',
//   messages: {
//     en: {
//       mesasge: {
//         hello: 'hello world',
//       },
//     },
//     ja: {
//       message: {
//         hello: 'こんにちは、世界',
//       },
//     },
//   },
// });
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import ja from './locales/ja.json';
const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en, fr, ja, es,
  },
});

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n);

app.mount('#app')
