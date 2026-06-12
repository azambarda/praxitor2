import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import OfferForm from '@/components/OfferForm'
import { domains, getDomain } from '@/data/domains'
import styles from './page.module.css'

export async function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }) {
  const domain = getDomain(params.slug)
  if (!domain) return {}
  const title = `${domain.name}${domain.tld} — Praxitor`
  const url   = `https://praxitor.com/domains/${domain.slug}/`
  return {
    title,
    description: domain.tagline,
    openGraph: {
      title,
      description: domain.tagline,
      type: 'website',
      url,
      images: [{ url: 'https://praxitor.com/og-image.png', width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: domain.tagline,
      images: ['https://praxitor.com/og-image.png'],
    },
  }
}

export default function DomainPage({ params }) {
  const domain = getDomain(params.slug)
  if (!domain) notFound()

  return (
    <>
      <Nav />

      {/* Hero */}
      <section className={styles.hero}>
        <Link href="/domains" className={styles.back}>← Portfolio</Link>

        <div className={styles.heroInner}>
          <div className={styles.heroLeft}>
            <h1 className={styles.domainName}>
              {domain.name}<span className={styles.tld}>{domain.tld}</span>
            </h1>
            <p className={styles.tagline}>{domain.tagline}</p>
            <div className={styles.chipGroups}>
              {domain.feel?.length > 0 && (
                <div className={styles.feelChips}>
                  {domain.feel.map(s => (
                    <span key={s} className={styles.feelChip}>{s}</span>
                  ))}
                </div>
              )}
              {domain.fit?.length > 0 && (
                <div className={styles.fitChips}>
                  {domain.fit.map(s => (
                    <span key={s} className={styles.fitChip}>{s}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="rule" />

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.bodyInner}>

          {/* Description column */}
          <section className={styles.detail}>
            {/* Pull quote — first highlight */}
            <p className={styles.pullQuote}>
              &ldquo;{domain.highlights[0]}&rdquo;
            </p>

            <span className="section-label" style={{ marginBottom: '1rem' }}>About this name</span>
            <p className={styles.description}>{domain.description}</p>

            <ul className={styles.highlights}>
              {domain.highlights.slice(1).map((h, i) => (
                <li key={i} className={styles.highlight}>
                  <span className={styles.highlightDot}>·</span>
                  {h}
                </li>
              ))}
            </ul>
          </section>

          {/* Sticky offer panel */}
          <aside className={styles.offerAside}>
            <div className={styles.stickyPanel}>
              <span className="section-label">Acquire this domain</span>
              <div className={styles.offerCard}>
                <p className={styles.offerName}>
                  {domain.name}<span className={styles.offerTld}>{domain.tld}</span>
                </p>
                <p className={styles.offerMeta}>
                  Direct owner · Escrow-protected · 24h response
                </p>
                <div className={styles.offerDivider} />
                <OfferForm domainName={domain.name} domainTld={domain.tld} />
                <div className={styles.trustRow}>
                  {['Direct owner', 'Escrow.com', 'Fast transfer'].map((t) => (
                    <span key={t} className={styles.trustItem}>{t}</span>
                  ))}
                </div>
              </div>
              <p className={styles.escrowNote}>
                Secured via{' '}
                <a href="https://www.escrow.com" target="_blank" rel="noopener noreferrer" className={styles.escrowLink}>
                  Escrow.com
                </a>
                {' '}· Transfer in 24–48 hours.
              </p>
            </div>
          </aside>

        </div>
      </div>

      {/* Related — diverse, spread across the portfolio */}
      <section className={styles.related}>
        <div className="section-inner">
          <span className="section-label">Browse more</span>
          <div className={styles.relatedLinks}>
            {(() => {
              const pool = domains.filter(d => d.slug !== domain.slug)
              const seed = domain.slug.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
              const q = Math.floor(pool.length / 4)
              return [0, 1, 2, 3]
                .map(i => pool[(seed % q) + i * q])
                .filter(Boolean)
            })().map((d) => (
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
