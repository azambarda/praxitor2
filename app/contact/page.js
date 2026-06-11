import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'Contact — Praxitor',
  description: 'Get in touch with Praxitor for domain acquisition inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section className={styles.hero}>
        <p className={styles.eyebrow}>Contact</p>
        <h1 className={styles.headline}>Get in touch</h1>
        <p className={styles.sub}>
          For acquisition inquiries, pricing, or any other questions —
          all messages are read and answered directly.
        </p>
      </section>

      <div className="rule" />

      <section className={styles.body}>
        <div className={styles.bodyInner}>

          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className={styles.form}
          >
            <input type="hidden" name="access_key" value="fb157b8a-ffa6-4107-9e88-68df3d19823b" />
            <input type="hidden" name="subject" value="New contact — Praxitor" />
            <input type="hidden" name="redirect" value="https://praxitor.com/thank-you" />

            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input className={styles.input} type="text" id="name" name="name" required autoComplete="name" />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input className={styles.input} type="email" id="email" name="email" required autoComplete="email" />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea className={styles.textarea} id="message" name="message" rows={5} required />
            </div>

            <div className="cf-turnstile" data-sitekey="0x4AAAAAACN-ZxRB1OeFTRtx" />

            <button type="submit" className="btn-primary">
              Send message
            </button>
          </form>

          <aside className={styles.sidebar}>
            <div className={styles.sideBlock}>
              <span className={styles.sideLabel}>Response time</span>
              <p className={styles.sideText}>All inquiries answered within 24 hours.</p>
            </div>
            <div className={styles.sideBlock}>
              <span className={styles.sideLabel}>Direct email</span>
              <p className={styles.sideText}>
                <a href="mailto:contact@praxitor.com" className={styles.email}>
                  contact@praxitor.com
                </a>
              </p>
            </div>
            <div className={styles.sideBlock}>
              <span className={styles.sideLabel}>Acquisition</span>
              <p className={styles.sideText}>
                To inquire about a specific domain, open its page and use
                the offer form — it pre-fills the subject automatically.
              </p>
            </div>
          </aside>

        </div>
      </section>

      <Footer />
    </>
  )
}
