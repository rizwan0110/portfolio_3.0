import { useState, useEffect, useRef, useMemo } from 'react'
import { profile, projects } from '../data/index.js'

const SECTIONS = [
  { id: 'home',         label: 'home' },
  { id: 'work',         label: 'work' },
  { id: 'education',    label: 'education' },
  { id: 'skills',       label: 'skills' },
  { id: 'projects',     label: 'projects' },
  { id: 'certificates', label: 'certificates' },
  { id: 'additional',   label: 'more' },
  { id: 'contact',      label: 'contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery]   = useState('')
  const [idx, setIdx]       = useState(0)
  const inputRef            = useRef(null)

  const commands = useMemo(() => [
    ...SECTIONS.map((s) => ({
      group: 'navigate',
      icon:  '§',
      label: `go to ${s.label}`,
      hint:  `#${s.id}`,
      action: () => scrollTo(s.id),
    })),
    ...projects.map((p) => ({
      group: 'projects',
      icon:  '▸',
      label: p.title,
      hint:  p.year,
      action: () => scrollTo('projects'),
    })),
    {
      group: 'actions', icon: '↗', label: `email ${profile.email}`,
      hint: 'mail', action: () => { window.location.href = `mailto:${profile.email}` },
    },
    {
      group: 'actions', icon: '↗', label: 'open contact form',
      hint: '#contact', action: () => scrollTo('contact'),
    },
    ...profile.socials.map((s) => ({
      group: 'actions', icon: '↗', label: `open ${s.label}`,
      hint: s.handle, action: () => { if (s.url !== '#') window.open(s.url) },
    })),
  ], [])

  const filtered = useMemo(() => {
    if (!query.trim()) return commands
    const q = query.toLowerCase()
    return commands.filter((c) =>
      c.label.toLowerCase().includes(q) ||
      c.hint.toLowerCase().includes(q) ||
      c.group.toLowerCase().includes(q)
    )
  }, [query, commands])

  // Reset index when query changes
  useEffect(() => { setIdx(0) }, [query])

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 20)
      setQuery('')
    }
  }, [open])

  // Keyboard navigation
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose() }
      else if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(filtered.length - 1, i + 1)) }
      else if (e.key === 'ArrowUp')   { e.preventDefault(); setIdx((i) => Math.max(0, i - 1)) }
      else if (e.key === 'Enter') {
        e.preventDefault()
        const cmd = filtered[idx]
        if (cmd) { cmd.action(); onClose() }
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, filtered, idx, onClose])

  // Group items preserving global index for active highlight
  const grouped = useMemo(() => {
    const map = {}
    filtered.forEach((c, i) => {
      if (!map[c.group]) map[c.group] = []
      map[c.group].push({ ...c, _i: i })
    })
    return map
  }, [filtered])

  if (!open) return null

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(15, 16, 20, 0.45)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: '14vh',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(560px, calc(100vw - 32px))',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-line)',
          borderRadius: 10,
          overflow: 'hidden',
          boxShadow: '0 30px 80px -20px rgba(0,0,0,.4)',
        }}
      >
        {/* Input row */}
        <div
          style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '12px 14px',
            borderBottom: '1px solid var(--color-line)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-accent)', fontSize: 13 }}>{'>'}</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="type a command or section name…"
            style={{
              flex: 1, border: 'none', outline: 'none',
              background: 'transparent',
              fontFamily: 'var(--font-mono)', fontSize: 14,
              color: 'var(--color-ink)',
            }}
          />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-muted-2)', flexShrink: 0 }}>
            {filtered.length}/{commands.length}
          </span>
        </div>

        {/* List */}
        <div style={{ maxHeight: '50vh', overflowY: 'auto', padding: 6 }}>
          {filtered.length === 0 ? (
            <div style={{
              padding: '24px 14px', textAlign: 'center',
              fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-muted)',
            }}>
              no matches for "{query}"
            </div>
          ) : (
            Object.entries(grouped).map(([group, items]) => (
              <div key={group}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 10.5,
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  color: 'var(--color-muted)', padding: '8px 10px 4px',
                }}>
                  {group}
                </div>
                {items.map((c) => {
                  const isActive = c._i === idx
                  return (
                    <div
                      key={c._i}
                      onMouseEnter={() => setIdx(c._i)}
                      onClick={() => { c.action(); onClose() }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 10,
                        padding: '8px 10px', borderRadius: 6, cursor: 'pointer',
                        fontFamily: 'var(--font-mono)', fontSize: 13,
                        background: isActive ? 'var(--color-accent-tint)' : 'transparent',
                        color: isActive ? 'var(--color-accent)' : 'var(--color-ink)',
                        transition: 'background 0.1s',
                      }}
                    >
                      <span style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-muted)', width: 16, textAlign: 'center', flexShrink: 0 }}>
                        {c.icon}
                      </span>
                      <span style={{ flex: 1 }}>{c.label}</span>
                      <span style={{ color: 'var(--color-muted)', fontSize: 11.5 }}>{c.hint}</span>
                    </div>
                  )
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer hints */}
        <div style={{
          display: 'flex', gap: 16, padding: '8px 14px',
          borderTop: '1px solid var(--color-line)',
          background: 'var(--color-bg)',
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--color-muted)',
        }}>
          {[['↑↓', 'navigate'], ['↵', 'select'], ['esc', 'close']].map(([key, hint]) => (
            <span key={key}>
              <kbd style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-line)',
                padding: '1px 5px', borderRadius: 3,
                fontFamily: 'var(--font-mono)', fontSize: 10.5, marginRight: 4,
              }}>{key}</kbd>
              {hint}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
