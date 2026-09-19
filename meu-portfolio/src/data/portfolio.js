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
        desc: 'Arquitetura e desenvolvimento de Single Page Applications (SPAs) modulares utilizando Vue.js e JavaScript moderno (ES6+). Implementação de formulários densos de alta complexidade (prontuários e fichas clínicas), com validações assíncronas em tempo real, gerenciamento centralizado de estado e consumo otimizado de endpoints REST, priorizando renderização fluida, acessibilidade e fiel adesão a design systems.'
      },
      {
        title: 'Backend & Arquitetura de APIs',
        desc: 'Desenho, construção e versionamento de microsserviços e APIs com PHP (Laravel) e Node.js (TypeScript). Implementação de fluxos seguros de autenticação/autorização (JWT, middlewares), tratamento padronizado de exceções, regras de negócio complexas e estruturação em camadas (MVC, princípios de Clean Code e SOLID), visando manutenibilidade e baixo acoplamento.'
      },
      {
        title: 'Banco de Dados & Performance',
        desc: 'Modelagem e manutenção de bancos relacionais (MySQL), criação de migrations, estruturação de relacionamentos complexos e otimização de queries para evitar gargalos em rotinas de alta concorrência.'
      },
      {
        title: 'Sustentação & Diagnóstico em Produção',
        desc: 'Investigação e resolução de causa-raiz para incidentes críticos (N2), análise sistemática de logs de erro e garantia de consistência e integridade das regras de negócio.'
      },
      {
        title: 'Processos & Engenharia',
        desc: 'Atuação em squads ágeis multidisciplinares (Scrum/Kanban), colaborando em code reviews rigorosos e controle de versão com Git/GitHub (Git Flow). Integração de ferramentas de IA no fluxo diário para aceleração de testes e refatoração.'
      }
    ]
  }
]

export const technologies = [
  {
    category: 'Frontend',
    items: ['Vue.js (Composition API)', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 Semântico', 'CSS3', 'Tailwind CSS', 'Consumo de APIs REST']
  },
  {
    category: 'Backend & APIs',
    items: ['PHP (Laravel)', 'Node.js', 'Express/Fastify', 'RESTful APIs', 'Autenticação/JWT', 'Clean Code & MVC']
  },
  {
    category: 'Bancos de Dados',
    items: ['MySQL', 'Modelagem Relacional', 'Otimização SQL', 'Migrations']
  },
  {
    category: 'Ferramentas & Metodologias',
    items: ['Git/GitHub', 'Docker', 'Git Flow & Code Review', 'Resolução de Incidentes', 'Scrum/Kanban', 'IA para Engenharia']
  },
  {
    category: 'Idiomas',
    items: ['Inglês (Intermediário/Técnico)', 'Espanhol (Básico)']
  }
]
