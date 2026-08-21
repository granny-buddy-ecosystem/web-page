import logoImg from '../assets/logo2.png'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo-link" aria-label="Granny Buddy - Inicio">
            <img src={logoImg} alt="Granny Buddy Logo" className="footer__logo" />
            <div>
              <span className="footer__name">Granny Buddy</span>
              <span className="footer__slogan">Paso a paso, a tu ritmo</span>
            </div>
          </a>
          <p className="footer__desc">
            Acompañamos a las personas mayores mientras aprenden a usar su celular con
            confianza y autonomía.
          </p>
        </div>

        <nav className="footer__links" aria-label="Navegación del pie de página">
          <h4 className="footer__links-title">Navegación</h4>
          <ul className="footer__links-list">
            {[
              { label: 'El Problema', href: '#problema' },
              { label: 'Cómo Funciona', href: '#como-funciona' },
              { label: 'Nosotros', href: '#nosotros' },
              { label: 'Encuestas', href: '#encuestas' },
              { label: 'Lista de Espera', href: '#lista-de-espera' },
            ].map((link) => (
              <li key={link.href}>
                <a href={link.href} className="footer__link">{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__cta-col">
          <h4 className="footer__links-title">¿Listo para empezar?</h4>
          <p className="footer__cta-desc">
            Únete a nuestra lista de espera y sé de los primeros en conocer Granny Buddy.
          </p>
          <a href="#lista-de-espera" className="btn btn-primary footer__cta-btn">
            Únete ahora
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {year} Granny Buddy. Todos los derechos reservados.
          </p>
          <p className="footer__copy footer__copy--right">
            Hecho con ❤️ para las personas mayores
          </p>
        </div>
      </div>
    </footer>
  )
}
