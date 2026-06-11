'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './Nav.module.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.wordmark} onClick={() => setOpen(false)}>
        PRAXITOR<span className={styles.dot}>·</span>
      </Link>

      {/* Desktop links */}
      <ul className={styles.links}>
        <li><Link href="/domains">Portfolio</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className={styles.burger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={open ? styles.barTop : styles.bar} />
        <span className={open ? styles.barMid : styles.bar} />
        <span className={open ? styles.barBot : styles.bar} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            <li><Link href="/domains" onClick={() => setOpen(false)}>Portfolio</Link></li>
            <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  )
}
