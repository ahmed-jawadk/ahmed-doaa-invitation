<script setup lang="ts">
import drapes from '../assets/drapes.jpg'
import OvalFrame from './OvalFrame.vue'
import { EVENT } from '../event'

defineProps<{ revealed: boolean }>()

// Each line of the frame rises in after the frame has drawn
const lines = [
  { text: EVENT.basmala, cls: 'font-quran text-[15px] text-sub', delay: 900 },
  { text: EVENT.occasion, cls: 'mt-3 text-base font-semibold text-sepia', delay: 1200 },
  { text: EVENT.groom, cls: 'text-[clamp(2.6rem,12vw,3.6rem)] font-extrabold leading-[1.15] text-ink', delay: 1450 },
  { text: 'و', cls: 'text-2xl font-semibold leading-none text-sepia', delay: 1650 },
  { text: EVENT.bride, cls: 'text-[clamp(2.6rem,12vw,3.6rem)] font-extrabold leading-[1.15] text-ink', delay: 1850 },
  { text: EVENT.shortDate, cls: 'mt-3 text-[15px] font-medium text-sub', delay: 2150 },
]
</script>

<template>
  <section class="relative isolate flex h-svh min-h-[640px] items-center justify-center overflow-hidden">
    <img
      :src="drapes"
      alt="ستائر شفافة منسدلة"
      class="absolute inset-0 -z-10 h-full w-full object-cover object-top motion-safe:animate-breathe"
    />

    <div class="relative aspect-[3/4] w-[min(90vw,460px)]">
      <OvalFrame :drawn="revealed" />

      <div class="absolute inset-0 flex flex-col items-center justify-center px-[18%] text-center">
        <component
          :is="i === 2 ? 'h1' : 'p'"
          v-for="(line, i) in lines"
          :key="i"
          :class="[
            line.cls,
            'transition-[opacity,transform] duration-[1100ms] ease-soft',
            revealed ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
          ]"
          :style="{ transitionDelay: `${line.delay}ms` }"
          :aria-hidden="i === 3 || i === 4 ? 'true' : undefined"
        >
          <template v-if="i === 2">{{ EVENT.groom }} <span class="sr-only">و {{ EVENT.bride }}</span></template>
          <template v-else>{{ line.text }}</template>
        </component>
      </div>
    </div>

    <a
      href="#verse"
      aria-label="انزل إلى تفاصيل الدعوة"
      class="absolute bottom-8 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-ivory/85 text-sepia transition-[opacity,background-color] duration-700 hover:bg-ivory"
      :class="revealed ? 'opacity-100 delay-[2600ms]' : 'opacity-0'"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" class="motion-safe:animate-cue" aria-hidden="true">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </a>
  </section>
</template>
