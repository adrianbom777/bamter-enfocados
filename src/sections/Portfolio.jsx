import { motion, useReducedMotion } from 'motion/react'

const CASES = [
  {
    id: 'missperu',
    category: 'Fotografía',
    client: 'Miss Perú Arequipa',
    desc: 'Cobertura fotográfica completa del certamen regional. Sesiones de casting, gala y coronación.',
    bg: 'linear-gradient(135deg, #1a0a0a 0%, #3d0f0f 50%, #1a0505 100%)',
    accentColor: 'var(--red)',
    tag: 'Evento · Fotografía',
    number: '01',
  },
  {
    id: 'autoarte',
    category: 'Redes Sociales',
    client: 'Autoarte',
    desc: 'Transformación digital desde cero: presencia en redes, estrategia de contenido e identidad visual coherente.',
    bg: 'linear-gradient(135deg, #060e2a 0%, #0a1a4a 50%, #060e2a 100%)',
    accentColor: 'var(--blue)',
    tag: 'Marca · Redes · Contenido',
    number: '02',
  },
  {
    id: 'colegio',
    category: 'Rebranding',
    client: 'Colegio M. A. de Mollendo',
    desc: 'Rebranding institucional completo: nueva identidad, paleta y piezas gráficas para el colegio María Auxiliadora.',
    bg: 'linear-gradient(135deg, #080a1a 0%, #12183a 50%, #0a0f28 100%)',
    accentColor: 'var(--blue)',
    tag: 'Diseño · Identidad',
    number: '03',
  },
  {
    id: 'gastro',
    category: 'Fotografía',
    client: 'Gastronomía Arequipeña',
    desc: 'Fotografía de platos y locales para restaurantes locales. El Adobo y el Rocoto nunca se vieron tan bien.',
    bg: 'linear-gradient(135deg, #1a0a00 0%, #3d1a00 50%, #1a0800 100%)',
    accentColor: 'var(--red)',
    tag: 'Restaurantes · Producto',
    number: '04',
  },
]

export default function Portfolio() {
  const prefersReduced = useReducedMotion()

  return (
    <section id="portafolio" style={{ padding: '6rem 0', background: 'var(--bg-card)' }}>
      <div style={{ maxWidth: '72rem', marginInline: 'auto', paddingInline: '1.25rem' }}>
        {/* Header */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '3.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}
        >
          <div>
            <p style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--blue)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              margin: '0 0 0.75rem',
            }}>
              Casos reales
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
              Marcas que ya<br />
              <span style={{ color: 'var(--red)' }}>paran el scroll.</span>
            </h2>
          </div>
          <p style={{
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
            maxWidth: '32ch',
            lineHeight: 1.65,
            margin: 0,
          }}>
            Cada trabajo en Arequipa tiene nombre y resultado. No mostramos demos ni mockups de clientes ficticios.
          </p>
        </motion.div>

        {/* Cases grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {CASES.map((c, i) => (
            <motion.div
              key={c.id}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              style={{
                background: c.bg,
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '2.5rem',
                minHeight: 260,
                overflow: 'hidden',
                position: 'relative',
                transition: 'transform 0.22s, border-color 0.22s',
                cursor: 'default',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)'
                e.currentTarget.style.borderColor = c.accentColor
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              {/* Number watermark */}
              <span style={{
                position: 'absolute',
                top: '1rem',
                right: '1.25rem',
                fontFamily: 'var(--font-family-display)',
                fontWeight: 800,
                fontSize: '5rem',
                lineHeight: 1,
                color: 'rgba(255,255,255,0.04)',
                pointerEvents: 'none',
                userSelect: 'none',
              }}>
                {c.number}
              </span>

              {/* Top: category badge */}
              <span style={{
                display: 'inline-flex',
                alignSelf: 'flex-start',
                background: 'rgba(255,255,255,0.08)',
                border: `1px solid ${c.accentColor}40`,
                color: c.accentColor,
                padding: '0.3rem 0.75rem',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}>
                {c.category}
              </span>

              {/* Bottom: info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-family-display)',
                  fontWeight: 800,
                  fontSize: '1.6rem',
                  lineHeight: 1.05,
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                  margin: 0,
                }}>
                  {c.client}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'rgba(250,250,250,0.6)',
                  lineHeight: 1.55,
                  margin: 0,
                }}>
                  {c.desc}
                </p>
                <p style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: c.accentColor,
                  letterSpacing: '0.06em',
                  margin: '0.25rem 0 0',
                  textTransform: 'uppercase',
                }}>
                  {c.tag}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* IG CTA */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ marginTop: '3rem', textAlign: 'center' }}
        >
          <a
            href="https://www.instagram.com/enfocados.mkt"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '0.88rem',
              fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
            </svg>
            Ver más trabajos en Instagram · @enfocados.mkt
          </a>
        </motion.div>
      </div>
    </section>
  )
}
