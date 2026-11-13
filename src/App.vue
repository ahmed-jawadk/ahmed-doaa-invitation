<script setup lang="ts">
import { ref } from 'vue'
import CurtainIntro from './components/CurtainIntro.vue'
import HeroSection from './components/HeroSection.vue'
import VerseSection from './components/VerseSection.vue'
import DetailsSection from './components/DetailsSection.vue'
import CountdownSection from './components/CountdownSection.vue'
import BlessingSection from './components/BlessingSection.vue'

// Flips true when the curtains start to part; the hero's frame and names follow.
const revealed = ref(false)
</script>

<template>
  <CurtainIntro @opened="revealed = true" />
  <main>
    <HeroSection :revealed="revealed" />
    <VerseSection />
    <DetailsSection />
    <CountdownSection />
    <BlessingSection />
  </main>
</template>
