// Perfil Dev em T: especialista em Frontend, complementos em AWS Cloud e IA
const skillGroups = [
  {
    category: 'Frontend — Especialidade',
    icon: '🎨',
    specialist: false,
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js', 'Responsive Design'],
  },
  {
    category: 'AWS Cloud',
    icon: '☁️',
    specialist: false,
    skills: ['EC2', 'S3', 'Lambda', 'CloudFront', 'RDS', 'IAM', 'Amplify'],
  },
  {
    category: 'Inteligência Artificial',
    icon: '🤖',
    specialist: false,
    skills: ['Claude API', 'OpenAI API', 'Prompt Engineering', 'LangChain', 'Python'],
  },
  {
    category: 'Fundamentos',
    icon: '🛠️',
    specialist: false,
    skills: ['Git', 'Node.js', 'REST APIs', 'Docker', 'Linux', 'Figma'],
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
          {skillGroups.map(({ category, icon, skills, specialist }) => (
            <div key={category} className={`skill-card${specialist ? ' skill-card--specialist' : ''}`}>
              <div className="skill-card__header">
                <span className="skill-card__icon">{icon}</span>
                <h3 className="skill-card__title">{category}</h3>
                {specialist && <span className="skill-card__badge">Especialidade</span>}
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
