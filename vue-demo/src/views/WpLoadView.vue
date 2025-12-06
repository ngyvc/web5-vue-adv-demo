<script setup>
import WpLoad from '../components/WpLoad.vue'
</script>

<template>
  <section class="wp-load-view">
    <section>
      <details>
        <summary>Summary inside a <strong>details</strong> element</summary>
        <p>
          This is some additional content that is revealed when the details element is expanded.
        </p>
        <p>You can add more content here as needed.</p>
      </details>
    </section>
    <WpLoad />
    <WpLoad title="projects" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects" />
    <WpLoad title="media types" url="https://ngy.582mi.com/headless/wp-json/wp/v2/media_types" />
    <!-- <WpLoad title="media types" url="https://ngy.582mi.com/headless/wp-json/wp/v2/media_types?orderby=id" />
    <WpLoad title="media types" url="https://ngy.582mi.com/headless/wp-json/wp/v2/media_types?orderby=name&order=desc" /> -->
    <!-- <WpLoad title="media types 12" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=12" />
    <WpLoad title="media types 12" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=14&orderby=id&order=asc" />
    <WpLoad title="media types 13" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=13" />
    <WpLoad title="media types 14" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=14" />
    <WpLoad title="media types 15" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=15" />
    <WpLoad title="media types 16" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?media_types=16" /> -->
    <!-- <WpLoad title="software" url="https://ngy.582mi.com/headless/wp-json/wp/v2/software" />
    <WpLoad title="software 17" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?software=17" />
    <WpLoad title="software 18" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?software=18" />
    <WpLoad title="software 19" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?software=19" /> -->
    <!-- <WpLoad title="Project using slug" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?slug=perspective" /> -->
    <!-- <WpLoad title="Project using ID" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?include=73" /> -->
    <!-- <WpLoad title="Project using ID and acf_format standard" url="https://ngy.582mi.com/headless/wp-json/wp/v2/projects?id=73&acf_format=standard" /> -->
  </section>
</template>

<style lang="scss" scoped>
.wp-load-view {
  margin-top: 4rem;

  details {
    &:hover {
      background: #f0f0f0;
    }

    summary {
      // cursor: pointer;
    }

    p {
      margin: 0.5rem 0;
    }
  }
}
</style>
