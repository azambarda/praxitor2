import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="nav">
      <Link href="/" className="nav-wordmark">
        PRAXITOR<span className="dot">·</span>
      </Link>
      <ul className="nav-links">
        <li><Link href="/domains">Portfolio</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
