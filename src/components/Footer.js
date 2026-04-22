function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          Desenvolvido com <span className="accent">♥</span> por{' '}
          <span className="accent">Seu Nome</span>
        </p>
        <p className="footer__sub">© {new Date().getFullYear()} — Todos os direitos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
