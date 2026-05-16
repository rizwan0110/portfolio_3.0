import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import Home from './components/Home.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import Education from './components/Education.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Certificates from './components/Certificates.jsx'
import AdditionalInfo from './components/AdditionalInfo.jsx'
import Contact from './components/Contact.jsx'

const SECTIONS = ['home','work','education','skills','projects','certificates','additional','contact']

function useActiveSection() {
  const [active, setActive] = useState('home')
  useEffect(() => {
    const handle = () => {
      const y = window.scrollY + window.innerHeight * 0.3
      let current = SECTIONS[0]
      for (const id of SECTIONS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      setActive(current)
    }
    handle()
    window.addEventListener('scroll', handle, { passive: true })
    window.addEventListener('resize', handle)
    return () => {
      window.removeEventListener('scroll', handle)
      window.removeEventListener('resize', handle)
    }
  }, [])
  return active
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])
  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggle }
}

export default function App() {
  const active = useActiveSection()
  const { theme, toggle } = useTheme()
  const [cmdkOpen, setCmdkOpen] = useState(false)

  // ⌘K / Ctrl+K and / key open the palette
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setCmdkOpen((v) => !v)
      } else if (
        e.key === '/' &&
        document.activeElement.tagName !== 'INPUT' &&
        document.activeElement.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault()
        setCmdkOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <Navbar
        active={active}
        theme={theme}
        onToggleTheme={toggle}
        onOpenCmdk={() => setCmdkOpen(true)}
      />
      <main className="wrapper">
        <Home />
        <WorkExperience />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <AdditionalInfo />
        <Contact />
        <footer
          style={{
            marginTop: 80,
            padding: '32px 0 40px',
            borderTop: '1px solid var(--color-line)',
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--color-muted)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span>// {new Date().getFullYear()}</span>
          <span style={{ color: 'var(--color-ink-2)' }}>$ exit 0</span>
        </footer>
      </main>
      <CommandPalette open={cmdkOpen} onClose={() => setCmdkOpen(false)} />
    </>
  )
}
