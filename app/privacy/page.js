import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Privacy Policy — Praxitor',
  description: 'How Praxitor handles your personal data.',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.headline}>Privacy Policy</h1>
        <p className={styles.meta}>Last updated: June 2025</p>
      </section>

      <div className="rule" />

      <section className={styles.body}>
        <div className={styles.bodyInner}>
          <div className={styles.content}>

            <div className={styles.block}>
              <h2 className={styles.heading}>1. Who we are</h2>
              <p>Praxitor is a privately operated domain portfolio at praxitor.com. For questions about how your data is handled, contact us at <a href="mailto:contact@praxitor.com" className={styles.link}>contact@praxitor.com</a>.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>2. Data we collect</h2>
              <p>We only collect personal data that you voluntarily provide through this website. This occurs in two situations:</p>
              <p><strong>Contact and offer forms:</strong> when you submit an inquiry or offer, we receive your name, email address, and any message you choose to include. This data is processed by Web3Forms and delivered to our inbox. It is used solely to respond to your inquiry.</p>
              <p><strong>Website analytics:</strong> this site uses Cloudflare Web Analytics, which measures page views, visit duration, and general traffic patterns. Cloudflare Web Analytics does not use cookies, does not track individual users across sessions, and does not collect personally identifiable information. No data is shared with third-party advertising networks.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>3. How we use your data</h2>
              <p>Data submitted through forms is used exclusively to respond to your inquiry or offer. We do not use it for marketing, do not sell it to third parties, and do not add you to any mailing list without your explicit consent.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>4. Data retention</h2>
              <p>Inquiry data is retained only for as long as necessary to conduct the relevant communication or transaction. If no transaction results, data is deleted within a reasonable period. You may request deletion at any time by contacting us.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>5. Cookies</h2>
              <p>This website does not use cookies for tracking or analytics purposes. No cookie consent banner is required. Some browsers may store session data for functional reasons, but this is managed by your browser, not by us.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>6. Third-party services</h2>
              <p><strong>Web3Forms</strong> processes form submissions on our behalf. Their privacy policy is available at web3forms.com.</p>
              <p><strong>Cloudflare</strong> provides hosting, DNS, and privacy-preserving analytics. Their privacy policy is available at cloudflare.com/privacypolicy.</p>
              <p><strong>Escrow.com</strong> is used for domain transactions. Their privacy policy governs the data provided during escrow transactions.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>7. Your rights</h2>
              <p>Under the Brazilian Lei Geral de Proteção de Dados (LGPD), you have the right to access, correct, or request deletion of any personal data we hold about you. To exercise any of these rights, contact us at <a href="mailto:contact@praxitor.com" className={styles.link}>contact@praxitor.com</a>.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>8. Changes to this Policy</h2>
              <p>This Policy may be updated from time to time. The date at the top reflects the most recent revision. Continued use of the website after any update constitutes acceptance of the revised Policy.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
