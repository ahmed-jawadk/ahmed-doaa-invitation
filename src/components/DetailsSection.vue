<script setup lang="ts">
import { EVENT } from '../event'
</script>

<template>
  <section id="details" class="mx-auto grid max-w-5xl gap-20 px-7 py-28 lg:grid-cols-2 lg:gap-12 lg:py-40">
    <div>
      <h2 v-reveal class="mb-5 text-xl font-bold text-sepia">موعدنا</h2>
      <div v-reveal="90" class="flex items-center gap-5">
        <span class="text-[clamp(6rem,28vw,8.5rem)] font-extrabold leading-[0.95] text-ink">{{ EVENT.day }}</span>
        <span class="flex flex-col">
          <span class="text-3xl font-bold leading-snug">{{ EVENT.month }}</span>
          <span class="text-lg text-sub">{{ EVENT.weekdayYear }}</span>
        </span>
      </div>
      <p v-reveal="180" class="mt-6 text-xl leading-relaxed">
        {{ EVENT.timeFrom }}<br />{{ EVENT.timeTo }}
      </p>
    </div>

    <div>
      <h2 v-reveal class="mb-4 text-xl font-bold text-sepia">المكان</h2>
      <p v-reveal="90" class="text-[clamp(1.9rem,8vw,2.6rem)] font-extrabold leading-tight">{{ EVENT.venue }}</p>
      <p v-reveal="150" class="mt-2 text-lg text-sub">{{ EVENT.city }}</p>
      <div v-reveal="240" class="mt-8">
        <a
          :href="EVENT.mapUrl"
          target="_blank"
          rel="noopener"
          class="group inline-flex min-h-14 items-center gap-3 rounded-full bg-ink px-8 text-lg font-bold text-ivory transition-[transform,background-color] duration-300 hover:bg-sepia active:scale-[0.97]"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" class="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true">
            <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" />
            <circle cx="12" cy="10" r="2.3" />
          </svg>
          افتح الموقع على الخريطة
        </a>
      </div>
    </div>
  </section>
</template>
