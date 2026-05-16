import SectionHead from './SectionHead.jsx'
import { work } from '../data/index.js'

export default function WorkExperience() {
  return (
    <section id="work" className="section">
      <SectionHead tag="work" title="experience" count={work.length} />
      <div className="tl">
        {work.map((job, i) => (
          <div key={i} className={`tl-item${job.current ? ' current' : ''}`}>
            {/* Row: title + dates */}
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
                <b>{job.role}</b>
                <span style={{ color: 'var(--color-muted)', margin: '0 6px' }}>@</span>
                <span style={{ color: 'var(--color-accent)', fontWeight: 500 }}>{job.company}</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12,
                  color: 'var(--color-muted)',
                  whiteSpace: 'nowrap',
                }}
              >
                {job.start}
                <span style={{ color: 'var(--color-muted-2)' }}> – </span>
                {job.current
                  ? <span style={{ color: 'var(--color-amber)' }}>{job.end}</span>
                  : job.end
                }
              </div>
            </div>

            {/* Meta chips */}
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
                {job.type}
              </span>
              <span>·</span>
              <span>{job.location}</span>
            </div>

            {/* Summary */}
            <p style={{ color: 'var(--color-ink-2)', margin: '10px 0 0', fontSize: 14.5 }}>
              {job.summary}
            </p>

            {/* Expandable details (bullets + stack) */}
            <div className="tl-details">
              <ul
                style={{
                  margin: 0, padding: 0, listStyle: 'none',
                  display: 'flex', flexDirection: 'column', gap: 6,
                }}
              >
                {job.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      position: 'relative',
                      paddingLeft: 20,
                      color: 'var(--color-ink-2)',
                      fontSize: 14,
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute', left: 0,
                        color: 'var(--color-accent)',
                        fontFamily: 'var(--font-mono)', fontSize: 12,
                      }}
                    >
                      ▸
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
                {job.stack.map((s) => (
                  <span key={s} className="tag tag-dim">{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
