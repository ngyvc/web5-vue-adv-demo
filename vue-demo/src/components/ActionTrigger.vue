<script setup>
import { ref } from 'vue'
import WpLoad from './WpLoad.vue'

const isActive = ref(false)

function toggleActive() {
  isActive.value = !isActive.value
}
</script>
<template>
  <button :class="['action-trigger', { active: isActive }]" @click="toggleActive">
    {{ isActive ? 'Active' : 'Inactive' }}
  </button>
  <section>
    <WpLoad v-if="isActive" />
  </section>
</template>
<style lang="scss" scoped>
.action-trigger {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: #28a745;
  }

  &:hover {
    background-color: #0056b3;
  }
}
</style>
