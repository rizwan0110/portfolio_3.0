import SectionHead from './SectionHead.jsx'
import { education } from '../data/index.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHead tag="education" title="degrees" count={education.length} />
      <div className="tl">
        {education.map((e, i) => (
          <div key={i} className="tl-item always-open">
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: 18,
                alignItems: 'baseline',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 15,
                  color: 'var(--color-ink)',
                }}
              >
                <b>{e.degree}</b>
                <span style={{ color: 'var(--color-muted)', margin: '0 6px' }}>@</span>
                <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>{e.school}</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--color-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                {e.start} – {e.end}
              </div>
            </div>

            <div
              style={{
                display: 'flex', flexWrap: 'wrap', gap: 8,
                alignItems: 'center', fontFamily: 'var(--font-mono)',
                fontSize: 12, color: 'var(--color-muted)', marginTop: 4,
              }}
            >
              <span
                style={{
                  border: '1px solid var(--color-line)',
                  padding: '1px 6px', borderRadius: 4,
                  background: 'var(--color-surface)',
                }}
              >
                {e.focus}
              </span>
              {e.transcript && (
                <a
                  href={e.transcript}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 4,
                    border: '1px solid var(--color-line)',
                    padding: '1px 8px', borderRadius: 4,
                    background: 'var(--color-surface)',
                    color: 'var(--color-accent)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                  }}
                >
                  ↓ transcript
                </a>
              )}
            </div>

            <div className="tl-details">
              <p style={{ color: 'var(--color-ink-2)', fontSize: 14.5, margin: 0 }}>
                {e.notes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
