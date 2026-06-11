'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { getDomain } from '../../data/domains'
import styles from './page.module.css'

function InquireContent() {
  const searchParams = useSearchParams()
  const domainParam = (searchParams.get('domain') || '').toLowerCase().trim()

  if (!domainParam) {
    return (
      <section className={styles.hero}>
        <Link href="/domains" className={styles.back}>← Portfolio</Link>
        <div className={styles.domainDisplay}>
          <p className={styles.tagline}>No domain specified.</p>
        </div>
      </section>
    )
  }

  // Parse "lumanzo.com" → slug="lumanzo", tld=".com", name="Lumanzo"
  const dotIndex = domainParam.lastIndexOf('.')
  const slug = dotIndex > 0 ? domainParam.slice(0, dotIndex) : domainParam
  const tld = dotIndex > 0 ? domainParam.slice(dotIndex) : '.com'
  const name = slug.charAt(0).toUpperCase() + slug.slice(1)

  // Use rich data if domain is in the portfolio, fallback to generic
  const richDomain = getDomain(slug)
  const tagline = richDomain?.tagline || 'Available for direct acquisition — no brokers.'
  const description =
    richDomain?.description ||
    `${name} is a premium brandable domain available for direct acquisition through Praxitor. All transactions are handled directly with the owner — no brokers, no intermediaries — with full escrow protection.`
  const highlights = richDomain?.highlights || [
    'Direct owner — no broker markup or delays',
    'Transactions secured via Escrow.com',
    'Domain transferred to your registrar in 24–48 hours',
  ]

  const mailtoSubject = encodeURIComponent(`Acquisition interest: ${domainParam}`)
  const mailtoBody = encodeURIComponent(
    `Hi,\n\nI'm interested in acquiring ${domainParam}.\n\nMy offer:\nIntended use:\n\nLooking forward to hearing from you.`
  )
  const mailto = `mailto:contact@praxitor.com?subject=${mailtoSubject}&body=${mailtoBody}`

  return (
    <>
      <section className={styles.hero}>
        <Link href="/domains" className={styles.back}>← Portfolio</Link>
        <div className={styles.domainDisplay}>
          <h1 className={styles.domainName}>
            {name}<span className={styles.tld}>{tld}</span>
          </h1>
          <p className={styles.tagline}>{tagline}</p>
        </div>
      </section>

      <div className="rule" />

      <div className={styles.body}>
        <div className={styles.bodyInner}>

          <section className={styles.detail}>
            <span className="section-label">About this name</span>
            <p className={styles.description}>{description}</p>
            <ul className={styles.highlights}>
              {highlights.map((h, i) => (
                <li key={i} className={styles.highlight}>
                  <span className={styles.highlightDot}>·</span>
                  {h}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.offerPanel}>
            <span className="section-label">Acquire this domain</span>
            <div className={styles.offerCard}>
              <p className={styles.offerName}>
                {name}<span className={styles.offerTld}>{tld}</span>
              </p>
              <p className={styles.offerMeta}>
                Direct owner · Escrow-protected · 24h response
              </p>
              <div className={styles.offerDivider} />
              <div className={styles.offerActions}>
                <a
                  href={mailto}
                  className="btn-primary"
                  style={{ textAlign: 'center' }}
                >
                  Submit an offer
                </a>
                <p className={styles.offerNote}>
                  Or email{' '}
                  <a href="mailto:contact@praxitor.com" className={styles.offerEmail}>
                    contact@praxitor.com
                  </a>{' '}
                  directly.
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
              </a>
              {' '}or registrar push. Transfer typically completes within 48 hours of payment.
            </p>
          </section>

        </div>
      </div>
    </>
  )
}

export default function InquirePage() {
  return (
    <>
      <Nav />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <InquireContent />
      </Suspense>
      <Footer />
    </>
  )
}
