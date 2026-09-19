<script setup>
import SpotlightCard from './SpotlightCard.vue'
</script>

<template>
  <section id="projetos" class="scroll-mt-32 reveal opacity-0 translate-y-16 scale-95 transition-all duration-[1200ms] delay-100 ease-out">
    <h3 class="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-4 text-center md:text-left">
      Projetos <span class="font-serif italic font-normal text-teal-400">em Destaque.</span>
    </h3>
    <p class="text-lg md:text-xl text-zinc-500 font-light mb-10 md:mb-16 tracking-tight max-w-2xl text-center md:text-left">
      Aplicações práticas com foco em regras de negócio densas e integridade de dados.
    </p>

    <SpotlightCard class="!p-0 group">
      <div class="p-6 md:p-14 flex flex-col justify-between h-full">
        <div>
          <div class="flex justify-center sm:justify-end items-start mb-8 md:mb-10">
            <a href="https://github.com/josue-veloso/duofinance" target="_blank" class="flex items-center justify-center gap-2 text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.02] border border-white/[0.08] px-6 py-3 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 w-full sm:w-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              Ver Código
            </a>
          </div>
          
          <h4 class="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-3 md:mb-4 text-center md:text-left">
            DuoFinance
          </h4>
          <p class="text-zinc-400 font-medium mb-10 md:mb-12 text-base md:text-xl tracking-tight text-center md:text-left">Plataforma & API de Gestão Financeira Compartilhada</p>
          
          <ul class="space-y-8 md:space-y-10 text-zinc-400 text-center md:text-left">
            <li class="leading-relaxed text-base md:text-lg font-light group">
              <strong class="text-white/90 font-medium block mb-2 group-hover:text-teal-400 transition-colors duration-300">Regras de Negócio & Cálculos:</strong>
              <span class="text-zinc-400/90 leading-relaxed md:leading-loose">Modelagem de motor financeiro para rateio automático de despesas, fechamentos mensais e conciliação de saldos proporcionais entre múltiplos usuários.</span>
            </li>
            <li class="leading-relaxed text-base md:text-lg font-light group">
              <strong class="text-white/90 font-medium block mb-2 group-hover:text-teal-400 transition-colors duration-300">Backend & Dados:</strong>
              <span class="text-zinc-400/90 leading-relaxed md:leading-loose">Desenvolvimento de APIs RESTful estruturadas com Node.js e TypeScript, aplicando transações atômicas no banco relacional para assegurar consistência em operações de crédito/débito.</span>
            </li>
            <li class="leading-relaxed text-base md:text-lg font-light group">
              <strong class="text-white/90 font-medium block mb-2 group-hover:text-teal-400 transition-colors duration-300">Interface & Consumo:</strong>
              <span class="text-zinc-400/90 leading-relaxed md:leading-loose">Construção de SPA reativa em Vue.js para visualização de relatórios consolidados, extratos mensais e formulários com validações de dados em tempo real.</span>
            </li>
          </ul>
        </div>
        
        <ul class="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 mt-12 md:mt-16 font-medium text-xs md:text-sm text-zinc-300">
          <li class="bg-white/[0.02] border border-white/[0.06] px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-default">Laravel</li>
          <li class="bg-white/[0.02] border border-white/[0.06] px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-default">Node.js</li>
          <li class="bg-white/[0.02] border border-white/[0.06] px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-default">SQL</li>
          <li class="bg-white/[0.02] border border-white/[0.06] px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-default">TypeScript</li>
          <li class="bg-white/[0.02] border border-white/[0.06] px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-default">PostgreSQL</li>
          <li class="bg-white/[0.02] border border-white/[0.06] px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-default">Vue.js</li>
          <li class="bg-white/[0.02] border border-white/[0.06] px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-default">Docker</li>
        </ul>
      </div>
    </SpotlightCard>
  </section>
</template>
