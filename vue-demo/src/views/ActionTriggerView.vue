<script setup>
import ActionTrigger from '../components/ActionTrigger.vue'
</script>

<template>
  <section class="action-trigger-view">
    <h1>Action Trigger View</h1>
    <ActionTrigger />
    <ActionTrigger />
  </section>
</template>

<style lang="scss" scoped>
.action-trigger-view {
  margin-top: 4rem;

  h1 {
    text-transform: capitalize;
  }
}
</style>
