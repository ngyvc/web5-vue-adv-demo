<script setup>
import WpLoad from '@/components/WpLoad.vue';
</script>
<template>
  <section class="i18n-view">
    <h1>i18n</h1>
    <a href="https://vue-i18n.intlify.dev/guide/installation.html" target="_blank">Installation Guide</a>
    <p>To install vue-i18n, run:</p>
    <code>npm install vue-i18n@11</code>
    <p>{{ $t('message.hello') }}</p>

    <p>{{  $i18n.locale }}</p>
    <p v-if="$i18n.locale === 'fr'">Bonjour!</p>
   <WpLoad v-if="$i18n.locale === 'en'" title="software 17" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?software=17" />
   <WpLoad v-if="$i18n.locale === 'fr'" title="software 18" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?software=18" />
   <WpLoad v-if="$i18n.locale === 'ja'" title="software 19" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?software=19" />
</section>
</template>

<style scoped>
.i18n-view {
  padding-top: 4rem;
}
</style>
