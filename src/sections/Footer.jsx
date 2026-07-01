import { IG_LINK, WA_LINK } from '../constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      padding: '2rem 0',
    }}>
      <div style={{
        maxWidth: '72rem',
        marginInline: 'auto',
        paddingInline: '1.25rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        {/* Logo */}
        <a href="#" aria-label="Enfoca2 inicio" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'var(--font-family-display)',
            fontWeight: 800,
            fontSize: '1.5rem',
            lineHeight: 1,
          }}>
            <span style={{ color: 'var(--blue)' }}>Enfoca</span>
            <span style={{ color: 'var(--red)' }}>2</span>
          </span>
        </a>

        {/* Center: copyright */}
        <p style={{
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          margin: 0,
          textAlign: 'center',
        }}>
          © {year} Enfocados.mkt · Arequipa, Perú
        </p>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @enfocados.mkt"
            style={{
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
            </svg>
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp +51 929 846 177"
            style={{
              color: 'var(--text-muted)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.099 1.514 5.818L.057 23.04a.5.5 0 0 0 .612.612l5.222-1.457A11.948 11.948 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.877 0-3.625-.515-5.12-1.413l-.367-.216-3.8 1.062 1.062-3.8-.216-.367A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
