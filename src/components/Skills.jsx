import SectionHead from './SectionHead.jsx'
import { skills } from '../data/index.js'

export default function Skills() {
  const totalItems = skills.reduce((n, g) => n + g.items.length, 0)

  return (
    <section id="skills" className="section">
      <SectionHead tag="skills" title="stack" count={totalItems} />

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.group} className="skills-group">
            {/* Group label */}
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--color-muted)',
                paddingTop: 4,
              }}
            >
              <span style={{ color: 'var(--color-muted-2)' }}>// </span>
              {group.group.toLowerCase()}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="tag"
                  style={
                    item.level === 'primary'
                      ? {
                          color: 'var(--color-accent)',
                          borderColor: 'color-mix(in srgb, var(--color-accent) 30%, var(--color-line))',
                        }
                      : {}
                  }
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
