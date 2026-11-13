import { createApp } from 'vue'
import App from './App.vue'
import { vReveal } from './composables/useReveal'
import './style.css'

createApp(App).directive('reveal', vReveal).mount('#app')
