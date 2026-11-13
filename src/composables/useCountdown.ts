import { computed, onMounted, onUnmounted, ref } from 'vue'

const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩'

export function toArabicDigits(value: number | string, pad = 2): string {
  return String(value)
    .padStart(pad, '0')
    .replace(/[0-9]/g, (d) => AR_DIGITS[Number(d)])
}

export function useCountdown(targetIso: string) {
  const target = Date.parse(targetIso)
  const now = ref(Date.now())
  let timer: ReturnType<typeof setInterval> | undefined

  onMounted(() => {
    timer = setInterval(() => (now.value = Date.now()), 1000)
  })
  onUnmounted(() => clearInterval(timer))

  const remaining = computed(() => Math.max(0, target - now.value))
  const isOver = computed(() => remaining.value === 0)

  const parts = computed(() => {
    const ms = remaining.value
    return [
      { key: 'days', label: 'يوم', value: Math.floor(ms / 864e5) },
      { key: 'hours', label: 'ساعة', value: Math.floor(ms / 36e5) % 24 },
      { key: 'minutes', label: 'دقيقة', value: Math.floor(ms / 6e4) % 60 },
      { key: 'seconds', label: 'ثانية', value: Math.floor(ms / 1e3) % 60 },
    ].map((p) => ({ ...p, text: toArabicDigits(p.value) }))
  })

  return { parts, isOver }
}
