import { motion, useReducedMotion } from 'motion/react'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const cardVariant = {
  hidden: { opacity: 0, scale: 1.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 22 },
  },
}

const SERVICES = [
  {
    id: 'foto',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
        <circle cx="12" cy="13" r="4"/>
      </svg>
    ),
    title: 'Fotografía',
    desc: 'Imágenes que venden, no que adornan. Desde eventos hasta producto — cada foto con propósito y criterio comercial.',
    accent: 'var(--blue)',
    tag: 'Eventos · Producto · Marca',
  },
  {
    id: 'video',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
      </svg>
    ),
    title: 'Video',
    desc: 'Contenido audiovisual que para el scroll en los primeros dos segundos. Sin excusas de calidad ni de presupuesto mínimo.',
    accent: 'var(--red)',
    tag: 'Reels · Spots · Cápsulas',
  },
  {
    id: 'diseno',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Diseño',
    desc: 'Identidad visual con carácter. Rebranding, piezas gráficas y posts que se reconocen al tercer desplazamiento.',
    accent: 'var(--blue)',
    tag: 'Branding · Posts · Rebranding',
  },
  {
    id: 'redes',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.92z"/>
      </svg>
    ),
    title: 'Redes Sociales',
    desc: 'Estrategia, publicación y crecimiento real. Sin que tengas que pensar en cada post ni explicarle tu negocio a nadie.',
    accent: 'var(--red)',
    tag: 'Estrategia · Publicación · Comunidad',
  },
]

export default function Services() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="servicios" style={{ padding: '6rem 0' }}>
      <div style={{ maxWidth: '72rem', marginInline: 'auto', paddingInline: '1.25rem' }}>
        {/* Header */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '3.5rem' }}
        >
          <p style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--red)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            margin: '0 0 0.75rem',
          }}>
            Lo que hacemos
          </p>
          <h2 style={{
            fontFamily: 'var(--font-family-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 0.95,
            textTransform: 'uppercase',
            margin: 0,
            color: 'var(--text)',
          }}>
            Cuatro armas.<br />
            <span style={{ color: 'var(--blue)' }}>Una sola dirección.</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={prefersReduced ? {} : container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.id}
              variants={prefersReduced ? {} : cardVariant}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'border-color 0.25s, background 0.25s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = s.accent
                e.currentTarget.style.background = 'var(--bg-card-hover)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon */}
              <div style={{
                width: 52,
                height: 52,
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: s.accent === 'var(--blue)' ? 'var(--blue-dim)' : 'var(--red-dim)',
                color: s.accent,
                flexShrink: 0,
              }}>
                {s.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-family-display)',
                fontWeight: 800,
                fontSize: '1.75rem',
                lineHeight: 1,
                textTransform: 'uppercase',
                color: 'var(--text)',
                margin: 0,
              }}>
                {s.title}
              </h3>

              {/* Desc */}
              <p style={{
                fontSize: '0.9rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                margin: 0,
                flexGrow: 1,
              }}>
                {s.desc}
              </p>

              {/* Tag */}
              <p style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: s.accent,
                letterSpacing: '0.04em',
                margin: 0,
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--border)',
              }}>
                {s.tag}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
