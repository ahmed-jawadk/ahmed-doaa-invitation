<script setup lang="ts">
import { EVENT } from '../event'
</script>

<template>
  <section id="verse" class="mx-auto max-w-3xl scroll-mt-10 px-7 pt-28 pb-8 lg:pt-40">
    <h2 class="sr-only">آية كريمة</h2>
    <blockquote v-reveal class="m-0">
      <p class="font-quran text-[clamp(1.45rem,5.6vw,2.1rem)] leading-[2.15] text-ink">
        ﴿{{ EVENT.verse }}﴾
      </p>
      <footer v-reveal="180" class="mt-4 text-[15px] text-sub">{{ EVENT.verseRef }}</footer>
    </blockquote>
  </section>
</template>
