import { motion, useReducedMotion } from 'motion/react'
import { WA_LINK } from '../constants'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.25 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="inicio"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '72rem',
        marginInline: 'auto',
        paddingInline: '1.25rem',
        width: '100%',
      }}>
        <motion.div
          variants={prefersReduced ? {} : container}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          {/* Label */}
          <motion.div variants={prefersReduced ? {} : item}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--blue-dim)',
              border: '1px solid rgba(30,68,255,0.25)',
              color: 'var(--blue)',
              padding: '0.375rem 0.875rem',
              borderRadius: '999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              <span style={{
                width: 6, height: 6,
                borderRadius: '50%',
                background: 'var(--blue)',
                animation: 'pulse-dot 2s ease-in-out infinite',
                flexShrink: 0,
              }} />
              Agencia de Marketing · Arequipa
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={prefersReduced ? {} : item}>
            <h1 style={{
              fontFamily: 'var(--font-family-display)',
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: '-0.01em',
              margin: 0,
              fontSize: 'clamp(3.5rem, 10vw, 7.5rem)',
              textTransform: 'uppercase',
            }}>
              <span style={{ color: 'var(--text)', display: 'block' }}>
                Tu público hace
              </span>
              <span style={{ color: 'var(--text)', display: 'block' }}>
                scroll{' '}
                <span style={{ color: 'var(--red)' }}>ahora mismo.</span>
              </span>
            </h1>
          </motion.div>

          {/* Sub-headline */}
          <motion.div variants={prefersReduced ? {} : item}>
            <p style={{
              fontFamily: 'var(--font-family-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.4rem, 3.5vw, 2.5rem)',
              lineHeight: 1.1,
              margin: 0,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
            }}>
              Nosotros hacemos que{' '}
              <span style={{ color: 'var(--blue)', whiteSpace: 'nowrap' }}>te vean a ti.</span>
            </p>
          </motion.div>

          {/* Body */}
          <motion.p
            variants={prefersReduced ? {} : item}
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.65,
              maxWidth: '46ch',
              margin: 0,
            }}
          >
            Fotografía, video, diseño y redes sociales para marcas en Arequipa
            que cansaron de pasar desapercibidas.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={prefersReduced ? {} : item}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'var(--blue)',
                color: '#fff',
                padding: '0.875rem 1.75rem',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                fontWeight: 700,
                letterSpacing: '0.01em',
                transition: 'background 0.2s, transform 0.15s',
                boxShadow: '0 0 30px var(--blue-glow)',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue-hover)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.514 5.818L.057 23.04a.5.5 0 0 0 .612.612l5.222-1.457A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.877 0-3.625-.515-5.12-1.413l-.367-.216-3.8 1.062 1.062-3.8-.216-.367A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Hablemos por WhatsApp
            </a>
            <a
              href="#servicios"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              Ver servicios
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <line x1="8" y1="2" x2="8" y2="14" />
                <polyline points="4,10 8,14 12,10" />
              </svg>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={prefersReduced ? {} : item}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '2rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border)',
              marginTop: '1rem',
            }}
          >
            {[
              { n: '4', label: 'Especialidades' },
              { n: '98+', label: 'Piezas publicadas' },
              { n: 'AQP', label: 'Arequipa, Perú' },
            ].map(s => (
              <div key={s.n}>
                <p style={{
                  fontFamily: 'var(--font-family-display)',
                  fontWeight: 800,
                  fontSize: '2rem',
                  lineHeight: 1,
                  color: 'var(--text)',
                  margin: 0,
                }}>{s.n}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.25rem 0 0', letterSpacing: '0.04em' }}>
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <motion.div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-muted)',
        }}
        animate={prefersReduced ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <polyline points="4,7 10,13 16,7" />
        </svg>
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  )
}
