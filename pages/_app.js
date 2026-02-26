import '@/styles/globals.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

function Navigation() {
  const router = useRouter()
  
  const links = [
    { href: '/', label: 'Dashboard' },
    { href: '/calendar', label: 'Calendar' },
    { href: '/scripts', label: 'Scripts' },
    { href: '/workflow', label: 'Editor Workflow' },
    { href: '/tracker', label: 'Tracker' },
  ]
  
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="nav-brand">
          🎬 Karthik IG Command Center
        </div>
        <div className="nav-links">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`nav-link ${router.pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}
