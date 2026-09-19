<script setup>
import { experiences } from '../data/portfolio'
import SpotlightCard from './SpotlightCard.vue'
</script>

<template>
  <section id="experiencia" class="scroll-mt-32 reveal opacity-0 translate-y-16 scale-95 transition-all duration-[1200ms] delay-100 ease-out">
    <h3 class="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4 text-center md:text-left">
      Trajetória <span class="font-serif italic font-normal text-teal-400">Profissional.</span>
    </h3>
    <p class="text-lg md:text-xl text-zinc-500 font-light mb-10 md:mb-16 tracking-tight max-w-2xl text-center md:text-left">
      Experiência consolidada em ambientes de alta criticidade e regras de negócio complexas.
    </p>
    
    <div class="space-y-8 md:space-y-12">
      <SpotlightCard v-for="(exp, index) in experiences" :key="index" class="!p-6 md:!p-12">
        
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-baseline mb-8 md:mb-12 border-b border-white/[0.04] pb-6 md:pb-8 text-center md:text-left">
          <div>
            <h4 class="text-2xl md:text-3xl font-bold text-white tracking-tight">{{ exp.role }}</h4>
            <div class="flex flex-col md:flex-row items-center md:justify-start gap-1 md:gap-3 text-zinc-400 font-medium mt-3 text-base md:text-lg">
              <span>{{ exp.company }}</span>
              <span class="font-light opacity-30 text-sm hidden md:inline">&bull;</span>
              <span class="font-light text-zinc-500">{{ exp.sector }}</span>
            </div>
          </div>
          <span class="text-sm md:text-base text-zinc-500 font-light mt-4 lg:mt-0 tracking-wide block">{{ exp.period }}</span>
        </div>
        
        <ul class="space-y-8 md:space-y-10 text-zinc-400 text-center md:text-left">
          <li v-for="(achievement, i) in exp.achievements" :key="i" class="leading-relaxed text-base md:text-lg font-light group">
            <strong class="text-white/90 font-medium block mb-2 group-hover:text-teal-400 transition-colors duration-300">{{ achievement.title }}</strong>
            <span class="text-zinc-400/90 leading-relaxed md:leading-loose">{{ achievement.desc }}</span>
          </li>
        </ul>
        
      </SpotlightCard>
    </div>
  </section>
</template>
