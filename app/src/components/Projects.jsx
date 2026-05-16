import { useState, useMemo } from 'react'
import SectionHead from './SectionHead.jsx'
import { projects } from '../data/index.js'

const STATUS_STYLE = {
  live:     { color: 'var(--color-green)',  bg: 'color-mix(in srgb, var(--color-green) 12%, transparent)' },
  wip:      { color: 'var(--color-muted)',  bg: 'var(--color-hi)' },
  academic: { color: 'var(--color-amber)',  bg: 'var(--color-amber-tint)' },
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const categories = useMemo(() => {
    const counts = new Map()
    projects.forEach((p) => {
      if (p.category) counts.set(p.category, (counts.get(p.category) || 0) + 1)
    })
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  }, [])

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="section">
      <SectionHead tag="projects" title="things I built" count={projects.length} />

      {/* Filters */}
      <div
        style={{
          display: 'flex', flexWrap: 'wrap', gap: 6,
          marginBottom: 24, fontFamily: 'var(--font-mono)', fontSize: 12,
        }}
      >
        {[['all', projects.length], ...categories].map(([label, count]) => {
          const active = filter === label
          return (
            <button
              key={label}
              onClick={() => setFilter(label)}
              style={{
                padding: '4px 10px', borderRadius: 4,
                border: `1px solid ${active ? 'var(--color-accent)' : 'var(--color-line)'}`,
                background: active ? 'var(--color-accent)' : 'var(--color-surface)',
                color: active ? '#fff' : 'var(--color-ink-2)',
                cursor: 'pointer',
                fontFamily: 'var(--font-mono)', fontSize: 12,
                transition: 'all 0.15s',
              }}
            >
              {label}{' '}
              <span style={{ color: active ? 'rgba(255,255,255,.7)' : 'var(--color-muted-2)' }}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Grid */}
      <div className="pj-grid">
        {filtered.length === 0 ? (
          <div
            style={{
              gridColumn: '1 / -1', padding: 32,
              fontFamily: 'var(--font-mono)', color: 'var(--color-muted)',
              textAlign: 'center',
              border: '1px dashed var(--color-line)', borderRadius: 8,
            }}
          >
            no projects match <em>{filter}</em> — try a different tag.
          </div>
        ) : (
          filtered.map((p) => {
            const st = STATUS_STYLE[p.status] || STATUS_STYLE.wip
            return (
              <article key={p.id} className="pj-card">
                {/* Top: title + status badge */}
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12 }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: 16,
                      fontWeight: 600, color: 'var(--color-ink)', margin: 0,
                    }}
                  >
                    <span style={{ color: 'var(--color-accent)' }}>▸ </span>
                    {p.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)', fontSize: 11,
                      padding: '2px 7px', borderRadius: 4,
                      color: st.color, background: st.bg,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.status}
                  </span>
                </div>

                {/* Blurb */}
                <p style={{ color: 'var(--color-ink-2)', fontSize: 14.5, margin: 0 }}>
                  {p.blurb}
                </p>

                {/* Metric */}
                <div
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: 12,
                    color: 'var(--color-muted)',
                    padding: '8px 10px',
                    background: 'var(--color-bg)',
                    borderRadius: 6,
                    border: '1px dashed var(--color-line)',
                  }}
                >
                  // {p.metric}
                </div>

                {/* Stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {p.stack.map((s) => (
                    <span key={s} className="tag tag-dim">{s}</span>
                  ))}
                </div>

                {/* Bottom: links + year */}
                <div
                  style={{
                    display: 'flex', flexWrap: 'wrap', gap: 12,
                    alignItems: 'center', justifyContent: 'space-between',
                    marginTop: 'auto', paddingTop: 6,
                  }}
                >
                  <div
                    style={{
                      display: 'flex', gap: 12,
                      fontFamily: 'var(--font-mono)', fontSize: 12,
                    }}
                  >
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        style={{
                          color: 'var(--color-accent)',
                          borderBottom: '1px dotted color-mix(in srgb, var(--color-accent) 50%, transparent)',
                          paddingBottom: 1,
                          transition: 'color 0.15s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-amber)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
                      >
                        {l.label} →
                      </a>
                    ))}
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-muted-2)' }}>
                    {p.year}
                  </span>
                </div>
              </article>
            )
          })
        )}
      </div>
    </section>
  )
}
