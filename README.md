# Web5 Advanced Vue Demo

## Google maps integration

-[https://vue3-google-map.com/getting-started/](https://www.npmjs.com/package/vue3-google-map)

## i18n code on App.vue

```js
import { watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'

const $route = useRoute();

import { useI18n } from 'vue-i18n';
let { locale } = useI18n();

// Watch for route changes to handle locale switching
watch(
  () => $route.params.locale,
  (newLocale) => {
    if (newLocale) {
      console.log('Route locale changed to:', newLocale);
      locale.value = newLocale;
    }
  },
  { immediate: true }
);
```