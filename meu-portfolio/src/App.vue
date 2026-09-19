<script setup>
import { useReveal } from './composables/useReveal'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import Technologies from './components/Technologies.vue'
import Footer from './components/Footer.vue'

useReveal()
</script>

<template>
  <div class="min-h-screen bg-black text-zinc-400 font-sans selection:bg-white/20 selection:text-white relative overflow-hidden">
    
    <div class="fixed inset-0 z-0 pointer-events-none">
      <div class="absolute top-[-20%] left-[-10%] w-[50rem] h-[50rem]" style="background: radial-gradient(circle, rgba(6, 78, 59, 0.25) 0%, transparent 60%);"></div>
      <div class="absolute top-[30%] right-[-10%] w-[45rem] h-[45rem]" style="background: radial-gradient(circle, rgba(22, 78, 99, 0.2) 0%, transparent 60%);"></div>
      <div class="absolute bottom-[-20%] left-[20%] w-[60rem] h-[60rem]" style="background: radial-gradient(circle, rgba(17, 94, 89, 0.2) 0%, transparent 60%);"></div>
    </div>

    <div class="relative z-10">
      <Navbar />

      <main class="max-w-4xl mx-auto px-6 pt-40 pb-32 space-y-48 md:space-y-64">
        <Hero />
        <Experience />
        <Projects />
        <Technologies />
      </main>

      <Footer />
    </div>
  </div>
</template>
