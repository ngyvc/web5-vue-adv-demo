<script setup>
import InterObs from '../components/InterObs.vue'
import InterObsRef from '../components/InterObsRef.vue'
import EmptySpacer from '../components/EmptySpacer.vue'

import { ref } from 'vue'

const stylesOn = ref(false)
</script>

<template>
  <section class="settings">
    <!-- create button to disable styles -->
    <button @click="stylesOn = !stylesOn">{{ stylesOn ? 'Disable' : 'Enable' }} Styles</button>
  </section>
  <section class="intersectional-observer">
    <article>
      <h2 :class="{ block: stylesOn }">Intersection Observer Demo</h2>
      <p :class="{ block: stylesOn }">
        This demo showcases the use of Intersection Observer in Vue 3. Scroll down to see elements
        being observed as they enter the viewport.
      </p>
    </article>
    <InterObs :class="{ block: stylesOn }" />
    <InterObsRef :class="{ block: stylesOn }" />
    <EmptySpacer :class="{ block: stylesOn }" />
    <InterObs :class="{ block: stylesOn }" />
    <InterObsRef :class="{ block: stylesOn }" />
    <EmptySpacer :class="{ block: stylesOn }" />
    <InterObs :class="{ block: stylesOn }" />
    <InterObsRef :class="{ block: stylesOn }" />
    <EmptySpacer :class="{ block: stylesOn }" />
    <InterObs :class="{ block: stylesOn }" />
    <InterObsRef :class="{ block: stylesOn }" />
    <EmptySpacer :class="{ block: stylesOn }" />
    <InterObs :class="{ block: stylesOn }" />
    <InterObsRef :class="{ block: stylesOn }" />
    <EmptySpacer :class="{ block: stylesOn }" />
  </section>
</template>
<style lang="scss" scoped>
.settings {
  padding-top: 3rem;
  text-align: center;
  margin: 2rem 0;
  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background: #007acc;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    &:hover {
      background: #005fa3;
    }
  }
}
.block {
  padding: 2rem;
  background: #f5f5fa;
  border-radius: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
}
</style>
