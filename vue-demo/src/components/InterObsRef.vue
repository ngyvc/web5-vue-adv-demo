<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(null)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value.classList.add('visible')
    } else {
      isVisible.value.classList.remove('visible')
    }
  })
})

onMounted(() => {
  observer.observe(isVisible.value)
})

onUnmounted(() => {
  observer.disconnect()
})
</script>
<template>
  <div ref="isVisible" class="intersecting-element">
    <h2>Intersection Observer using Ref Example</h2>
    <p>This element fades in when it comes into view.</p>
    <!-- <img src="https://placehold.co/600x400" alt="" /> -->
  </div>
</template>

<style lang="scss" scoped>
.intersecting-element {
  opacity: 0;
  transform: translateY(2rem);
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;
  // transition-delay: 0.4s;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-top: 1rem;
    border-radius: 8px;
  }
}
</style>
