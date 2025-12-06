<script setup>
import InterObsRef from './InterObsRef.vue'
</script>

<template>
  <div class="scroll-container">
    <div class="scroll-item">
      Section 1
      <InterObsRef />
    </div>
    <div class="scroll-item">
      Section 2
      <InterObsRef />
    </div>
    <div class="scroll-item">
      Section 3
      <InterObsRef />
    </div>
  </div>
</template>

<style>
.scroll-container {
  height: 100vh; /* Or a fixed height */
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroll-item {
  height: 100vh; /* Or a fixed height for each item */
  scroll-snap-align: start;
  display: grid;
  place-items: center;
  font-size: 2em;
  border-bottom: 1px solid #ccc;
}
</style>
