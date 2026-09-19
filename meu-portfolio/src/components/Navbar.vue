<script setup>
import { ref, onMounted } from 'vue'
import { navLinks } from '../data/portfolio'

const isScrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
})
</script>

<template>
  <header class="fixed top-0 w-full z-50">
    <!-- Fundo separado -->
    <div 
      class="absolute inset-0 transition-all duration-500"
      :class="isScrolled ? 'bg-black/60 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent opacity-0'"
    ></div>
    
    <div 
      class="relative max-w-5xl mx-auto px-6 flex items-center justify-between transition-all duration-500 ease-out"
      :class="isScrolled ? 'h-16' : 'h-24'"
    >
      <a href="#" class="text-2xl font-bold text-white tracking-tighter">
        Josué Veloso.
      </a>
      
      <nav class="hidden md:flex gap-8 items-center">
        <a v-for="link in navLinks" :key="link.name" :href="link.href" class="text-sm font-medium text-zinc-400 hover:text-white transition-all duration-300">
          {{ link.name }}
        </a>
        <a 
          href="/cv.pdf" 
          download
          class="px-6 py-2.5 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300"
        >
          Baixar CV (PDF)
        </a>
      </nav>
      
      <div class="md:hidden">
        <a 
          href="/cv.pdf" 
          download
          class="px-5 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-zinc-200 transition-all duration-300"
        >
          CV
        </a>
      </div>
    </div>
  </header>
</template>
