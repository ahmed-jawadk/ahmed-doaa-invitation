<script setup lang="ts">
import drapes from '../assets/drapes.jpg'
import { EVENT } from '../event'
</script>

<template>
  <section class="relative isolate flex min-h-[86svh] items-end overflow-hidden">
    <img
      :src="drapes"
      alt=""
      class="absolute inset-0 -z-10 h-full w-full object-cover object-bottom motion-safe:animate-breathe"
    />
    <div class="mx-auto w-full max-w-5xl px-7 pb-16">
      <div v-reveal class="bg-ivory/95 px-7 py-12 text-center sm:px-14">
        <h2 class="sr-only">دعاء</h2>
        <p v-reveal="100" class="text-[clamp(1.4rem,5.5vw,2rem)] font-bold leading-[1.8] text-sepia">
          {{ EVENT.blessing }}
        </p>
        <p v-reveal="200" class="mt-6 text-lg">{{ EVENT.closing }}</p>
        <p v-reveal="300" class="mt-8 text-[clamp(2.4rem,10vw,4rem)] font-extrabold leading-tight text-ink">
          {{ EVENT.groom }} و {{ EVENT.bride }}
        </p>
      </div>
    </div>
  </section>
</template>
