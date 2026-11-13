# دعوة خطوبة أحمد و دعاء — تصميم الستارة

Vue 3 (Composition API, `<script setup>` + TypeScript) · Tailwind CSS v4 · Vite

```bash
npm install
npm run dev      # local preview
npm run build    # production build in dist/
```

- All invitation text, date, venue and map link: `src/event.ts`
- Fonts: Amiri Quran (basmala and the verse), Cairo (everything else) — loaded in `index.html`, tokens in `src/style.css`
- Animations: curtain opening (`CurtainIntro.vue`), self-drawing silver frame (`OvalFrame.vue`), staggered names (`HeroSection.vue`), scroll reveals (`v-reveal`, `composables/useReveal.ts`), live countdown with sliding digits (`CountdownSection.vue`), slow photo drift. All respect `prefers-reduced-motion`.
- Swap `src/assets/drapes.jpg` for a real photo (portrait, ~800×1300) if you like.
