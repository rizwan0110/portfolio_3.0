import SectionHead from './SectionHead.jsx'
import { certificates } from '../data/index.js'

export default function Certificates() {
  return (
    <section id="certificates" className="section">
      <SectionHead tag="certificates" title="paper trail" count={certificates.length} />
      <div className="cert-grid">
        {certificates.map((c, i) => (
          <div
            key={i}
            style={{
              border: '1px solid var(--color-line)',
              background: 'var(--color-surface)',
              borderRadius: 8,
              padding: 16,
              display: 'flex', flexDirection: 'column', gap: 6,
              transition: 'border-color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--color-ink-2)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--color-line)')}
          >
            <div
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 13.5,
                color: 'var(--color-ink)', fontWeight: 600, lineHeight: 1.35,
              }}
            >
              {c.name}
            </div>
            <div style={{ fontSize: 13, color: 'var(--color-ink-2)' }}>
              {c.issuer}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 11.5,
                color: 'var(--color-muted)', marginTop: 6,
                display: 'flex', justifyContent: 'space-between',
              }}
            >
              <span>{c.date}</span>
              <span>id: {c.id}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
