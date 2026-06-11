import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'About — Praxitor',
  description:
    'Praxitor is a privately held portfolio of premium brandable domains, curated for founders and companies that understand the commercial value of a name.',
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>About</p>
        <h1 className={styles.headline}>
          A name is the first<br />decision that lasts.
        </h1>
      </section>

      <div className="rule" />

      <section className={styles.body}>
        <div className={styles.bodyInner}>

          <div className={styles.mainText}>
            <p className={styles.lead}>
              Praxitor is a privately held portfolio of premium brandable domains,
              available for direct acquisition by founders, brand strategists,
              and companies that understand what a name is worth.
            </p>

            <p className={styles.para}>
              Every domain in this portfolio was evaluated through a single lens:
              what would this name do for the business built on it? Not as an
              asset to be catalogued, but as a decision a founder will live with
              for years — in pitch decks, on business cards, in the moment a
              customer says it aloud for the first time.
            </p>

            <p className={styles.para}>
              That perspective shapes what gets acquired and what gets passed over.
              Most names don&apos;t make the cut — not because they fail a technical
              checklist, but because they would ask something of their owner:
              an explanation, a spelling correction, a moment of doubt. The names
              that remain are the ones that work before the brand does.
            </p>

            <p className={styles.para}>
              Acquisitions are handled directly with the owner. There are no brokers,
              no intermediaries, and no artificial timelines. Every transaction is
              secured via Escrow.com and completed with straightforward documentation.
              The process is fast because it was designed to be.
            </p>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.sideBlock}>
              <span className={styles.sideLabel}>Acquisition</span>
              <p className={styles.sideText}>
                All domains are available for direct purchase. Inquiries receive
                a response within 24 hours.
              </p>
            </div>

            <div className={styles.sideBlock}>
              <span className={styles.sideLabel}>Transaction</span>
              <p className={styles.sideText}>
                Funds held via Escrow.com until transfer is complete.
                Full buyer protection on every acquisition.
              </p>
            </div>

            <div className={styles.sideBlock}>
              <span className={styles.sideLabel}>Transfer</span>
              <p className={styles.sideText}>
                Domain transferred to your registrar of choice.
                Typically completed within 48 hours of payment.
              </p>
            </div>

            <div className={styles.sideBlock}>
              <span className={styles.sideLabel}>Contact</span>
              <p className={styles.sideText}>
                <a href="mailto:contact@praxitor.com" className={styles.email}>
                  contact@praxitor.com
                </a>
              </p>
            </div>
          </aside>

        </div>
      </section>

      <section className={styles.closing}>
        <div className={styles.closingInner}>
          <p className={styles.closingQuote}>
            &ldquo;The right name doesn&apos;t need to be explained.
            It arrives already working.&rdquo;
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
