<script setup>
import EmptySpacer from './EmptySpacer.vue'
</script>

<template>
  <figure>
    <div>
      <EmptySpacer />
      <EmptySpacer />
      <EmptySpacer />
      <EmptySpacer />
      <EmptySpacer />
      <img class="develop-photo" src="https://placehold.co/100" />
      <EmptySpacer />
    </div>
    <figcaption></figcaption>
  </figure>
</template>

<style scoped>
img {
  view-timeline-name: --photo;
}

.develop-photo {
  animation: linear develop both;
  animation-timeline: --photo;
  animation-range: entry 10% cover 30%;
}

@keyframes develop {
  from {
    filter: blur(30px);
    scale: 1.1;
    opacity: 0;
  }
  to {
    filter: blur(0);
    scale: 1;
    opacity: 1;
  }
}
@keyframes undevelop {
  from {
    filter: blur(0);
    scale: 1;
    opacity: 1;
  }
  to {
    filter: blur(30px);
    scale: 1.1;
    opacity: 0;
  }
}
</style>
