const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'Plataforma de e-commerce completa com carrinho de compras, autenticação, pagamentos e painel administrativo. Construída com React, Node.js e PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: 'https://github.com',
    demo: 'https://exemplo.com',
    featured: true,
  },
  {
    title: 'App de Gestão de Tarefas',
    description:
      'Aplicativo de produtividade com funcionalidades de arrastar e soltar, colaboração em tempo real e integração com calendário.',
    tags: ['React', 'TypeScript', 'Socket.io', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://exemplo.com',
    featured: true,
  },
  {
    title: 'API de Previsão do Tempo',
    description:
      'API RESTful que agrega dados de múltiplas fontes meteorológicas, com cache inteligente e sistema de alertas.',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker'],
    github: 'https://github.com',
    demo: null,
    featured: false,
  },
  {
    title: 'Dashboard Analytics',
    description:
      'Dashboard interativo para visualização de dados de negócios com gráficos em tempo real e relatórios exportáveis.',
    tags: ['React', 'D3.js', 'Node.js', 'AWS'],
    github: 'https://github.com',
    demo: 'https://exemplo.com',
    featured: false,
  },
];

function ProjectCard({ project }) {
  return (
    <div className={`project-card${project.featured ? ' project-card--featured' : ''}`}>
      {project.featured && <span className="project-card__badge">Destaque</span>}
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__description">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-card__links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--outline">
          <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          Código
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--primary">
            Demo ao Vivo →
          </a>
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projetos" className="projects section">
      <div className="container">
        <h2 className="section__title">
          Meus <span className="accent">Projetos</span>
        </h2>
        <p className="section__subtitle">
          Uma seleção dos projetos que desenvolvi
        </p>
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        <div className="projects__cta">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn--outline">
            Ver mais no GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
