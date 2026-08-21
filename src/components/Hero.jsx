import logoImg from '../assets/logo2.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero section" id="problema" aria-labelledby="hero-heading">
      {/* Decorative blobs */}
      <div className="blob blob-blue hero__blob-1" aria-hidden="true" />
      <div className="blob blob-lavender hero__blob-2" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__content reveal">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="7" fill="url(#g1)"/>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="14" y2="14">
                  <stop stopColor="#4A72C4"/>
                  <stop offset="1" stopColor="#9B7EC8"/>
                </linearGradient>
              </defs>
            </svg>
            El Problema
          </span>

          <h1 id="hero-heading" className="hero__title">
            El mundo se volvió digital.{' '}
            <span className="gradient-text">No todos tuvieron la oportunidad</span>{' '}
            de aprender a vivir en él.
          </h1>

          <p className="hero__body">
            Pedir una cita médica, hablar con la familia, hacer una transferencia o simplemente
            compartir una foto ahora puede depender de saber usar un celular.
          </p>

          <p className="hero__body">
            Para muchas personas mayores, el problema no es tener la tecnología en sus manos,
            sino <strong>sentirse capaces de usarla por sí mismas</strong>.
          </p>

          <div className="hero__quote">
            <blockquote>
              <p>
                "La tecnología debería abrir posibilidades, no crear dependencia."
              </p>
            </blockquote>
          </div>

          <p className="hero__body hero__conclusion">
            Por eso queremos transformar la manera en que las personas mayores aprenden a usarla:
            no haciendo las cosas por ellas, sino <strong>acompañándolas mientras aprenden
            a hacerlas por sí mismas</strong>.
          </p>

          <div className="hero__actions">
            <a href="#lista-de-espera" className="btn btn-primary">
              Únete a la lista de espera
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#como-funciona" className="btn btn-secondary">
              Ver cómo funciona
            </a>
          </div>
        </div>

        <div className="hero__visual reveal reveal-delay-2">
          {/* Logo showcase */}
          <div className="hero__logo-showcase" aria-hidden="true">
            <div className="hero__logo-ring hero__logo-ring--outer" />
            <div className="hero__logo-ring hero__logo-ring--inner" />
            <div className="hero__logo-wrap">
              <img src={logoImg} alt="Granny Buddy" className="hero__logo-img" />
            </div>
            <div className="hero__logo-slogan">Paso a paso, a tu ritmo</div>
          </div>

          <div className="hero__stat-cards">
            <div className="hero__stat card">
              <span className="hero__stat-number">+50M</span>
              <span className="hero__stat-label">adultos mayores en Latinoamérica sin habilidades digitales</span>
            </div>
            <div className="hero__stat card hero__stat--accent">
              <span className="hero__stat-number">8 de 10</span>
              <span className="hero__stat-label">necesitan ayuda constante para usar su celular</span>
            </div>
            <div className="hero__stat card">
              <span className="hero__stat-number">100%</span>
              <span className="hero__stat-label">pueden aprender con el acompañamiento adecuado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
