import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { WA_LINK } from '../constants'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Nosotros', href: '#nosotros' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(8,8,10,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        transition: 'background 0.35s, border-color 0.35s',
      }}
    >
      <div style={{
        maxWidth: '72rem',
        marginInline: 'auto',
        paddingInline: '1.25rem',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" aria-label="Enfoca2 — inicio">
          <span style={{
            fontFamily: 'var(--font-family-display)',
            fontWeight: 800,
            fontSize: '2rem',
            lineHeight: 1,
            letterSpacing: '-0.01em',
            textDecoration: 'none',
            display: 'block',
          }}>
            <span style={{ color: 'var(--blue)' }}>Enfoca</span><span style={{ color: 'var(--red)' }}>2</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Principal"
          className="hidden md:flex items-center gap-8"
        >
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center"
          style={{
            background: 'var(--blue)',
            color: '#fff',
            padding: '0.5rem 1.25rem',
            borderRadius: 'var(--radius-sm)',
            textDecoration: 'none',
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.01em',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--blue-hover)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--blue)'}
        >
          Hablemos
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          className="flex md:hidden"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: 'var(--text)',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? (
              <>
                <line x1="17" y1="5" x2="5" y2="17" />
                <line x1="5" y1="5" x2="17" y2="17" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="19" y2="7" />
                <line x1="3" y1="15" x2="19" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              background: 'var(--bg-card)',
              borderBottom: '1px solid var(--border)',
              padding: '1.5rem 1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {NAV_LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  padding: '0.25rem 0',
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--blue)',
                color: '#fff',
                padding: '0.75rem 1.25rem',
                borderRadius: 'var(--radius-sm)',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                textAlign: 'center',
                marginTop: '0.5rem',
              }}
            >
              Hablemos por WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
