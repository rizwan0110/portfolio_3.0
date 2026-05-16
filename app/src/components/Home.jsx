import { useState, useEffect, useMemo } from 'react'
import { profile } from '../data/index.js'

/* ── Terminal ─────────────────────────────────────────────────────────── */
const TERM_LINES = [
  { kind: 'prompt', text: '$ whoami' },
  { kind: 'output', text: profile.handle },
  { kind: 'prompt', text: '$ cat ~/.profile' },
  {
    kind: 'block',
    rows: [
      ['name',     profile.name],
      ['role',     profile.role],
      ['location', profile.location],
      ['status',   profile.status, 'amber'],
    ],
  },
  { kind: 'prompt', text: '$ echo $TAGLINE' },
  { kind: 'output', text: profile.tagline },
  { kind: 'prompt', text: '$ _', last: true },
]

function Terminal() {
  const lines = useMemo(() => TERM_LINES, [])
  const [step, setStep] = useState(0)
  const [partial, setPartial] = useState('')

  useEffect(() => {
    if (step >= lines.length) return
    const line = lines[step]

    if (line.kind === 'block') {
      const t = setTimeout(() => setStep((s) => s + 1), 240)
      return () => clearTimeout(t)
    }
    if (line.last) return

    const text = line.text || ''
    if (partial.length < text.length) {
      const speed = line.kind === 'prompt' ? 28 : 14
      const t = setTimeout(() => setPartial(text.slice(0, partial.length + 1)), speed)
      return () => clearTimeout(t)
    }
    const pause = line.kind === 'prompt' ? 220 : 340
    const t = setTimeout(() => { setPartial(''); setStep((s) => s + 1) }, pause)
    return () => clearTimeout(t)
  }, [step, partial, lines])

  return (
    <div
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-line)',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 1px 0 rgba(0,0,0,0.02), 0 12px 32px -16px rgba(0,0,0,0.10)',
      }}
    >
      {/* Title bar */}
      <div
        className="term-bar"
        style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '10px 12px',
          borderBottom: '1px solid var(--color-line)',
        }}
      >
        <div style={{ display: 'flex', gap: 6 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
            <span
              key={color}
              style={{
                width: 11, height: 11, borderRadius: '50%',
                background: color,
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
          ))}
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)', fontSize: 11.5,
            color: 'var(--color-muted)', margin: '0 auto', paddingRight: 40,
          }}
        >
          ~/{profile.handle} — zsh — 80×24
        </span>
      </div>

      {/* Body */}
      <div
        style={{
          fontFamily: 'var(--font-mono)', fontSize: 13,
          padding: '18px 18px 20px', lineHeight: 1.65,
          color: 'var(--color-ink-2)', minHeight: 300,
        }}
      >
        {lines.map((line, i) => {
          const isCurrent = i === step
          if (i > step) return null

          if (line.kind === 'block') {
            return (
              <div key={i} style={{ paddingBottom: 4 }}>
                {line.rows.map(([k, v, color], j) => (
                  <div key={j}>
                    <span style={{ color: 'var(--color-muted)' }}>{'  '}{k.padEnd(10, ' ')}</span>
                    <span style={{ color: 'var(--color-muted-2)' }}>: </span>
                    <span style={{ color: color === 'amber' ? 'var(--color-amber)' : 'var(--color-ink)' }}>{v}</span>
                  </div>
                ))}
              </div>
            )
          }

          const display = isCurrent ? partial : (i < step ? line.text : '')

          if (line.kind === 'prompt') {
            const cmd = display.replace(/^\$ ?/, '')
            return (
              <div key={i}>
                {display.length > 0 && (
                  <span style={{ color: 'var(--color-accent)', fontWeight: 600 }}>$ </span>
                )}
                <span style={{ color: 'var(--color-ink)' }}>{cmd}</span>
                {isCurrent && <span className="term-cursor" />}
              </div>
            )
          }

          return (
            <div key={i} style={{ color: 'var(--color-ink-2)', paddingBottom: 4 }}>
              {display}
              {isCurrent && <span className="term-cursor" />}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/* ── Hero section ─────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <section id="home" className="section section-first">
      <div className="hero-grid">
        {/* Left: text */}
        <div>
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--color-muted)', marginBottom: 20,
            }}
          >
            <span
              style={{
                width: 7, height: 7, borderRadius: '50%',
                background: 'var(--color-green)',
                boxShadow: '0 0 0 3px color-mix(in srgb, var(--color-green) 22%, transparent)',
              }}
            />
            <span>{profile.status}</span>
            <span style={{ color: 'var(--color-muted-2)' }}>·</span>
            <span>{profile.location}</span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(36px, 6.4vw, 64px)',
              lineHeight: 1.02, letterSpacing: '-0.02em',
              margin: '0 0 14px', fontWeight: 600,
              color: 'var(--color-ink)',
            }}
          >
            <span style={{ color: 'var(--color-muted-2)', fontWeight: 400 }}>// </span>
            {profile.name}
          </h1>

          {/* Role */}
          <div
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 15,
              color: 'var(--color-ink-2)', marginBottom: 22,
            }}
          >
            <span style={{ color: 'var(--color-accent)' }}>{profile.role}</span>
            <span style={{ color: 'var(--color-muted-2)', padding: '0 8px' }}>|</span>
            <span>{profile.tagline}</span>
          </div>

          {/* Bio */}
          <p
            style={{
              fontSize: 17, color: 'var(--color-ink-2)',
              maxWidth: '44ch', margin: '0 0 28px',
            }}
          >
            {profile.bio}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">
              <span>get in touch</span>
              <span className="btn-arr">→</span>
            </a>
            <a href="/resume.pdf" download className="btn">
              <span>↓</span>
              <span>download resume</span>
            </a>
          </div>
        </div>

        {/* Right: terminal */}
        <Terminal />
      </div>
    </section>
  )
}
