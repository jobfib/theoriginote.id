<script lang="ts" setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const data = ref<any[]>([
  {
    href: '/about',
    image: 'carousel-1.webp',
  },
  {
    href: '/about',
    image: 'carousel-2.webp',
  },
  {
    href: '/about',
    image: 'carousel-3.webp',
  },
  {
    href: '/about',
    image: 'carousel-4.webp',
  },
  {
    href: '/about',
    image: 'carousel-5.webp',
  },
]);
</script>

<template>
  <carousel
    :items-to-show="1"
    class="rounded-xl z-20"
    :autoplay="5000"
    :wrap-around="true"
  >
    <slide v-for="slide in data" :key="slide">
      <img class="z-10" :src="`/image/${slide.image}`" />
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<style>
.carousel__prev,
.carousel__next {
  margin-top: -11px;
}
</style>
