export const navLinks = [
  { name: 'Experiência', href: '#experiencia' },
  { name: 'Projetos', href: '#projetos' },
  { name: 'Stack', href: '#tecnologias' }
]

export const experiences = [
  {
    company: 'Ti.Saúde',
    sector: 'Recife, PE',
    period: 'Setembro 2022 – Presente (4 anos)',
    role: 'Desenvolvedor Fullstack',
    achievements: [
      {
        title: 'Frontend Reativo (Vue.js)',
        desc: 'Desenvolvimento de Single Page Applications (SPAs) modulares para painéis clínicos. Implementação de prontuários complexos com gerenciamento de estado e validações assíncronas, garantindo uma navegação rápida e acessível.'
      },
      {
        title: 'Backend & APIs',
        desc: 'Arquitetura e desenvolvimento de APIs RESTful usando Laravel e Node.js. Implementação de fluxos de autenticação (JWT), tratamento padronizado de erros e regras de negócio baseadas em Clean Code.'
      },
      {
        title: 'Banco de Dados',
        desc: 'Modelagem e otimização de bancos relacionais (MySQL). Criação de migrations estruturadas e otimização de queries pesadas para sustentar a plataforma mesmo em horários de pico.'
      },
      {
        title: 'Sustentação & Diagnóstico',
        desc: 'Atuação direta no diagnóstico e resolução de bugs críticos (N2). Leitura sistemática de logs para encontrar a causa-raiz dos incidentes e garantir a estabilidade do sistema em produção.'
      },
      {
        title: 'Engenharia & Ferramentas',
        desc: 'Vivência diária com metodologias ágeis (Scrum), colaboração ativa em Code Reviews via GitHub e uso de ferramentas de IA para refatoração e ganho de produtividade.'
      }
    ]
  }
]

export const technologies = [
  {
    category: 'Frontend',
    items: ['Vue.js (Composition API)', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Consumo de APIs REST']
  },
  {
    category: 'Backend & APIs',
    items: ['PHP (Laravel)', 'Node.js', 'Express/Fastify', 'APIs RESTful', 'Autenticação JWT', 'Clean Code']
  },
  {
    category: 'Bancos de Dados',
    items: ['MySQL / PostgreSQL', 'Modelagem Relacional', 'Otimização SQL']
  },
  {
    category: 'Ferramentas & DevOps',
    items: ['Git / Git Flow', 'Docker', 'Code Review', 'Scrum / Kanban', 'IA para Engenharia']
  },
  {
    category: 'Idiomas',
    items: ['Inglês (Intermediário/Técnico)', 'Espanhol (Básico)']
  }
]
