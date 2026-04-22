const languages = [
  { flag: '🇧🇷', name: 'Português', dots: 5, label: 'Nativo' },
  { flag: '🇺🇸', name: 'English',   dots: 3, label: 'B1'     },
  { flag: '🇩🇪', name: 'Deutsch',   dots: 1, label: 'A1'     },
];

const techs = [
  'React', 'JavaScript', 'TypeScript', 'CSS',
  'Node.js', 'AWS', 'Git',
];

function About() {
  return (
    <section id="sobre" className="about section">
      <div className="container">
        <h2 className="section__title">
          Sobre <span className="accent">Mim</span>
        </h2>
        <div className="about__grid">

          <div className="about__text">
            <p>
              Engenheiro de Software formado pela Uniacademia, especializado em Frontend.
              Construo interfaces modernas, performáticas e acessíveis com React e tecnologias web atuais.
            </p>
            <p>
              Meu perfil é em T: especialização em Frontend com AWS Cloud e Inteligência Artificial
              como eixos paralelos — o que me permite construir soluções completas e pensar além da interface.
            </p>
            <p>
              Me comunico em 3 idiomas e estou em transição para oportunidades na Europa,
              especialmente na Alemanha, onde quero contribuir em times ágeis e multiculturais.
            </p>
            <a href="/curriculo-vagner.pdf" download="Currículo Vagner.pdf" className="btn btn--primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Download CV
            </a>
          </div>

          <div className="about__sidebar">

            {/* Card 1 — Tecnologias */}
            <div className="about__card">
              <span className="about__card-title">Tecnologias</span>
              <div className="tech-tags">
                {techs.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Card 2 — Idiomas com bolinhas CEFR */}
            <div className="about__card">
              <span className="about__card-title">Idiomas</span>
              <div className="lang-list">
                {languages.map(({ flag, name, dots, label }) => (
                  <div key={name} className="lang-item">
                    <span className="lang-item__name">{flag} {name}</span>
                    <div className="lang-item__dots">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={`lang-dot${i < dots ? ' lang-dot--filled' : ''}`} />
                      ))}
                    </div>
                    <span className="lang-item__label">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges — Formação e Disponibilidade */}
            <div className="about__bottom-badges">
              <span className="badge">🎓 Eng. de Software — Uniacademia</span>
              <span className="badge badge--available">
                <span className="pulse-dot" />
                Open to Relocation → Germany
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
