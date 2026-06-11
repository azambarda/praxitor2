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

  const isLeft = (i) => i % 2 === 0
  const isLastRow = (i) => {
    const total = filtered.length
    return i >= total - (total % 2 === 0 ? 2 : 1)
  }

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
        <div className="section-inner">
          {filtered.length === 0 ? (
            <p className={styles.empty}>No names found.</p>
          ) : (
            <div className={styles.domainGrid}>
              {filtered.map((domain, i) => (
                <Link
                  key={domain.slug}
                  href={`/domains/${domain.slug}`}
                  className={[
                    'domain-card',
                    styles.domainCell,
                    isLeft(i) ? styles.left : styles.right,
                    isLastRow(i) ? styles.last : '',
                  ].join(' ')}
                >
                  <div className="domain-name">
                    {domain.name}
                    <span className="domain-tld">{domain.tld}</span>
                  </div>
                  <div className="domain-tagline">{domain.tagline}</div>
                  <div className={styles.domainStyles}>
                    {domain.style?.map(s => (
                      <span key={s} className={styles.styleTag}>{s}</span>
                    ))}
                  </div>
                  <div className="domain-cta">Inquire →</div>
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
