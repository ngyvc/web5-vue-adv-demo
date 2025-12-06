<script setup>
import { ref } from 'vue'

const target1 = ref(null)
const target2 = ref(null)
const top = ref(null)
const extra = ref(null)
const scrollIntoView = (refName) => {
  // less preferred way
  // if (refName === 'target1' && target1.value) {
  //   target1.value.scrollIntoView({ behavior: 'smooth' })
  // } else if (refName === 'target2' && target2.value) {
  //   target2.value.scrollIntoView({ behavior: 'smooth' })
  // } else if (refName === 'top' && top.value) {
  //   top.value.scrollIntoView({ behavior: 'smooth' })
  // }
  const element = { extra: extra.value, target1: target1.value, target2: target2.value, top: top.value }[refName]
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }
}
</script>
<template>
  <p>Top</p>
  <div class="scroll-into-view-view" ref="top">
    <h1>Scroll Into View Demo</h1>
    <p>
      This is a demo page for the Scroll Into View feature.
    </p>
    <a @click="scrollIntoView('target1')">
      Scroll to Target Element 1
    </a>
    <a @click="scrollIntoView('target2')">
      Scroll to Target Element 2
    </a>
    <a @click="scrollIntoView('extra')">
      Scroll to Extra Element
    </a>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div ref="target1">
      <h2>Target Element 1</h2>
      <p>You have scrolled to the target element!</p>
      <a @click="scrollIntoView('top')">Back to Top</a>
    </div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div ref="target2">
      <h2>Target Element 2</h2>
      <p>You have scrolled to the target element!</p>
      <a @click="scrollIntoView('top')">Back to Top</a>
    </div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div ref="extra">
      <h2>Extra Element</h2>
      <p>You have scrolled to the extra element!</p>
      <a @click="scrollIntoView('top')">Back to Top</a>
    </div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
    <div class="spacer"></div>
  </div>
</template>

<style scoped>
.scroll-into-view-view {
  /* padding-top: 4rem; */

  a {
    display: inline-block;
    margin: 1rem 1rem 2rem 0;
    cursor: pointer;
    color: #42b983;
    text-decoration: underline;
    border: 1px solid #42b983;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #42b983;
      color: white;
    }
  }

  .spacer {
    height: 600px;
    background: linear-gradient(to bottom, #0022ff33, #ff000033);
  }
}
</style>
