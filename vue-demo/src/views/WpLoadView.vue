<script setup>
import WpLoad from '../components/WpLoad.vue'
</script>

<template>
  <section class="wp-load-view">
    <WpLoad />
    <WpLoad title="projects" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects" />
    <WpLoad title="media types" url="https://ngy.582mi.com/headless/wp-json/wp/v2/media_types" />
    <WpLoad title="media types 12" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=12" />
    <WpLoad title="media types 13" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=13" />
    <WpLoad title="media types 14" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=14" />
    <WpLoad title="media types 15" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=15" />
    <WpLoad title="media types 16" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=16" />
  </section>
</template>

<style scoped>
.wp-load-view {
  margin-top: 4rem;
}
</style>
