<script setup>
import PropsExample from '../components/PropsExample.vue'

let books = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    content: 'A novel set in the Roaring Twenties.',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    content: 'A novel about the serious issues of rape and racial inequality.',
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    content: 'A dystopian novel set in a totalitarian society ruled by Big Brother.',
  },
]
</script>

<template>
  <section class="props-view">
    <h1>Props View</h1>
    <PropsExample />

    <!-- <section v-for="book in books" :key="book.id">
      <PropsExample :title="book.title" :author="book.author" :content="book.content" />
    </section> -->
  </section>
</template>
<style lang="scss" scoped>
.props-view {
  margin-top: 4rem;

  h1 {
    text-transform: capitalize;
  }

  section {
    margin-top: 2rem;

    h2 {
      text-transform: capitalize;
    }
  }
}
</style>
