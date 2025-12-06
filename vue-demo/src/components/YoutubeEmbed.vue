<script setup>
const props = defineProps({
  videoId: {
    type: String,
    required: false,
    default: 'SbSaoU0dIWs'
  }
});
</script>

<template>
  <iframe :src="`https://www.youtube.com/embed/${props.videoId}?si=NrJH96G7aK6j31F6`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</template>

<style scoped>
iframe {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
  max-width: 600px;
}
</style>
