<script setup>
import SvgMask from '@/components/SvgMask.vue'
</script>

<template>
  <section class="svg-mask-view">
    <h1>SVG Mask Example</h1>
    <SvgMask />
    <SvgMask />
  </section>
</template>

<style lang="scss" scoped>
.svg-mask-view {
  display: grid;
  padding-top: 3rem;
  justify-items: center;
}
</style>
