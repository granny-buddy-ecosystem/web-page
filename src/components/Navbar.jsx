import { useState, useEffect } from 'react'
import logoImg from '../assets/logo2.png'
import './Navbar.css'

const navLinks = [
  { label: 'El Problema', href: '#problema' },
  { label: 'Cómo Funciona', href: '#como-funciona' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Encuestas', href: '#encuestas' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        <a href="#" className="navbar__brand" aria-label="Granny Buddy - Inicio">
          <img src={logoImg} alt="Granny Buddy Logo" className="navbar__logo" />
          <span className="navbar__name">Granny Buddy</span>
        </a>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`} aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
          <a href="#lista-de-espera" className="btn btn-primary navbar__cta" onClick={handleNavClick}>
            Únete a la lista
          </a>
        </nav>

        <button
          className="navbar__burger"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
          <span className={`burger-line${menuOpen ? ' open' : ''}`} />
        </button>
      </div>
    </header>
  )
}
