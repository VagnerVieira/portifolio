import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contato" className="contact section section--alt">
      <div className="container">
        <h2 className="section__title">
          Entre em <span className="accent">Contato</span>
        </h2>
        <p className="section__subtitle">
          Tem um projeto em mente? Vamos conversar!
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            <h3>Vamos trabalhar juntos</h3>
            <p>
              Estou disponível para projetos freelance, oportunidades de emprego
              ou simplesmente para trocar uma ideia sobre tecnologia.
            </p>
            <div className="contact__links">
              <a href="mailto:seu@email.com" className="contact__item">
                <span className="contact__icon">✉️</span>
                seu@email.com
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact__item">
                <span className="contact__icon">💻</span>
                github.com/seunome
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact__item">
                <span className="contact__icon">🔗</span>
                linkedin.com/in/seunome
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Seu nome"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Conte-me sobre seu projeto..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {status === 'success' && (
              <p className="form-success">Mensagem enviada com sucesso! Em breve entrarei em contato.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
