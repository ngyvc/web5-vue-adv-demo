<script setup>
import { ref } from 'vue'

const message = ref('Welcome to the Vue 3 Advanced Demos!')
</script>

<template>
  <section class="home">
    <h2>{{ message }}</h2>
  </section>
</template>

<style scoped>
.home {
  padding-top: 5rem;
  text-align: center;
}
</style>
