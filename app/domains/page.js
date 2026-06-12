'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { domains } from '../../data/domains'
import styles from './page.module.css'

const FEEL_FILTERS = [
  { key: 'italianate', label: 'Italianate' },
  { key: 'elegant',    label: 'Elegant' },
  { key: 'soft',       label: 'Soft' },
  { key: 'strong',     label: 'Strong' },
  { key: 'short',      label: 'Short' },
  { key: 'minimal',    label: 'Minimal' },
  { key: 'invented',   label: 'Invented' },
]

const FIT_FILTERS = [
  { key: 'tech',         label: 'Tech' },
  { key: 'fintech',      label: 'Fintech' },
  { key: 'saas',         label: 'SaaS' },
  { key: 'luxury',       label: 'Luxury' },
  { key: 'beauty',       label: 'Beauty' },
  { key: 'wellness',     label: 'Wellness' },
  { key: 'consumer',     label: 'Consumer' },
  { key: 'creative',     label: 'Creative' },
  { key: 'professional', label: 'Professional' },
  { key: 'legal',        label: 'Legal' },
  { key: 'hospitality',  label: 'Hospitality' },
]

export default function PortfolioPage() {
  const [activeFeel, setActiveFeel] = useState(null)
  const [activeFit,  setActiveFit]  = useState(null)

  const toggleFeel = (key) => setActiveFeel(prev => prev === key ? null : key)
  const toggleFit  = (key) => setActiveFit(prev  => prev === key ? null : key)

  const filtered = domains.filter(d => {
    const feelOk = !activeFeel || d.feel?.includes(activeFeel)
    const fitOk  = !activeFit  || d.fit?.includes(activeFit)
    return feelOk && fitOk
  })

  const isLeft    = (i) => i % 2 === 0
  const isLastRow = (i) => i >= filtered.length - (filtered.length % 2 === 0 ? 2 : 1)

  const feelCount = (key) => domains.filter(d => d.feel?.includes(key)).length
  const fitCount  = (key) => domains.filter(d => d.fit?.includes(key)).length

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

      {/* Two-row filter bar */}
      <section className={styles.filterBar}>
        <div className="section-inner">
          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Brand feel</span>
            <div className={styles.filterRow}>
              {FEEL_FILTERS.map(f => (
                <button
                  key={f.key}
                  className={[
                    styles.filterBtn,
                    styles.feelBtn,
                    activeFeel === f.key ? styles.feelActive : '',
                  ].join(' ')}
                  onClick={() => toggleFeel(f.key)}
                >
                  {f.label}
                  <span className={styles.count}>{feelCount(f.key)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterGroup}>
            <span className={styles.filterLabel}>Best fit</span>
            <div className={styles.filterRow}>
              {FIT_FILTERS.map(f => (
                <button
                  key={f.key}
                  className={[
                    styles.filterBtn,
                    styles.fitBtn,
                    activeFit === f.key ? styles.fitActive : '',
                  ].join(' ')}
                  onClick={() => toggleFit(f.key)}
                >
                  {f.label}
                  <span className={styles.count}>{fitCount(f.key)}</span>
                </button>
              ))}
            </div>
          </div>

          <p className={styles.resultMeta}>
            {filtered.length} {filtered.length === 1 ? 'name' : 'names'}
            {activeFeel && <span className={styles.activeTag}>· {activeFeel}</span>}
            {activeFit  && <span className={styles.activeTag}>· {activeFit}</span>}
            {(activeFeel || activeFit) && (
              <button
                className={styles.clearBtn}
                onClick={() => { setActiveFeel(null); setActiveFit(null) }}
              >
                Clear
              </button>
            )}
          </p>
        </div>
      </section>

      {/* Domain grid */}
      <section className={styles.grid}>
        <div className="section-inner">
          {filtered.length === 0 ? (
            <p className={styles.empty}>
              No names match this combination.{' '}
              <button className={styles.clearBtn} onClick={() => { setActiveFeel(null); setActiveFit(null) }}>
                Clear filters
              </button>
            </p>
          ) : (
            <div className={styles.domainGrid}>
              {filtered.map((domain, i) => (
                <Link
                  key={domain.slug}
                  href={`/domains/${domain.slug}`}
                  className={[
                    styles.domainCell,
                    isLeft(i) ? styles.left : styles.right,
                    isLastRow(i) ? styles.last : '',
                  ].join(' ')}
                >
                  <div className={styles.domainName}>
                    {domain.name}
                    <span className={styles.domainTld}>{domain.tld}</span>
                  </div>
                  <div className={styles.domainTagline}>{domain.tagline}</div>
                  <div className={styles.chipRows}>
                    <div className={styles.feelChips}>
                      {domain.feel?.map(s => (
                        <span key={s} className={styles.feelChip}>{s}</span>
                      ))}
                    </div>
                    <div className={styles.fitChips}>
                      {domain.fit?.map(s => (
                        <span key={s} className={styles.fitChip}>{s}</span>
                      ))}
                    </div>
                  </div>
                  <span className={styles.inquire}>Inquire →</span>
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
