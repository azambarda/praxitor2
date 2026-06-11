import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { featuredDomains } from '@/data/domains'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Premium Brandable Domains</p>
        <h1 className={styles.headline}>
          The right name<br />is already available.
        </h1>
        <p className={styles.sub}>
          Praxitor holds a curated portfolio of premium brandable domains —
          selected for phonetic quality, visual distinctiveness, and the
          commercial presence your brand deserves.
        </p>
        <div className={styles.heroCtas}>
          <Link href="/domains" className="btn-primary">View Portfolio</Link>
          <Link href="/contact" className="btn-link">Contact →</Link>
        </div>
      </section>

      <div className="rule" />

      {/* Featured domains */}
      <section className={styles.portfolio}>
        <div className="section-inner">
          <span className="section-label">Selected Names</span>
          <div className={styles.domainGrid}>
            {featuredDomains.map((domain, i) => {
              const isLeft = i % 2 === 0
              const isLastRow = i >= featuredDomains.length - 2
              return (
                <Link
                  key={domain.slug}
                  href={`/domains/${domain.slug}`}
                  className={[
                    'domain-card',
                    styles.domainCell,
                    isLeft ? styles.domainCellLeft : styles.domainCellRight,
                    isLastRow ? styles.domainCellLast : '',
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
          <div className={styles.portfolioFooter}>
            <Link href="/domains" className="btn-link">
              View full portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* Acquisition process */}
      <section className={styles.process}>
        <div className="section-inner">
          <span className="section-label">Acquisition</span>
          <div className={styles.steps}>
            {[
              {
                num: 'I',
                title: 'Reach out',
                desc: 'Submit your interest and budget. All inquiries receive a response within 24 hours.',
              },
              {
                num: 'II',
                title: 'Negotiate',
                desc: 'Direct negotiation with the owner — no brokers, no intermediaries, no markup.',
              },
              {
                num: 'III',
                title: 'Escrow',
                desc: 'Funds held until transfer is complete. Full buyer protection on every transaction.',
              },
              {
                num: 'IV',
                title: 'Transfer',
                desc: 'Domain moved to your registrar of choice in 24–48 hours.',
              },
            ].map((step, i) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepTitle}>{step.title}</div>
                <div className={styles.stepDesc}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <span className="section-label" style={{ textAlign: 'center' }}>About</span>
          <p className={styles.aboutQuote}>
            &ldquo;A name either opens doors or forces you to explain yourself.
            Every domain in this portfolio was chosen because it does the former.&rdquo;
          </p>
          <p className={styles.aboutBody}>
            Praxitor is a privately held portfolio of premium brandable domains,
            curated with a single criterion: would a category-defining company be
            proud to build on this name? Acquisitions are handled directly —
            no brokers, full escrow protection.
          </p>
        </div>
      </section>

      {/* CTA strip */}
      <section className={styles.ctaStrip}>
        <h2 className={styles.ctaHeadline}>Ready to acquire?</h2>
        <p className={styles.ctaSub}>
          Browse the full portfolio or reach out directly to discuss a specific name.
        </p>
        <Link href="/domains" className="btn-gold">Browse Portfolio</Link>
      </section>

      <Footer />
    </>
  )
}
