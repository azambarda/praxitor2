import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Terms of Service — Praxitor',
  description: 'Terms governing the use of Praxitor and domain acquisition transactions.',
}

export default function TermsPage() {
  return (
    <>
      <Nav />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.headline}>Terms of Service</h1>
        <p className={styles.meta}>Last updated: June 2025</p>
      </section>

      <div className="rule" />

      <section className={styles.body}>
        <div className={styles.bodyInner}>
          <div className={styles.content}>

            <div className={styles.block}>
              <h2 className={styles.heading}>1. About Praxitor</h2>
              <p>Praxitor is a privately held portfolio of premium brandable domain names operated as a commercial activity. These Terms govern your use of the website at praxitor.com and any domain acquisition transactions conducted through it.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>2. Use of the website</h2>
              <p>You may browse and use praxitor.com for the purpose of evaluating and inquiring about domain names. You agree not to use the site for any unlawful purpose, to attempt to gain unauthorised access to any part of the site, or to submit false or misleading information through any contact form.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>3. Domain acquisitions</h2>
              <p>All domain names listed on this site are privately owned. Submitting an offer or inquiry does not constitute a binding agreement. A transaction is only binding when both parties have confirmed terms in writing and funds have been placed in escrow.</p>
              <p>All transactions are conducted via Escrow.com or a mutually agreed alternative. Praxitor does not accept direct payment of any kind outside of a formal escrow arrangement.</p>
              <p>Praxitor makes no representations regarding the trademark status of any domain name. It is the buyer's responsibility to conduct their own trademark and legal due diligence prior to acquisition.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>4. Pricing and negotiations</h2>
              <p>Listed domains are available at prices determined solely by Praxitor. Submission of an offer does not obligate Praxitor to accept or respond. Praxitor reserves the right to withdraw any domain from sale at any time without notice.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>5. Intellectual property</h2>
              <p>The content of this website — including text, design, and graphics — is the property of Praxitor. Domain names listed for sale are not licensed for use prior to a completed acquisition.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>6. Limitation of liability</h2>
              <p>Praxitor provides this website on an "as is" basis. We make no warranties regarding availability, accuracy, or fitness for a particular purpose. To the extent permitted by law, Praxitor is not liable for any indirect, incidental, or consequential damages arising from the use of this site or any domain transaction.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>7. Governing law</h2>
              <p>These Terms are governed by the laws of Brazil. Any disputes arising from these Terms or from a domain transaction shall be resolved in the courts of Brazil, unless otherwise agreed in writing between the parties.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>8. Changes to these Terms</h2>
              <p>Praxitor may update these Terms at any time. Continued use of the website after any changes constitutes acceptance of the updated Terms. The date at the top of this page reflects the most recent revision.</p>
            </div>

            <div className={styles.block}>
              <h2 className={styles.heading}>9. Contact</h2>
              <p>Questions regarding these Terms may be directed to <a href="mailto:contact@praxitor.com" className={styles.link}>contact@praxitor.com</a>.</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
