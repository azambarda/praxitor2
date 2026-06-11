import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { domains } from '@/data/domains'
import styles from './page.module.css'

export const metadata = {
  title: 'Portfolio — Praxitor',
  description: 'Browse the full Praxitor portfolio of premium brandable domains available for direct acquisition.',
}

export default function PortfolioPage() {
  return (
    <>
      <Nav />

      <section className={styles.header}>
        <p className={styles.eyebrow}>Direct acquisition</p>
        <h1 className={styles.headline}>Portfolio</h1>
        <p className={styles.sub}>
          Every name in this portfolio was selected for phonetic quality,
          visual distinctiveness, and sector-neutral buyer appeal. All
          available for direct acquisition — no brokers.
        </p>
      </section>

      <div className="rule" />

      <section className={styles.grid}>
        <div className="section-inner">
          <div className={styles.domainGrid}>
            {domains.map((domain, i) => {
              const isLeft = i % 2 === 0
              const isLastRow = i >= domains.length - 2 || (domains.length % 2 !== 0 && i === domains.length - 1)
              return (
                <Link
                  key={domain.slug}
                  href={`/domains/${domain.slug}`}
                  className={[
                    'domain-card',
                    styles.domainCell,
                    isLeft ? styles.left : styles.right,
                    isLastRow ? styles.last : '',
                  ].join(' ')}
                >
                  <div className="domain-name">
                    {domain.name}
                    <span className="domain-tld">{domain.tld}</span>
                  </div>
                  <div className="domain-tagline">{domain.tagline}</div>
                  <div className="domain-cta">Inquire →</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact prompt */}
      <section className={styles.contactPrompt}>
        <p className={styles.promptText}>
          Looking for something specific?
        </p>
        <Link href="/contact" className="btn-primary">
          Get in touch
        </Link>
      </section>

      <Footer />
    </>
  )
}
