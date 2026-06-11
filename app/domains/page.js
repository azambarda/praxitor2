'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { domains } from '../../data/domains'
import styles from './page.module.css'

const FILTERS = [
  { key: 'all',        label: 'All' },
  { key: 'italianate', label: 'Italianate' },
  { key: 'tech',       label: 'Tech' },
  { key: 'luxury',     label: 'Luxury' },
  { key: 'soft',       label: 'Soft' },
  { key: 'strong',     label: 'Strong' },
  { key: 'short',      label: 'Short' },
]

export default function PortfolioPage() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? domains
    : domains.filter(d => d.style?.includes(active))

  return (
    <>
      <Nav />

      <section className={styles.header}>
        <p className={styles.eyebrow}>Direct acquisition</p>
        <h1 className={styles.headline}>Portfolio</h1>
        <p className={styles.sub}>
          Every name was selected for phonetic quality, visual distinctiveness,
          and sector-neutral buyer appeal. All available for direct acquisition.
        </p>
      </section>

      <div className="rule" />

      <section className={styles.filters}>
        <div className="section-inner">
          <div className={styles.filterRow}>
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={[styles.filterBtn, active === f.key ? styles.filterBtnActive : ''].join(' ')}
                onClick={() => setActive(f.key)}
              >
                {f.label}
                {f.key !== 'all' && (
                  <span className={styles.filterCount}>
                    {domains.filter(d => d.style?.includes(f.key)).length}
                  </span>
                )}
              </button>
            ))}
          </div>
          <p className={styles.filterMeta}>
            {filtered.length} {filtered.length === 1 ? 'name' : 'names'}
            {active !== 'all' ? ` · ${FILTERS.find(f => f.key === active)?.label}` : ''}
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <div className="section-inner" style={{ padding: 0, maxWidth: '100%' }}>
          {filtered.length === 0 ? (
            <p className={styles.empty} style={{ padding: '3rem var(--pad-x)' }}>No names found.</p>
          ) : (
            <div className={styles.domainGrid}>
              {filtered.map((domain) => (
                <Link
                  key={domain.slug}
                  href={`/domains/${domain.slug}`}
                  className={styles.domainCard}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.cardName}>
                      {domain.name}<span className={styles.cardTld}>{domain.tld}</span>
                    </div>
                    <div className={styles.cardTagline}>{domain.tagline}</div>
                  </div>
                  <div className={styles.cardBottom}>
                    <div className={styles.cardStyles}>
                      {domain.style?.map(s => (
                        <span key={s} className={styles.styleTag}>{s}</span>
                      ))}
                    </div>
                    <span className={styles.cardInquire}>Inquire →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={styles.contactPrompt}>
        <p className={styles.promptText}>Looking for something specific?</p>
        <Link href="/contact" className="btn-primary">Get in touch</Link>
      </section>

      <Footer />
    </>
  )
}
