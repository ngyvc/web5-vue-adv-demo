<script setup>
import { GoogleMap, Marker } from 'vue3-google-map'

const center = { lat: 45.5145, lng: -73.6756 }
</script>
<template>
  <section class="google-maps-view">
    <section>
      <h1>Google Maps View</h1>
    <p>
      <a href="https://vue3-google-map.com/getting-started/" target="_blank"
        >https://vue3-google-map.com/getting-started/</a
      >
    </p>
    <p>This is a placeholder for the Google Maps integration.</p>
  </section>
    <GoogleMap
    class="my-map"
    api-key="SECRET_GOOGLE_MAPS_API_KEY"
    :center="center"
    :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </section>
</template>

<style scoped>
.google-maps-view {
  padding-top: 4rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.my-map {
  width: 100%;
  height: 500px;
}
</style>
