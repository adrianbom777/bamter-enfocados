import { motion, useReducedMotion } from 'motion/react'
import { WA_LINK, IG_LINK } from '../constants'

export default function CTA() {
  const prefersReduced = useReducedMotion()

  return (
    <section style={{
      padding: '6rem 0',
      background: 'var(--bg-card)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Red glow accent */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        bottom: '-20%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        maxWidth: 500,
        background: 'radial-gradient(circle, var(--red-glow) 0%, transparent 70%)',
        opacity: 0.2,
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '72rem',
        marginInline: 'auto',
        paddingInline: '1.25rem',
        position: 'relative',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}>
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}
        >
          <p style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--red)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            El siguiente paso
          </p>

          <h2 style={{
            fontFamily: 'var(--font-family-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 8vw, 6rem)',
            lineHeight: 0.92,
            textTransform: 'uppercase',
            margin: 0,
            color: 'var(--text)',
            maxWidth: '16ch',
          }}>
            Deja de grabar{' '}
            <span style={{ color: 'var(--red)' }}>en baja calidad.</span>
          </h2>

          <p style={{
            fontSize: '1.05rem',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
            maxWidth: '44ch',
            margin: 0,
          }}>
            Tu marca lo está pagando. Escríbenos hoy y en 24 horas te contamos qué podemos hacer por ti.
          </p>
        </motion.div>

        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}
        >
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: 'var(--blue)',
              color: '#fff',
              padding: '1rem 2rem',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              fontFamily: 'var(--font-family-display)',
              fontSize: '1.2rem',
              fontWeight: 800,
              letterSpacing: '0.02em',
              textTransform: 'uppercase',
              transition: 'background 0.2s, transform 0.15s',
              boxShadow: '0 0 40px var(--blue-glow)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--blue-hover)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--blue)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.514 5.818L.057 23.04a.5.5 0 0 0 .612.612l5.222-1.457A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.877 0-3.625-.515-5.12-1.413l-.367-.216-3.8 1.062 1.062-3.8-.216-.367A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            Escribirnos ya
          </a>

          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'transparent',
              color: 'var(--text-muted)',
              padding: '1rem 1.5rem',
              borderRadius: 'var(--radius-sm)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              fontWeight: 500,
              border: '1px solid var(--border)',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--text-muted)'; e.currentTarget.style.color = 'var(--text)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
            </svg>
            @enfocados.mkt
          </a>
        </motion.div>

        {/* Phone display */}
        <motion.p
          initial={prefersReduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            margin: 0,
            letterSpacing: '0.04em',
          }}
        >
          📍 Arequipa, Perú · +51 929 846 177
        </motion.p>
      </div>
    </section>
  )
}
