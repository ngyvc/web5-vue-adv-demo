<script setup></script>
<template>
  <section class="svg-mask">
    <div class="masked-content">
      <img src="https://placehold.co/600x400" alt="Masked Image" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
// use mask-image to create a mask effect
.svg-mask {
  .masked-content {
    // apply the SVG mask
    -webkit-mask-image: url('@/assets/img/heart.svg');
    mask-image: url('@/assets/img/heart.svg');
    -webkit-mask-size: contain;
    mask-size: contain;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-position: center;
    mask-position: center;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:hover {
      // add a hover effect to scale the image slightly
      -webkit-mask-image: url('@/assets/img/heart-crack.svg');
      mask-image: url('@/assets/img/heart-crack.svg');
    }
  }
}
</style>
