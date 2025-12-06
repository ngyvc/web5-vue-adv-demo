<script setup>
import { ref } from 'vue'

const blendMode = ref('normal')
const color = ref('linear-gradient(90deg, black, white)')
const opacity = ref(1)
</script>

<template>
  <section class="blend-modes">
    <figure>
      <div class="blend-mode-container">
        <label for="blend-mode">Select Blend Mode:</label>
        <select v-model="blendMode">
          <option value="normal">normal</option>
          <option value="multiply">multiply</option>
          <option value="screen">screen</option>
          <option value="overlay">overlay</option>
          <option value="darken">darken</option>
          <option value="lighten">lighten</option>
          <option value="color-dodge">color-dodge</option>
          <option value="color-burn">color-burn</option>
          <option value="hard-light">hard-light</option>
          <option value="soft-light">soft-light</option>
          <option value="difference">difference</option>
          <option value="exclusion">exclusion</option>
          <option value="hue">hue</option>
          <option value="saturation">saturation</option>
          <option value="color">color</option>
          <option value="luminosity">luminosity</option>
        </select>

        <div class="buttons">
          <button @click="resetBlendMode">Reset</button>
          <button @click="blendMode = 'multiply'">Multiply</button>
          <button @click="blendMode = 'screen'">Screen</button>
          <button @click="blendMode = 'overlay'">Overlay</button>
          <button @click="blendMode = 'darken'">Darken</button>
          <button @click="blendMode = 'lighten'">Lighten</button>
          <button @click="blendMode = 'color-dodge'">Color Dodge</button>
          <button @click="blendMode = 'color-burn'">Color Burn</button>
          <button @click="blendMode = 'hard-light'">Hard Light</button>
          <button @click="blendMode = 'soft-light'">Soft Light</button>
          <button @click="blendMode = 'difference'">Difference</button>
          <button @click="blendMode = 'exclusion'">Exclusion</button>
          <button @click="blendMode = 'hue'">Hue</button>
          <button @click="blendMode = 'saturation'">Saturation</button>
          <button @click="blendMode = 'color'">Color</button>
          <button @click="blendMode = 'luminosity'">Luminosity</button>
        </div>

        <div class="opacity-options">
          <label for="opacity">Overlay Opacity:</label>
          <input type="range" id="opacity" min="0" max="1" step="0.01" v-model="opacity" />
          <span>{{ (opacity * 100).toFixed(0) }}%</span>
        </div>

        <div class="color-options">
          <label for="color">Background Color:</label>
          <select id="color" v-model="color">
            <option value="linear-gradient(90deg, black, white)">Black to White Gradient</option>
            <option value="linear-gradient(90deg, red, yellow)">Red to Yellow Gradient</option>
            <option value="linear-gradient(90deg, blue, green)">Blue to Green Gradient</option>
            <!-- full black -->
            \
            <option value="black">Black</option>
            <!-- full white -->
            <option value="white">White</option>
            <!-- full red -->
            <option value="red">Red</option>
            <!-- full green -->
            <option value="green">Green</option>
            <!-- full blue -->
            <option value="blue">Blue</option>
            <!-- semi-transparent black -->
            <option value="rgba(0, 0, 0, 0.5)">Semi-Transparent Black</option>
            <!-- semi-transparent white -->
            <option value="rgba(255, 255, 255, 0.5)">Semi-Transparent White</option>
            <!-- semi-transparent red -->
            <option value="rgba(255, 0, 0, 0.5)">Semi-Transparent Red</option>
            <!-- semi-transparent green -->
            <option value="rgba(0, 255, 0, 0.5)">Semi-Transparent Green</option>
            <!-- semi-transparent blue -->
            <option value="rgba(0, 0, 255, 0.5)">Semi-Transparent Blue</option>
          </select>
        </div>

        <div class="blend-mode-wrapper">
          <img class="blend-mode-photo" src="@/assets/img/blend.jpg" alt="A placeholder image" />
          <!-- black to white gradient background color -->
          <div
            class="blend-mode-color"
            :style="{ background: color, 'mix-blend-mode': blendMode, opacity: opacity }"
          ></div>
        </div>
      </div>
      <figcaption>Current blend mode: {{ blendMode }}</figcaption>
    </figure>
  </section>
</template>

<style scoped>
.blend-mode-container {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 1rem;
}
.blend-mode-wrapper {
  position: relative;
  width: 300px;
  height: 200px;
}
.blend-mode-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.blend-mode-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.buttons {
  button {
    margin: 0.25rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #0056b3;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
    }
    &:active {
      background-color: #004085;
    }
  }
}
</style>
