import { motion, useReducedMotion } from 'motion/react'

const PILLARS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Desde el día 1',
    desc: 'Empezamos a trabajar tu marca desde el primer contacto. Sin procesos interminables de onboarding.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Contenido con criterio',
    desc: 'No producimos por producir. Cada pieza tiene un objetivo: atención, recordación o acción.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Equipo local en Arequipa',
    desc: 'Conocemos la ciudad, los negocios y el mercado. No tercerizamos ni mandamos plantillas genéricas.',
  },
]

export default function Impact() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="nosotros"
      style={{
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          height: '60vw',
          maxWidth: 700,
          maxHeight: 700,
          background: 'radial-gradient(circle, var(--blue-glow) 0%, transparent 70%)',
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '72rem', marginInline: 'auto', paddingInline: '1.25rem', position: 'relative' }}>
        {/* Big statement */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <p style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--blue)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            margin: '0 0 1.5rem',
          }}>
            Por qué Enfoca2
          </p>
          <blockquote style={{
            fontFamily: 'var(--font-family-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            margin: '0 auto',
            maxWidth: '20ch',
            color: 'var(--text)',
          }}>
            "Tu marca compite en segundos.
            {' '}
            <span style={{ color: 'var(--red)' }}>
              Nosotros te damos ese segundo.
            </span>"
          </blockquote>
        </motion.div>

        {/* Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.875rem',
                padding: '1.75rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
              }}
            >
              <div style={{
                width: 44,
                height: 44,
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--blue-dim)',
                color: 'var(--blue)',
              }}>
                {p.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-family-display)',
                fontWeight: 800,
                fontSize: '1.4rem',
                textTransform: 'uppercase',
                color: 'var(--text)',
                margin: 0,
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                margin: 0,
              }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider with brand line */}
        <motion.div
          initial={prefersReduced ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{
            height: 2,
            background: 'linear-gradient(to right, var(--blue), var(--red))',
            borderRadius: 999,
            marginTop: '5rem',
            transformOrigin: 'left',
          }}
        />
      </div>
    </section>
  )
}
