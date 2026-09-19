<script setup>
import { technologies } from '../data/portfolio'
import SpotlightCard from './SpotlightCard.vue'
</script>

<template>
  <section id="tecnologias" class="scroll-mt-32 reveal opacity-0 translate-y-16 scale-95 transition-all duration-[1200ms] delay-100 ease-out">
    <h3 class="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-10 md:mb-16 text-left">
      <span class="text-teal-400">Habilidades & Ferramentas</span>
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <SpotlightCard v-for="tech in technologies" :key="tech.category" class="!p-6 md:!p-10 text-left">
        <h4 class="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 tracking-tighter">{{ tech.category }}</h4>
        <div class="flex flex-wrap justify-start gap-2 md:gap-3">
          <span 
            v-for="item in tech.items" 
            :key="item"
            class="text-xs md:text-sm bg-white/5 text-zinc-300 font-medium px-4 md:px-5 py-2 md:py-2.5 rounded-xl border border-white/5 transition-colors duration-300 cursor-default leading-snug hover:bg-white/10 hover:text-white"
          >
            {{ item }}
          </span>
        </div>
      </SpotlightCard>
    </div>
  </section>
</template>
