'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCDo8gsfuLxtN7xFMwiXgiS79sA6k478mrNNnRv24ZGJ-_xe0lxEDlyewuBTR6AbOyT8IjkLWeFWoiNWQhvSSokLcGnuxIGYyYzhiE9waU_lKDuB_tfbwDBs1EBdKjDVZwXnaOktmsEjEKAbc0zUetAw8UxN9yC3Da97gd1F27GppEnaa7nBHfNgbFZ_Ao0im71bZ1QRj8OVhQo8c_er5-7yLrZBLDwquKAhsgzKL6EXM42K818YZt0NQagMaBUN_aM_U44xNtTOeh_'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export function RamsNav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-logo">
          <img src={LOGO} alt="Ram&apos;s Trimming Logo" style={{ height: 44, width: 'auto' }} />
          <span className="nav-logo-text">Ram&apos;s Trimming</span>
        </div>
        <nav className="nav-links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="nav-cta">
          Get a Quote
        </Link>
        <div
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </div>
      </header>
      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
          Get a Quote
        </Link>
      </div>
    </>
  )
}
