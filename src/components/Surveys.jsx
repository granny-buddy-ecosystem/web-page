import './Surveys.css'

const surveys = [
  {
    id: 'survey-personas-mayores',
    title: 'Para personas mayores',
    subtitle: 'Cuéntanos sobre tus experiencias con la tecnología',
    description:
      '¿Tienes más de 55 años? Tu opinión es esencial para diseñar una app que realmente te ayude. Solo toma 3 minutos.',
    emoji: '👴',
    url: 'https://www.jotform.com/262315158420046',
    color: 'blue',
    badge: '~3 minutos',
  },
  {
    id: 'survey-familiares',
    title: 'Para familiares y cuidadores',
    subtitle: 'Cuéntanos cómo apoyas a tu familiar con el celular',
    description:
      '¿Acompañas a un adulto mayor en el uso de su celular? Tu perspectiva nos ayuda a entender mejor las necesidades reales.',
    emoji: '👨‍👩‍👧',
    url: 'https://www.jotform.com/262314686677065',
    color: 'lavender',
    badge: '~3 minutos',
  },
]

export default function Surveys() {
  return (
    <section className="surveys-section section section-alt" id="encuestas" aria-labelledby="surveys-heading">
      <div className="blob blob-blue surveys__blob-1" aria-hidden="true" />
      <div className="container">
        <header className="surveys__header reveal">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="7" fill="url(#g5)"/>
              <defs>
                <linearGradient id="g5" x1="0" y1="0" x2="14" y2="14">
                  <stop stopColor="#4A72C4"/><stop offset="1" stopColor="#9B7EC8"/>
                </linearGradient>
              </defs>
            </svg>
            Tu opinión importa
          </span>
          <h2 id="surveys-heading" className="section-title">
            Ayúdanos a construir{' '}
            <span className="gradient-text">la app perfecta</span>
          </h2>
          <p className="section-subtitle">
            Estamos en etapa de investigación. Tu experiencia y necesidades nos guiarán para
            crear algo que realmente cambie vidas. Responde la encuesta que más te identifique.
          </p>
        </header>

        <div className="surveys__grid">
          {surveys.map((survey, i) => (
            <div key={survey.id} className={`surveys__card card surveys__card--${survey.color} reveal reveal-delay-${i + 1}`}>
              <div className={`surveys__card-header surveys__card-header--${survey.color}`}>
                <span className="surveys__emoji" aria-hidden="true">{survey.emoji}</span>
                <span className="surveys__badge">{survey.badge}</span>
              </div>
              <div className="surveys__card-body">
                <h3 className="surveys__title" id={`${survey.id}-title`}>{survey.title}</h3>
                <p className="surveys__subtitle">{survey.subtitle}</p>
                <p className="surveys__desc">{survey.description}</p>
              </div>
              <a
                href={survey.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn surveys__btn surveys__btn--${survey.color}`}
                id={`${survey.id}-btn`}
                aria-describedby={`${survey.id}-title`}
              >
                Responder encuesta
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          ))}
        </div>

        <p className="surveys__note reveal reveal-delay-3">
          🔒 Tus respuestas son completamente anónimas y solo se usarán para mejorar el producto.
        </p>
      </div>
    </section>
  )
}
