import { useEffect, useRef, useState, useCallback } from 'react'
import demoVideo from '../assets/demo.mp4'
import './PhoneMock.css'

const steps = [
  {
    icon: '📅',
    title: 'Pedir una cita médica',
    instruction: 'Toca el botón azul de "Salud" en tu pantalla',
    sub: 'Paso 1 de 4 — Entrando a la app de salud',
    tapPosition: { top: '62%', left: '50%' },
  },
  {
    icon: '📞',
    title: 'Videollamada familiar',
    instruction: 'Desliza hacia la derecha para encontrar Contactos',
    sub: 'Paso 2 de 3 — Buscando a tu familiar',
    tapPosition: { top: '72%', left: '75%' },
  },
  {
    icon: '📷',
    title: 'Compartir una foto',
    instruction: 'Toca el ícono de la cámara para seleccionar tu foto',
    sub: 'Paso 1 de 2 — Abriendo la galería',
    tapPosition: { top: '55%', left: '30%' },
  },
  {
    icon: '💳',
    title: 'Hacer una transferencia',
    instruction: 'Ingresa el número de cuenta y luego "Continuar"',
    sub: 'Paso 3 de 5 — Ingresando el destino',
    tapPosition: { top: '68%', left: '50%' },
  },
]

export default function PhoneMock() {
  const [videoOpen, setVideoOpen] = useState(false)

  const openVideo = () => setVideoOpen(true)
  const closeVideo = useCallback(() => setVideoOpen(false), [])

  // Close on Escape key
  useEffect(() => {
    if (!videoOpen) return
    const onKey = (e) => { if (e.key === 'Escape') closeVideo() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [videoOpen, closeVideo])
  const stepRef = useRef(0)
  const intervalRef = useRef(null)
  const screenRef = useRef(null)
  const tapRef = useRef(null)
  const titleRef = useRef(null)
  const instructionRef = useRef(null)
  const subRef = useRef(null)
  const iconRef = useRef(null)

  const updateStep = (index) => {
    const step = steps[index]
    if (!screenRef.current) return

    // Fade out
    screenRef.current.classList.add('phone__screen--fade')

    setTimeout(() => {
      if (iconRef.current) iconRef.current.textContent = step.icon
      if (titleRef.current) titleRef.current.textContent = step.title
      if (instructionRef.current) instructionRef.current.textContent = step.instruction
      if (subRef.current) subRef.current.textContent = step.sub

      // Animate tap indicator
      if (tapRef.current) {
        tapRef.current.style.top = step.tapPosition.top
        tapRef.current.style.left = step.tapPosition.left
        tapRef.current.classList.remove('phone__tap--active')
        void tapRef.current.offsetWidth
        tapRef.current.classList.add('phone__tap--active')
      }

      // Fade in
      screenRef.current.classList.remove('phone__screen--fade')
    }, 350)
  }

  useEffect(() => {
    updateStep(0)
    intervalRef.current = setInterval(() => {
      stepRef.current = (stepRef.current + 1) % steps.length
      updateStep(stepRef.current)
    }, 3500)

    return () => clearInterval(intervalRef.current)
  }, [])

  return (
    <section className="phone-section section section-white" aria-labelledby="mock-heading">
      <div className="blob blob-blue phone__blob-1" aria-hidden="true" />
      <div className="container phone__inner">
        <div className="phone__text reveal">
          <span className="section-label">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <circle cx="7" cy="7" r="7" fill="url(#g2)"/>
              <defs>
                <linearGradient id="g2" x1="0" y1="0" x2="14" y2="14">
                  <stop stopColor="#4A72C4"/><stop offset="1" stopColor="#9B7EC8"/>
                </linearGradient>
              </defs>
            </svg>
            La App en Acción
          </span>
          <h2 id="mock-heading" className="section-title">
            Así es como{' '}
            <span className="gradient-text">Granny Buddy</span>{' '}
            te acompaña
          </h2>
          <p className="section-subtitle">
            La app observa lo que hay en tu pantalla y te explica exactamente qué hacer,
            paso a paso, en tu propio celular. Sin tecnicismos. Sin entregárselo a nadie.
          </p>

          <div className="phone__features">
            {[
              { icon: '🎯', text: 'Señala exactamente dónde tocar' },
              { icon: '🔊', text: 'Explica por voz o texto' },
              { icon: '🤲', text: 'Muestra animaciones de gestos' },
              { icon: '🔒', text: 'Sin guardar tu información' },
            ].map((f) => (
              <div key={f.text} className="phone__feature-item">
                <span className="phone__feature-icon">{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="phone__device-wrapper reveal reveal-delay-2">
          {/* Demo button above phone */}
          <button
            id="demo-video-btn"
            className="phone__demo-btn"
            onClick={openVideo}
            aria-label="Ver demo de la app"
          >
            <span className="phone__demo-btn-icon" aria-hidden="true">▶</span>
            <span>Ver demo</span>
          </button>
          {/* Phone frame */}
          <div className="phone__device" role="img" aria-label="Demostración de la app Granny Buddy en un teléfono">
            {/* Notch */}
            <div className="phone__notch" aria-hidden="true">
              <div className="phone__camera" />
              <div className="phone__speaker" />
            </div>

            {/* Screen */}
            <div className="phone__screen" ref={screenRef}>
              {/* Status bar */}
              <div className="phone__status-bar" aria-hidden="true">
                <span>9:41</span>
                <div className="phone__status-icons">
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <rect x="0" y="3" width="3" height="9" rx="1" fill="currentColor" opacity="0.4"/>
                    <rect x="4.5" y="2" width="3" height="10" rx="1" fill="currentColor" opacity="0.6"/>
                    <rect x="9" y="0" width="3" height="12" rx="1" fill="currentColor"/>
                    <rect x="13.5" y="1" width="2.5" height="10" rx="1" fill="currentColor"/>
                  </svg>
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                    <path d="M8 2C5.4 2 3.1 3.1 1.5 4.8L0 3.2C2 1.2 4.9 0 8 0s6 1.2 8 3.2L14.5 4.8C12.9 3.1 10.6 2 8 2z" fill="currentColor" opacity="0.4"/>
                    <path d="M8 5.5c-1.7 0-3.2.7-4.3 1.8L2.3 6C3.7 4.5 5.7 3.5 8 3.5s4.3 1 5.7 2.5l-1.4 1.3C11.2 6.2 9.7 5.5 8 5.5z" fill="currentColor" opacity="0.7"/>
                    <circle cx="8" cy="10" r="2" fill="currentColor"/>
                  </svg>
                  <div className="phone__battery" />
                </div>
              </div>

              {/* App content */}
              <div className="phone__app">
                <div className="phone__app-header">
                  <div className="phone__app-icon" ref={iconRef} aria-hidden="true">📅</div>
                  <div className="phone__app-info">
                    <div className="phone__app-title" ref={titleRef}>Pedir una cita médica</div>
                    <div className="phone__app-sub" ref={subRef}>Paso 1 de 4</div>
                  </div>
                </div>

                {/* Simulated app UI */}
                <div className="phone__fake-app" aria-hidden="true">
                  <div className="phone__fake-bar phone__fake-bar--lg" />
                  <div className="phone__fake-bar phone__fake-bar--md" />
                  <div className="phone__fake-grid">
                    <div className="phone__fake-card phone__fake-card--blue" />
                    <div className="phone__fake-card phone__fake-card--lavender" />
                    <div className="phone__fake-card" />
                    <div className="phone__fake-card" />
                  </div>
                  <div className="phone__fake-bar phone__fake-bar--sm" />
                  <div className="phone__fake-bar phone__fake-bar--md" />
                  <div className="phone__fake-bar phone__fake-bar--lg" />
                  <div className="phone__fake-bar phone__fake-bar--sm" />
                </div>

                {/* Tap indicator */}
                <div className="phone__tap" ref={tapRef} aria-hidden="true">
                  <div className="phone__tap-ring phone__tap-ring--1" />
                  <div className="phone__tap-ring phone__tap-ring--2" />
                  <div className="phone__tap-dot" />
                </div>
              </div>

              {/* Instruction overlay at bottom */}
              <div className="phone__instruction" role="status" aria-live="polite">
                <div className="phone__instruction-badge">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="8" fill="url(#gi)"/>
                    <path d="M8 4v5M8 11v1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gi" x1="0" y1="0" x2="16" y2="16">
                        <stop stopColor="#4A72C4"/><stop offset="1" stopColor="#9B7EC8"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  Granny Buddy
                </div>
                <p className="phone__instruction-text" ref={instructionRef}>
                  Toca el botón azul de "Salud" en tu pantalla
                </p>
              </div>
            </div>

            {/* Home bar */}
            <div className="phone__home-bar" aria-hidden="true" />
          </div>

          {/* Floating labels */}
          <div className="phone__float-label phone__float-label--1" aria-hidden="true">
            <span>👆 Señalamos exactamente aquí</span>
          </div>
          <div className="phone__float-label phone__float-label--2" aria-hidden="true">
            <span>🔊 Voz y texto</span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoOpen && (
        <div
          className="video-modal__backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="Demo de Granny Buddy"
          onClick={closeVideo}
        >
          <div
            className="video-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal__close"
              onClick={closeVideo}
              aria-label="Cerrar video"
            >
              ✕
            </button>
            <video
              className="video-modal__video"
              src={demoVideo}
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  )
}
