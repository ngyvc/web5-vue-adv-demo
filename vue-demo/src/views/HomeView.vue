<script setup>
import { ref } from 'vue'

const message = ref('Welcome to the Vue 3 Advanced Demos!')
</script>

<template>
  <section class="home">
    <h2>{{ message }}</h2>

    <nav>
      <ul>
        <!-- generate navigation links from routes -->
        <li v-for="route in $router.options.routes" :key="route.name">
          <RouterLink :to="route.path">{{ route.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </section>
</template>

<style lang="scss" scoped>
.home {
  padding-top: 5rem;
  text-align: center;

  nav ul {
    margin-top: 2rem;
    display: grid;
    border-radius: 0.5rem;
    list-style: none;
    padding: 0;
    justify-content: center;
    gap: 1rem;

    li {
        padding: 0.5rem 1rem;

      a {
        color: #42b983;
        text-decoration: none;
        font-weight: bold;
        padding: 0.5rem 1rem;
        border: 2px solid #42b983;
        border-radius: 0.5rem;
        transition: background-color 0.3s, color 0.3s;

        &:hover {
          background-color: #42b983;
          color: white;
        }
      }
    }
  }
}
</style>
