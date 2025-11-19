import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import { createI18n } from 'vue-i18n';
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

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(i18n);

app.mount('#app')
