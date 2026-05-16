import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import { profile } from '../data/index.js'

function validate(form) {
  const e = {}
  if (!form.name.trim()) e.name = 'required'
  if (!form.email.trim()) e.email = 'required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'invalid email'
  if (!form.message.trim()) e.message = 'required'
  else if (form.message.trim().length < 10) e.message = 'tell me a bit more (≥10 chars)'
  return e
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitError, setSubmitError] = useState(null)

  const update = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: null }))
    if (submitError) setSubmitError(null)
  }

  const submit = async (ev) => {
    ev.preventDefault()
    const e = validate(form)
    setErrors(e)
    if (Object.keys(e).length) return
    setSending(true)
    setSubmitError(null)
    try {
      const res = await fetch('https://formspree.io/f/xkoyddkv', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
      } else {
        const data = await res.json().catch(() => ({}))
        setSubmitError(data?.errors?.[0]?.message || 'something went wrong — try emailing me directly.')
      }
    } catch {
      setSubmitError('network error — check your connection and try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="section">
      <SectionHead tag="contact" title="say hi" />

      <div className="contact-grid">
        {/* Form */}
        {sent ? (
          <div
            style={{
              border: `1px solid color-mix(in srgb, var(--color-green) 35%, var(--color-line))`,
              background: `color-mix(in srgb, var(--color-green) 8%, var(--color-surface))`,
              borderRadius: 8, padding: '14px 16px',
              fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--color-ink)',
            }}
          >
            <b style={{ color: 'var(--color-green)' }}>✓ message sent.</b>
            <br />
            I'll reply within 24h. In the meantime, feel free to poke around the rest of the site.
            <div style={{ marginTop: 12 }}>
              <button
                className="btn"
                onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
              >
                send another
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Name + Email row */}
            <div className="cf-row">
              <Field label="name" error={errors.name}>
                <input
                  className={`cf-input${errors.name ? ' err' : ''}`}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="Your name"
                />
              </Field>
              <Field label="email *" error={errors.email}>
                <input
                  type="email"
                  className={`cf-input${errors.email ? ' err' : ''}`}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="Your Email address"
                />
              </Field>
            </div>

            {/* Subject */}
            <Field label="subject">
              <input
                className="cf-input"
                value={form.subject}
                onChange={(e) => update('subject', e.target.value)}
                placeholder="what's it about?"
              />
            </Field>

            {/* Message */}
            <Field label="message *" error={errors.message}>
              <textarea
                className={`cf-textarea${errors.message ? ' err' : ''}`}
                value={form.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="what are you building? what would you like to discuss?"
              />
            </Field>

            {submitError && (
              <div
                style={{
                  border: `1px solid color-mix(in srgb, #c83a3a 35%, var(--color-line))`,
                  background: `color-mix(in srgb, #c83a3a 8%, var(--color-surface))`,
                  borderRadius: 8, padding: '10px 14px',
                  fontFamily: 'var(--font-mono)', fontSize: 12.5,
                  color: 'var(--color-ink)',
                }}
              >
                <b style={{ color: '#c83a3a' }}>✗ error. </b>{submitError}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary"
              disabled={sending}
              style={{ alignSelf: 'flex-start', marginTop: 6, opacity: sending ? 0.7 : 1 }}
            >
              {sending
                ? <><span>···</span><span>sending</span></>
                : <><span>send</span><span className="btn-arr">→</span></>
              }
            </button>
          </form>
        )}

        {/* Sidebar */}
        <div className="contact-side">
          <h4
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--color-muted)', margin: 0, fontWeight: 500,
            }}
          >
            <span style={{ color: 'var(--color-muted-2)' }}>// </span>
            direct channels
          </h4>

          <a
            href={`mailto:${profile.email}`}
            style={{
              display: 'flex', alignItems: 'baseline',
              justifyContent: 'space-between',
              padding: '10px 0', borderBottom: '1px dashed var(--color-line)',
              fontFamily: 'var(--font-mono)', fontSize: 13.5,
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-amber)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '')}
          >
            <span>
              <span style={{ color: 'var(--color-accent)' }}>▸ </span>email
            </span>
            <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>{profile.email}</span>
          </a>

          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              style={{
                display: 'flex', alignItems: 'baseline',
                justifyContent: 'space-between',
                padding: '10px 0', borderBottom: '1px dashed var(--color-line)',
                fontFamily: 'var(--font-mono)', fontSize: 13.5,
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-amber)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              <span>
                <span style={{ color: 'var(--color-accent)' }}>▸ </span>{s.label}
              </span>
              <span style={{ color: 'var(--color-muted)', fontSize: 12 }}>{s.handle}</span>
            </a>
          ))}

          <h4
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12,
              color: 'var(--color-muted)', margin: '12px 0 0', fontWeight: 500,
            }}
          >
            <span style={{ color: 'var(--color-muted-2)' }}>// </span>
            response time
          </h4>
          <div
            style={{
              fontFamily: 'var(--font-mono)', fontSize: 12.5,
              color: 'var(--color-muted)', lineHeight: 1.7,
            }}
          >
            usually &lt; 24h on weekdays<br />
            timezone: UTC+2:00 (UTC+1:00 during winter)
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Field wrapper ─────────────────────────────────────────────────────── */
function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <label
        style={{
          fontFamily: 'var(--font-mono)', fontSize: 11.5,
          color: 'var(--color-muted)',
          display: 'flex', justifyContent: 'space-between',
        }}
      >
        <span>{label}</span>
        {error && <span style={{ color: '#c83a3a' }}>{error}</span>}
      </label>
      {children}
    </div>
  )
}
