<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Default Title',
    // required: true
  },
  author: {
    type: String,
    default: 'Unknown Author',
    // required: true
  },
  content: {
    type: String,
    default: 'No content available.',
    // required: true
  },
})
</script>
<template>
  <section class="props-example">
    <h2>{{ props.title }}</h2>
    <p>Author: {{ props.author }}</p>
    <p>{{ props.content }}</p>
  </section>
</template>
