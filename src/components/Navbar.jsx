import { profile } from '../data/index.js'

const NAV_LINKS = [
  { id: 'work',      label: 'work' },
  { id: 'projects',  label: 'projects' },
  { id: 'skills',    label: 'skills' },
  { id: 'education', label: 'education' },
  { id: 'contact',   label: 'contact' },
]

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

export default function Navbar({ active, theme, onToggleTheme, onOpenCmdk }) {
  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: 'color-mix(in srgb, var(--color-bg) 86%, transparent)',
        backdropFilter: 'saturate(160%) blur(12px)',
        WebkitBackdropFilter: 'saturate(160%) blur(12px)',
        borderBottom: '1px solid var(--color-line)',
      }}
    >
      <div
        className="wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          padding: '14px var(--pad-x)',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
        }}
      >
        {/* Brand */}
        <a
          href="#home"
          style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-ink)', flexShrink: 0 }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)', fontWeight: 700,
              fontSize: 13, color: 'var(--color-accent)',
              flexShrink: 0,
            }}
          >
            MR
          </span>
          <span style={{ fontWeight: 600 }}>{profile.handle}'s</span>
          <span style={{ color: 'var(--color-muted)' }}>/</span>
          <span style={{ color: 'var(--color-muted)' }}>portfolio</span>
        </a>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 2, marginLeft: 'auto', alignItems: 'center', flexWrap: 'wrap' }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{
                position: 'relative',
                padding: '6px 10px',
                borderRadius: 6,
                color: active === link.id ? 'var(--color-accent)' : 'var(--color-ink-2)',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => { if (active !== link.id) e.currentTarget.style.color = 'var(--color-amber)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = active === link.id ? 'var(--color-accent)' : 'var(--color-ink-2)' }}
            >
              {link.label}
              {active === link.id && (
                <span
                  style={{
                    position: 'absolute', left: 10, right: 10, bottom: 0,
                    height: 2, background: 'var(--color-accent)', borderRadius: 2,
                  }}
                />
              )}
            </a>
          ))}

          {/* Jump to… */}
          <button
            onClick={onOpenCmdk}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '5px 8px 5px 10px',
              border: '1px solid var(--color-line)',
              borderRadius: 6,
              background: 'var(--color-surface)',
              color: 'var(--color-muted)',
              fontSize: 12, cursor: 'pointer',
              marginLeft: 4,
              transition: 'border-color 0.15s, color 0.15s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-ink-2)'
              e.currentTarget.style.color = 'var(--color-ink)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-line)'
              e.currentTarget.style.color = 'var(--color-muted)'
            }}
          >
            <span>jump to…</span>
            <kbd style={{
              fontFamily: 'var(--font-mono)', fontSize: 10.5,
              background: 'var(--color-bg)',
              border: '1px solid var(--color-line)',
              padding: '1px 5px', borderRadius: 4,
              color: 'var(--color-ink-2)',
            }}>⌘K</kbd>
          </button>

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32, borderRadius: 6,
              border: '1px solid var(--color-line)',
              background: 'var(--color-surface)',
              color: 'var(--color-muted)',
              marginLeft: 4, cursor: 'pointer',
              transition: 'border-color 0.15s, color 0.15s',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-ink-2)'
              e.currentTarget.style.color = 'var(--color-amber)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-line)'
              e.currentTarget.style.color = 'var(--color-muted)'
            }}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  )
}
