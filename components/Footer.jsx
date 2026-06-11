import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copy">
        © {new Date().getFullYear()} Praxitor · Private premium domain portfolio
      </span>
      <ul className="footer-links">
        <li><Link href="/terms">Terms</Link></li>
        <li><Link href="/privacy">Privacy</Link></li>
        <li>
          <a href="mailto:contact@praxitor.com">contact@praxitor.com</a>
        </li>
      </ul>
    </footer>
  )
}
