import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const links = ['sobre', 'habilidades', 'projetos', 'contato'];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <button className="navbar__logo" onClick={() => scrollTo('hero')}>
        &lt;Dev /&gt;
      </button>

      <button
        className={`navbar__hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`navbar__links${menuOpen ? ' open' : ''}`}>
        {links.map((item) => (
          <li key={item}>
            <button onClick={() => scrollTo(item)}>
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
