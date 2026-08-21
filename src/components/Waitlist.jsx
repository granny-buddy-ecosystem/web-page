import { useState } from 'react'
import './Waitlist.css'

// ⚠️ IMPORTANTE: Reemplaza este endpoint con el tuyo de Formspree.
// Crea una cuenta en https://formspree.io, crea un formulario y pega tu endpoint aquí.
// Ejemplo: 'https://formspree.io/f/xyzabcde'
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdenbwee'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email }),
      })

      if (res.ok) {
        setStatus('success')
        setEmail('')
        setName('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="waitlist-section section" id="lista-de-espera" aria-labelledby="waitlist-heading">
      <div className="blob blob-lavender waitlist__blob-1" aria-hidden="true" />
      <div className="blob blob-blue waitlist__blob-2" aria-hidden="true" />

      <div className="container waitlist__inner">
        <div className="waitlist__content reveal">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="7" fill="url(#g6)" />
              <defs>
                <linearGradient id="g6" x1="0" y1="0" x2="14" y2="14">
                  <stop stopColor="#4A72C4" /><stop offset="1" stopColor="#9B7EC8" />
                </linearGradient>
              </defs>
            </svg>
            Lista de Espera
          </span>

          <h2 id="waitlist-heading" className="section-title">
            Sé de los primeros en{' '}
            <span className="gradient-text">conocer Granny Buddy</span>
          </h2>
          <p className="section-subtitle">
            Estamos construyendo algo especial. Ingresa tu correo y te avisaremos cuando la app
            esté lista, además de novedades exclusivas para los primeros en unirse.
          </p>

          <ul className="waitlist__perks" aria-label="Beneficios de unirte">
            {[
              'Acceso anticipado a la app antes del lanzamiento',
              'Novedades y actualizaciones del desarrollo',
              'Invitación a pruebas beta exclusivas',
            ].map((perk) => (
              <li key={perk} className="waitlist__perk">
                <svg className="waitlist__perk-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <circle cx="9" cy="9" r="9" fill="url(#gc)" />
                  <path d="M5.5 9l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="gc" x1="0" y1="0" x2="18" y2="18">
                      <stop stopColor="#4A72C4" /><stop offset="1" stopColor="#9B7EC8" />
                    </linearGradient>
                  </defs>
                </svg>
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <div className="waitlist__form-wrap reveal reveal-delay-2">
          <div className="waitlist__card">
            {status === 'success' ? (
              <div className="waitlist__success" role="status" aria-live="polite">
                <div className="waitlist__success-icon" aria-hidden="true">🎉</div>
                <h3 className="waitlist__success-title">¡Ya estás en la lista!</h3>
                <p className="waitlist__success-body">
                  Gracias por unirte. Te avisaremos en cuanto Granny Buddy esté listo para ti.
                </p>
              </div>
            ) : (
              <>
                <div className="waitlist__form-header">
                  <h3 className="waitlist__form-title">Reserva tu lugar</h3>
                  <p className="waitlist__form-sub">Sin spam. Cancelable cuando quieras.</p>
                </div>

                <form onSubmit={handleSubmit} className="waitlist__form" noValidate>
                  <div className="waitlist__field">
                    <label htmlFor="waitlist-name" className="waitlist__label">
                      Nombre <span className="waitlist__optional">(opcional)</span>
                    </label>
                    <input
                      id="waitlist-name"
                      type="text"
                      name="name"
                      className="waitlist__input"
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="given-name"
                    />
                  </div>

                  <div className="waitlist__field">
                    <label htmlFor="waitlist-email" className="waitlist__label">
                      Correo electrónico <span className="waitlist__required" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="waitlist-email"
                      type="email"
                      name="email"
                      className="waitlist__input"
                      placeholder="tucorreo@ejemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="username"
                      inputMode="email"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="waitlist__error" role="alert">
                      Ocurrió un error. Por favor intenta de nuevo.
                    </p>
                  )}

                  <button
                    type="submit"
                    id="waitlist-submit-btn"
                    className="btn btn-primary waitlist__submit"
                    disabled={status === 'loading' || !email}
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="waitlist__spinner" aria-hidden="true" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        Unirme a la lista
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="waitlist__privacy">
                    🔒 Tu correo está seguro. No lo compartiremos con nadie.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
