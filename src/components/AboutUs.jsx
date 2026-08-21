import './AboutUs.css'

export default function AboutUs() {
  return (
    <section className="about-section section section-white" id="nosotros" aria-labelledby="about-heading">
      <div className="blob blob-blue about__blob-1" aria-hidden="true" />
      <div className="blob blob-lavender about__blob-2" aria-hidden="true" />
      <div className="container">
        <header className="about__header reveal">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="7" fill="url(#g4)"/>
              <defs>
                <linearGradient id="g4" x1="0" y1="0" x2="14" y2="14">
                  <stop stopColor="#4A72C4"/><stop offset="1" stopColor="#9B7EC8"/>
                </linearGradient>
              </defs>
            </svg>
            Quiénes Somos
          </span>
          <h2 id="about-heading" className="section-title">
            Nuestra <span className="gradient-text">misión y visión</span>
          </h2>
        </header>

        <div className="about__grid">
          {/* Misión */}
          <div className="about__card about__card--mission reveal reveal-delay-1">
            <div className="about__card-icon about__card-icon--blue" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4z" stroke="#4A72C4" strokeWidth="2"/>
                <path d="M14 9v5l3 3" stroke="#4A72C4" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="14" cy="14" r="2" fill="#4A72C4"/>
              </svg>
            </div>
            <h3 className="about__card-title">Nuestra Misión</h3>
            <p className="about__card-body">
              Ayudar a las personas mayores a desenvolverse en el mundo digital mediante una guía
              <strong> sencilla, personalizada y disponible justo cuando la necesitan</strong>,
              que les permita aprender mientras utilizan su propio celular.
            </p>
          </div>

          {/* Visión */}
          <div className="about__card about__card--vision reveal reveal-delay-2">
            <div className="about__card-icon about__card-icon--lavender" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 14s3-6 10-6 10 6 10 6-3 6-10 6-10-6-10-6z" stroke="#9B7EC8" strokeWidth="2"/>
                <circle cx="14" cy="14" r="3" stroke="#9B7EC8" strokeWidth="2"/>
                <circle cx="14" cy="14" r="1" fill="#9B7EC8"/>
              </svg>
            </div>
            <h3 className="about__card-title">Nuestra Visión</h3>
            <p className="about__card-body">
              Un mundo en el que la edad no sea una barrera para aprovechar la tecnología; donde
              cada persona mayor pueda utilizarla con{' '}
              <strong>confianza, autonomía y seguridad</strong> para comunicarse, aprender,
              acceder a servicios y descubrir nuevas posibilidades.
            </p>
          </div>
        </div>

        {/* Values row */}
        <div className="about__values reveal reveal-delay-3">
          {[
            { emoji: '🤝', label: 'Acompañamiento', desc: 'Estamos contigo en cada paso' },
            { emoji: '💪', label: 'Autonomía', desc: 'Tú lo haces, nosotros te guiamos' },
            { emoji: '❤️', label: 'Confianza', desc: 'Sin miedo a equivocarte' },
            { emoji: '🌟', label: 'Dignidad', desc: 'Respeto y paciencia siempre' },
          ].map((v) => (
            <div key={v.label} className="about__value">
              <span className="about__value-emoji" aria-hidden="true">{v.emoji}</span>
              <span className="about__value-label">{v.label}</span>
              <span className="about__value-desc">{v.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
