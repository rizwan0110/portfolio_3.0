import SectionHead from './SectionHead.jsx'
import { talks, now, extra } from '../data/index.js'

/* ── Kind badge ────────────────────────────────────────────────────────── */
function KindBadge({ kind }) {
  const colors = {
    talk:  { color: 'var(--color-amber)', bg: 'var(--color-amber-tint)' },
    paper: { color: 'var(--color-accent)', bg: 'var(--color-accent-tint)' },
  }
  const s = colors[kind] || { color: 'var(--color-muted)', bg: 'var(--color-hi)' }
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)', fontSize: 10.5,
        textTransform: 'uppercase', letterSpacing: '0.04em',
        padding: '1px 6px', borderRadius: 3,
        color: s.color, background: s.bg,
      }}
    >
      {kind}
    </span>
  )
}

/* ── Talks ─────────────────────────────────────────────────────────────── */
function Talks() {
  return (
    <div>
      <SectionHead tag="talks" title="& publications" count={talks.length} />
      <div>
        {talks.map((t, i) => (
          <a key={i} href={t.link} className="list-row" style={{ display: 'grid' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-muted)' }}>
              {t.date}
            </span>
            <span className="lr-title">
              <b style={{ fontWeight: 500 }}>{t.title}</b>
              <span style={{ color: 'var(--color-muted)', marginLeft: 8 }}>→ {t.venue}</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)', fontSize: 12,
                color: 'var(--color-muted)',
                display: 'flex', gap: 10, alignItems: 'center',
              }}
            >
              <KindBadge kind={t.kind} />
              <span>→</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

/* ── Now ───────────────────────────────────────────────────────────────── */
function Now() {
  return (
    <div style={{ marginTop: 64 }}>
      <SectionHead tag="now" title="what I'm doing this week" />
      <div
        style={{
          border: '1px solid var(--color-line)',
          borderRadius: 10,
          background: 'var(--color-surface)',
          padding: '22px 24px',
        }}
      >
        {/* Head */}
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            fontFamily: 'var(--font-mono)', fontSize: 12,
            color: 'var(--color-muted)', marginBottom: 14,
          }}
        >
          <span
            style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--color-amber)',
              boxShadow: '0 0 0 3px color-mix(in srgb, var(--color-amber) 22%, transparent)',
            }}
          />
          <span>updated {now.updated}</span>
          <span style={{ color: 'var(--color-muted-2)' }}>·</span>
          <span>inspired by nownownow.com</span>
        </div>

        {/* Items */}
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {now.items.map((item, i) => (
            <li key={i} style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: 14, alignItems: 'baseline' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11.5,
                  textTransform: 'uppercase', letterSpacing: '0.04em',
                  color: 'var(--color-accent)',
                }}
              >
                {item.kind}
              </span>
              <span style={{ color: 'var(--color-ink-2)', fontSize: 14.5 }}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ── Extra ─────────────────────────────────────────────────────────────── */
function Extra() {
  return (
    <div style={{ marginTop: 64 }}>
      <SectionHead tag="more" title="languages, interests" />
      <div className="two-col">
        {/* Languages */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--color-muted)', marginBottom: 10,
            }}
          >
            <span style={{ color: 'var(--color-muted-2)' }}>// </span>languages
          </div>
          {extra.languages.map((l) => (
            <div
              key={l.name}
              style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: 14,
                padding: '8px 0', borderBottom: '1px dashed var(--color-line)',
                fontSize: 14,
              }}
            >
              <span style={{ color: 'var(--color-ink)' }}>{l.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--color-muted)' }}>
                {l.level}
              </span>
            </div>
          ))}
        </div>

        {/* Interests */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--color-muted)', marginBottom: 10,
            }}
          >
            <span style={{ color: 'var(--color-muted-2)' }}>// </span>interests
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {extra.interests.map((interest) => (
              <span key={interest} className="tag">{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── AdditionalInfo ────────────────────────────────────────────────────── */
export default function AdditionalInfo() {
  return (
    <section id="additional" className="section">
      <Talks />
      <Now />
      <Extra />
    </section>
  )
}
