function About() {
  const stats = [
    { value: '3+', label: 'Anos de Experiência' },
    { value: '20+', label: 'Projetos Concluídos' },
    { value: '10+', label: 'Tecnologias' },
    { value: '100%', label: 'Dedicação' },
  ];

  return (
    <section id="sobre" className="about section">
      <div className="container">
        <h2 className="section__title">
          Sobre <span className="accent">Mim</span>
        </h2>
        <div className="about__grid">
          <div className="about__text">
            <p>
              Sou um desenvolvedor apaixonado por tecnologia e resolução de problemas.
              Tenho experiência construindo aplicações web modernas, desde interfaces
              interativas até APIs robustas e escaláveis.
            </p>
            <p>
              Acredito que bom código vai além de funcionar — ele deve ser legível,
              bem estruturado e fácil de manter. Estou sempre aprendendo novas
              tecnologias e boas práticas para entregar soluções de alta qualidade.
            </p>
            <p>
              Quando não estou codando, gosto de contribuir para projetos open source,
              explorar novos frameworks e compartilhar conhecimento com a comunidade.
            </p>
            <a href="/curriculo.pdf" download className="btn btn--primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
              Download CV
            </a>
          </div>
          <div className="about__stats">
            {stats.map(({ value, label }) => (
              <div key={label} className="stat-card">
                <span className="stat-card__value accent">{value}</span>
                <span className="stat-card__label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
