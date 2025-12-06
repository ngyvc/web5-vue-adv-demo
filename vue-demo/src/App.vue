<script setup>
import { watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router'

const $route = useRoute();

import { useI18n } from 'vue-i18n';
let { locale } = useI18n();

// Watch for route changes to handle locale switching
watch(
  () => $route.params.lang,
  (newLocale) => {
    if (newLocale) {
      console.log('Route locale changed to:', newLocale);
      locale.value = newLocale;
    }
  },
  { immediate: true }
);
</script>

<template>
  <section class="app">
    <nav>
      <ul>
        <!-- generate navigation links from routes -->
        <li v-for="route in $router.options.routes" :key="route.name">
          <RouterLink :to="route.path">{{ route.name }}</RouterLink>
        </li>
      </ul>
    </nav>
    <RouterView />
  </section>
</template>

<style lang="scss" scoped>
nav {
  // position: fixed;
  top: 0;
  width: 100%;
  background: #33333333;
  padding: 1rem;
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    li {
      a {
        color: white;
        text-decoration: none;
        background-color: #333;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
