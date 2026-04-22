const skillGroups = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Banco de Dados',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
  },
  {
    category: 'DevOps & Ferramentas',
    icon: '🛠️',
    skills: ['Git', 'Docker', 'CI/CD', 'Linux', 'AWS', 'Figma'],
  },
];

function Skills() {
  return (
    <section id="habilidades" className="skills section section--alt">
      <div className="container">
        <h2 className="section__title">
          Minhas <span className="accent">Habilidades</span>
        </h2>
        <p className="section__subtitle">
          Tecnologias e ferramentas que utilizo para dar vida aos projetos
        </p>
        <div className="skills__grid">
          {skillGroups.map(({ category, icon, skills }) => (
            <div key={category} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon">{icon}</span>
                <h3 className="skill-card__title">{category}</h3>
              </div>
              <div className="skill-card__tags">
                {skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
