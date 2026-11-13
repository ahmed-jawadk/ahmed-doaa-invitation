<script setup lang="ts">
import { useCountdown } from '../composables/useCountdown'
import { EVENT } from '../event'

const { parts, isOver } = useCountdown(EVENT.startsAt)
</script>

<template>
  <section class="bg-ivory">
    <div class="mx-auto max-w-5xl px-7 py-24 lg:py-32">
      <h2 v-reveal class="text-xl font-bold text-sepia">
        {{ isOver ? 'بدأ الفرح' : 'باقٍ على اللقاء' }}
      </h2>
      <div class="mt-10 grid grid-cols-4 gap-3 text-center" role="timer" aria-live="off">
        <div v-for="(p, i) in parts" :key="p.key" v-reveal="i * 80">
          <div class="relative h-[1.2em] overflow-hidden text-[clamp(2.4rem,11vw,5rem)] font-extrabold leading-[1.2] text-ink">
            <Transition name="digit">
              <span :key="p.text" class="absolute inset-0">{{ p.text }}</span>
            </Transition>
          </div>
          <div class="mt-1 text-base text-sub">{{ p.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
