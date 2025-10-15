<script setup>
import EmptySpacer from './components/EmptySpacer.vue'
import InterObs from './components/InterObs.vue'
import InterObsRef from './components/InterObsRef.vue'

import { ref } from 'vue'

const stylesOn = ref(false)
</script>

<template>
  <InterObs class="blocks" />
  <InterObsRef class="blocks" />
  <EmptySpacer class="blocks" />
  <InterObs class="blocks" />
  <InterObsRef class="blocks" />
  <EmptySpacer class="blocks" />
  <InterObs class="blocks" />
  <InterObsRef class="blocks" />
  <EmptySpacer class="blocks" />
  <InterObs class="blocks" />
  <InterObsRef class="blocks" />
  <EmptySpacer class="blocks" />
  <InterObs class="blocks" />
  <InterObsRef class="blocks" />
  <EmptySpacer class="blocks" />
  <InterObs class="blocks" />
  <InterObsRef class="blocks" />
</template>

<style scoped>
.blocks {
  padding: 2rem;
  background: #f5f5fa;
  border-radius: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
}
</style>
