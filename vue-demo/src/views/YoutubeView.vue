<script setup>
import YoutubeEmbed from '@/components/YoutubeEmbed.vue';

import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 2.5,
  wrapAround: true
}
</script>

<template>
  <Carousel v-bind="carouselConfig">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
  <YoutubeEmbed />
  <YoutubeEmbed videoId="dQw4w9WgXcQ" />
  <YoutubeEmbed videoId="3JZ_D3ELwOQ" />


</template>

<style scoped>
.carousel__item {
  display: block;
  height: 150px;
  min-width: 150px;
  background: #42b983;
}
</style>
