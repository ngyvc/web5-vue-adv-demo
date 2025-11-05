<script setup>
import { onMounted, ref } from 'vue'
let wordpress = ref([])

let loaded = ref(false)

let props = defineProps({
  title: {
    type: String,
    default: 'WP API Test',
  },
  url: {
    type: String,
    default: 'https://ngy.582mi.com/headless/wp-json/wp/v2/posts',
  },
})

let fetchData = async () => {
  try {
    const response = await fetch(props.url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    wordpress.value = data

    loaded.value = true
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  fetchData()
})
</script>

<template>
  <section class="wp-load">
    <h1>{{ title }}</h1>

    <div v-if="!loaded">Loading...</div>
    <section v-if="loaded">
      <details v-for="item in wordpress" :key="item.id">
        <summary>{{ item.id }} - {{ item.name ? item.name : item.title.rendered }}</summary>
        <p>
          {{ item }}
        </p>
      </details>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.wp-load {
  margin-top: 4rem;

  h1 {
    text-transform: capitalize;
  }

  details {
    margin-bottom: 0.5rem;

    &:hover {
      background: #f0f0f0;
    }

    summary {
      font-weight: bold;
      cursor: pointer;
      margin-bottom: 0.5rem;
    }
    p {
      background: #f9f9f9;
      padding: 1rem;
      border-radius: 4px;
      white-space: pre-wrap;
      font-family: monospace;
      font-size: 0.9rem;
    }
  }
}
</style>
