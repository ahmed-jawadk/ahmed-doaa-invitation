<script setup lang="ts">
import drapes from '../assets/drapes.jpg'
import { onMounted, onUnmounted, ref } from 'vue'
import { prefersReducedMotion } from '../composables/useReducedMotion'
import { EVENT } from '../event'

const emit = defineEmits<{ opened: [] }>()

type Phase = 'closed' | 'opening' | 'done'
const phase = ref<Phase>('closed')
const timers: ReturnType<typeof setTimeout>[] = []

function lockScroll(lock: boolean) {
  document.documentElement.style.overflow = lock ? 'hidden' : ''
}

function open() {
  if (phase.value !== 'closed') return
  phase.value = 'opening'
  emit('opened')
  timers.push(
    setTimeout(() => {
      phase.value = 'done'
      lockScroll(false)
    }, 2100),
  )
}

onMounted(() => {
  if (prefersReducedMotion()) {
    phase.value = 'done'
    emit('opened')
    return
  }
  lockScroll(true)
  timers.push(setTimeout(open, 1300))
})

onUnmounted(() => {
  timers.forEach(clearTimeout)
  lockScroll(false)
})
</script>

<template>
  <div v-if="phase !== 'done'" class="fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
    <!-- Two halves of the same photograph part like a real curtain -->
    <div
      class="absolute inset-y-0 left-0 w-1/2 overflow-hidden transition-transform duration-[1900ms] ease-curtain"
      :class="phase === 'opening' ? '-translate-x-full' : 'translate-x-0'"
    >
      <img :src="drapes" alt="" class="absolute inset-y-0 left-0 h-full w-[200%] max-w-none object-cover" />
    </div>
    <div
      class="absolute inset-y-0 right-0 w-1/2 overflow-hidden transition-transform duration-[1900ms] ease-curtain"
      :class="phase === 'opening' ? 'translate-x-full' : 'translate-x-0'"
    >
      <img :src="drapes" alt="" class="absolute inset-y-0 right-0 h-full w-[200%] max-w-none object-cover" />
    </div>

    <button
      type="button"
      class="pointer-events-auto absolute inset-0 flex items-center justify-center transition-opacity duration-700"
      :class="phase === 'opening' ? 'opacity-0' : 'opacity-100'"
      tabindex="-1"
      @click="open"
    >
      <span class="rounded-full bg-ivory/90 px-7 py-3 text-lg font-semibold text-sepia">{{ EVENT.occasion }}</span>
    </button>
  </div>
</template>
