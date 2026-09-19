<template>
  <section class="min-h-[70vh] flex flex-col justify-center reveal opacity-0 translate-y-16 scale-95 transition-all duration-[1200ms] cubic-bezier-out">
    <div class="space-y-8">
      
      <h1 class="text-5xl sm:text-6xl md:text-[6.5rem] font-bold tracking-tighter leading-[1.05] pb-2 text-left">
        <span class="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent pr-2">Josué</span> 
        <span class="text-white">Veloso.</span>
      </h1>
      
      <h2 class="flex flex-col md:flex-row md:items-center justify-start gap-2 md:gap-4 text-2xl md:text-3xl font-medium text-zinc-300 tracking-tight text-left">
        <span>Desenvolvedor Fullstack</span>
        <span class="hidden md:block text-zinc-700 font-light">|</span>
        <span class="text-zinc-500 font-light text-xl md:text-2xl">Vue.js &bull; Laravel &bull; Node.js &bull; SQL</span>
      </h2>
      
      <p class="max-w-3xl text-lg md:text-xl text-zinc-400/90 font-light leading-relaxed md:leading-loose pt-4 tracking-tight text-left">
        Desenvolvedor Fullstack com 4 anos de experiência criando aplicações web escaláveis para o setor de saúde. No front-end, construo interfaces modernas e interativas com Vue.js. No back-end (Laravel e Node.js), meu foco é garantir uma arquitetura segura, rápida e de fácil manutenção. Minha rotina vai desde a modelagem do banco de dados até a entrega de features bem estruturadas que resolvem problemas reais dos usuários.
      </p>

      <div class="flex flex-col sm:flex-row items-start justify-start gap-6 pt-10">
        <a href="#projetos" class="w-full sm:w-auto text-center px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:scale-105 hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          Ver Projetos
        </a>

        <div class="flex gap-4">
          <a href="https://github.com/josue-veloso" target="_blank" class="p-3.5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-full text-zinc-400 hover:text-white hover:scale-110 hover:border-teal-500/50 transition-all duration-500" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href="https://linkedin.com/in/josueveloso/" target="_blank" class="p-3.5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] rounded-full text-zinc-400 hover:text-white hover:scale-110 hover:border-cyan-500/50 transition-all duration-500" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
