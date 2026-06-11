import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Message received — Praxitor',
}

export default function ThankYouPage() {
  return (
    <>
      <Nav />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Thank you</p>
        <h1 className={styles.headline}>Message received.</h1>
        <p className={styles.sub}>
          You&apos;ll hear back within 24 hours at the email you provided.
        </p>
        <div className={styles.actions}>
          <Link href="/domains" className="btn-primary">Browse portfolio</Link>
          <Link href="/" className="btn-link">Back to home →</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
