<script setup>
import { ref } from 'vue'

const cardRef = ref(null)
const mouse = ref({ x: 0, y: 0 })

const handleMouseMove = (e) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  mouse.value.x = e.clientX - rect.left
  mouse.value.y = e.clientY - rect.top
}
</script>

<template>
  <div 
    ref="cardRef" 
    @mousemove="handleMouseMove" 
    class="relative group overflow-hidden liquid-glass-card rounded-[2rem] border border-white/[0.08] transition-all duration-700"
  >
    <div 
      class="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
      :style="{
        background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(45,212,191,0.08), transparent 40%)`
      }"
    ></div>

    <div class="relative z-10 h-full p-8 md:p-10">
      <slot />
    </div>
  </div>
</template>
