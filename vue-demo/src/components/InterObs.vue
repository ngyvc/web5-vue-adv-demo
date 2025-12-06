<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      isVisible.value = true
    } else {
      isVisible.value = false
    }
  })
})

onMounted(() => {
  observer.observe(document.querySelector('.intersecting-element'))
})

onUnmounted(() => {
  observer.disconnect()
})
</script>
<template>
  <div class="intersecting-element" :class="{ visible: isVisible, hidden: !isVisible }">
    <h2>Intersection Observer Default Example</h2>
    <p>This element fades in when it comes into view.</p>
  </div>
</template>

<style scoped>
.intersecting-element {
  opacity: 0;
  transform: translateY(2rem);
  transition:
    opacity 1s ease-out,
    transform 1s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
