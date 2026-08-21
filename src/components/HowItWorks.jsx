import './HowItWorks.css'

const barriers = [
  {
    quote: '"No sé dónde tocar."',
    solution: 'La app identifica lo que aparece en pantalla y señala visualmente exactamente dónde debe tocar la persona.',
    icon: '🎯',
    color: 'blue',
  },
  {
    quote: '"No entiendo qué tengo que hacer."',
    solution: 'Convierte instrucciones tecnológicas en explicaciones simples, claras y paso a paso, mediante voz o texto.',
    icon: '💬',
    color: 'lavender',
  },
  {
    quote: '"No sé cómo hacer ese movimiento."',
    solution: 'Muestra animaciones directamente sobre la pantalla que enseñan cuándo tocar, deslizar, mantener presionado o realizar otro gesto.',
    icon: '🤲',
    color: 'blue',
  },
  {
    quote: '"Tengo miedo de dañar algo."',
    solution: 'Acompaña a la persona durante cada paso, reduciendo la incertidumbre y permitiéndole explorar el celular con mayor confianza.',
    icon: '🛡️',
    color: 'lavender',
  },
  {
    quote: '"Me explicaron, pero se me olvidó."',
    solution: 'La ayuda está disponible nuevamente cuando la necesita. No tiene que memorizar ni depender de haber entendido antes.',
    icon: '🔁',
    color: 'blue',
  },
  {
    quote: '"No sé cómo se llama lo que necesito."',
    solution: 'Puede simplemente decir o escribir lo que quiere lograr: "quiero enviar esta foto", "quiero hacer una videollamada".',
    icon: '🗣️',
    color: 'lavender',
  },
  {
    quote: '"Cada aplicación funciona diferente."',
    solution: 'El agente observa el contexto actual de la pantalla y adapta las indicaciones al lugar exacto donde se encuentra.',
    icon: '🔍',
    color: 'blue',
  },
  {
    quote: '"Las aplicaciones cambian y ya no encuentro las cosas."',
    solution: 'La guía parte de lo que la persona está viendo en ese momento, no de tutoriales que pueden quedar desactualizados.',
    icon: '🗺️',
    color: 'lavender',
  },
  {
    quote: '"Necesito que alguien venga a ayudarme."',
    solution: 'El acompañamiento está dentro del propio celular y puede activarse cuando aparece la dificultad.',
    icon: '📱',
    color: 'blue',
  },
  {
    quote: '"No quiero que otra persona vea mis datos."',
    solution: 'La persona puede recibir orientación sin entregar su celular. La app no recopila ni conserva el contenido que observa.',
    icon: '🔒',
    color: 'lavender',
  },
  {
    quote: '"Siempre terminan haciéndolo por mí."',
    solution: 'Nuestra app no busca reemplazar a la persona. La guía para que sea ella quien complete cada acción.',
    icon: '🏆',
    color: 'blue',
  },
  {
    quote: '"Siento que la tecnología no es para mí."',
    solution: 'Cada tarea completada se convierte en aprendizaje. El objetivo es construir confianza y autonomía digital para mañana.',
    icon: '🌱',
    color: 'lavender',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-section section section-alt" id="como-funciona" aria-labelledby="how-heading">
      <div className="blob blob-lavender how__blob-1" aria-hidden="true" />
      <div className="container">
        <header className="how__header reveal">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="7" fill="url(#g3)"/>
              <defs>
                <linearGradient id="g3" x1="0" y1="0" x2="14" y2="14">
                  <stop stopColor="#4A72C4"/><stop offset="1" stopColor="#9B7EC8"/>
                </linearGradient>
              </defs>
            </svg>
            Cómo Resolvemos las Barreras
          </span>
          <h2 id="how-heading" className="section-title">
            Cada barrera tiene{' '}
            <span className="gradient-text">una solución</span>
          </h2>
          <p className="section-subtitle">
            Conocemos los obstáculos que enfrentan las personas mayores. Por eso, Granny Buddy
            fue diseñado para resolver cada uno de ellos.
          </p>
        </header>

        <div className="how__cta-banner reveal reveal-delay-1">
          <p className="how__cta-text">
            <strong>No hacemos las cosas por ti.</strong>
            <br />
            Te acompañamos hasta que puedas hacerlas tú.
          </p>
        </div>

        <div className="how__grid" role="list">
          {barriers.map((barrier, i) => (
            <article
              key={i}
              className={`how__card card reveal reveal-delay-${(i % 4) + 1}`}
              role="listitem"
            >
              <div className={`how__card-icon how__card-icon--${barrier.color}`}>
                <span aria-hidden="true">{barrier.icon}</span>
              </div>
              <h3 className="how__card-quote">{barrier.quote}</h3>
              <p className="how__card-solution">{barrier.solution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
