<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ drawn: boolean }>()

const CX = 150
const CY = 200
const RX = 120
const RY = 164

// Silver beads around the frame, appearing one after another
const beads = computed(() =>
  Array.from({ length: 56 }, (_, i) => {
    const t = (i / 56) * Math.PI * 2 - Math.PI / 2
    return {
      x: CX + (RX + 12) * Math.cos(t),
      y: CY + (RY + 12) * Math.sin(t),
      delay: 600 + i * 22,
    }
  }),
)
</script>

<template>
  <svg viewBox="0 0 300 400" class="h-full w-full overflow-visible" aria-hidden="true">
    <!-- soft plate behind the frame -->
    <ellipse
      :cx="CX" :cy="CY" :rx="RX + 22" :ry="RY + 22"
      class="fill-silver-dark/45 transition-opacity duration-1000"
      :class="props.drawn ? 'opacity-100' : 'opacity-0'"
    />
    <!-- ivory card -->
    <ellipse
      :cx="CX" :cy="CY" :rx="RX" :ry="RY"
      class="origin-center fill-ivory transition-[opacity,transform] duration-[1200ms] ease-soft [transform-box:fill-box]"
      :class="props.drawn ? 'scale-100 opacity-95' : 'scale-90 opacity-0'"
    />
    <!-- silver rings that draw themselves -->
    <ellipse
      :cx="CX" :cy="CY" :rx="RX + 3" :ry="RY + 3" pathLength="1"
      class="frame-draw fill-none stroke-silver" stroke-width="5"
      :class="{ 'is-drawn': props.drawn }"
    />
    <ellipse
      :cx="CX" :cy="CY" :rx="RX + 22" :ry="RY + 22" pathLength="1"
      class="frame-draw fill-none stroke-silver" stroke-width="2.5"
      :class="{ 'is-drawn': props.drawn }"
    />
    <circle
      v-for="(b, i) in beads" :key="i" :cx="b.x" :cy="b.y" r="3.4"
      class="fill-silver transition-opacity duration-500"
      :class="props.drawn ? 'opacity-100' : 'opacity-0'"
      :style="{ transitionDelay: `${b.delay}ms` }"
    />
    <!-- scroll ornaments, top and bottom -->
    <g
      class="fill-none stroke-silver transition-opacity duration-700 delay-[1600ms]"
      stroke-width="3" stroke-linecap="round"
      :class="props.drawn ? 'opacity-100' : 'opacity-0'"
    >
      <path :d="`M${CX},${CY - RY - 24} c14,-18 40,-14 44,2 c3,12 -10,18 -16,8`" />
      <path :d="`M${CX},${CY - RY - 24} c-14,-18 -40,-14 -44,2 c-3,12 10,18 16,8`" />
      <path :d="`M${CX},${CY + RY + 24} c14,18 40,14 44,-2 c3,-12 -10,-18 -16,-8`" />
      <path :d="`M${CX},${CY + RY + 24} c-14,18 -40,14 -44,-2 c-3,-12 10,-18 16,-8`" />
      <circle :cx="CX" :cy="CY - RY - 28" r="6" class="fill-silver stroke-none" />
      <circle :cx="CX" :cy="CY + RY + 28" r="6" class="fill-silver stroke-none" />
    </g>
  </svg>
</template>
