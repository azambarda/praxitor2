import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { domains, getDomain } from '@/data/domains'
import styles from './page.module.css'

export async function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }) {
  const domain = getDomain(params.slug)
  if (!domain) return {}
  return {
    title: `${domain.name}${domain.tld} — Praxitor`,
    description: domain.tagline,
  }
}

export default function DomainPage({ params }) {
  const domain = getDomain(params.slug)
  if (!domain) notFound()

  const mailtoSubject = encodeURIComponent(
    `Acquisition interest: ${domain.name}${domain.tld}`
  )
  const mailtoBody = encodeURIComponent(
    `Hi,\n\nI'm interested in acquiring ${domain.name}${domain.tld}.\n\nMy offer:\nIntended use:\n\nLooking forward to hearing from you.`
  )
  const mailto = `mailto:contact@praxitor.com?subject=${mailtoSubject}&body=${mailtoBody}`

  return (
    <>
      <Nav />

      {/* Domain hero */}
      <section className={styles.hero}>
        <Link href="/domains" className={styles.back}>
          ← Portfolio
        </Link>
        <div className={styles.domainDisplay}>
          <h1 className={styles.domainName}>
            {domain.name}
            <span className={styles.tld}>{domain.tld}</span>
          </h1>
          <p className={styles.tagline}>{domain.tagline}</p>
        </div>
      </section>

      <div className="rule" />

      {/* Details + Offer */}
      <div className={styles.body}>
        <div className={styles.bodyInner}>

          {/* Description */}
          <section className={styles.detail}>
            <span className="section-label">About this name</span>
            <p className={styles.description}>{domain.description}</p>

            <ul className={styles.highlights}>
              {domain.highlights.map((h, i) => (
                <li key={i} className={styles.highlight}>
                  <span className={styles.highlightDot}>·</span>
                  {h}
                </li>
              ))}
            </ul>
          </section>

          {/* Offer panel */}
          <section className={styles.offerPanel}>
            <span className="section-label">Acquire this domain</span>

            <div className={styles.offerCard}>
              <p className={styles.offerName}>
                {domain.name}
                <span className={styles.offerTld}>{domain.tld}</span>
              </p>
              <p className={styles.offerMeta}>
                Direct owner · Escrow-protected · 24h response
              </p>

              <div className={styles.offerDivider} />

              <div className={styles.offerActions}>
                <a href={mailto} className="btn-primary" style={{ textAlign: 'center' }}>
                  Submit an offer
                </a>
                <p className={styles.offerNote}>
                  Or email{' '}
                  <a href="mailto:contact@praxitor.com" className={styles.offerEmail}>
                    contact@praxitor.com
                  </a>
                  {' '}directly.
                </p>
              </div>

              <div className={styles.trustRow}>
                {['Direct owner', 'Escrow.com', 'Fast transfer'].map((t) => (
                  <span key={t} className={styles.trustItem}>{t}</span>
                ))}
              </div>
            </div>

            <p className={styles.escrowNote}>
              Transactions secured via{' '}
              <a
                href="https://www.escrow.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.escrowLink}
              >
                Escrow.com
              </a>{' '}
              or registrar push. Ownership transfer typically completes within 48 hours of payment.
            </p>
          </section>

        </div>
      </div>

      {/* Other names */}
      <section className={styles.related}>
        <div className="section-inner">
          <span className="section-label">Browse more</span>
          <div className={styles.relatedLinks}>
            {domains
              .filter((d) => d.slug !== domain.slug)
              .slice(0, 4)
              .map((d) => (
                <Link key={d.slug} href={`/domains/${d.slug}`} className={styles.relatedItem}>
                  <span className={styles.relatedName}>
                    {d.name}<span className={styles.relatedTld}>{d.tld}</span>
                  </span>
                  <span className={styles.relatedTagline}>{d.tagline}</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
