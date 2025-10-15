<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <section class="app">
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/inter-observer">Intersection Observer Demo</RouterLink></li>
        <li><RouterLink to="/snap-scroll">Snap Scroll Demo</RouterLink></li>
      </ul>
    </nav>
    <RouterView />
  </section>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: #33333333;
  padding: 1rem;
  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    li {
      a {
        color: white;
        text-decoration: none;
        background-color: #333;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: background-color 0.3s;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
