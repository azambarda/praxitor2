import styles from './OfferForm.module.css'

export default function OfferForm({ domainName, domainTld }) {
  return (
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className={styles.form}
    >
      <input type="hidden" name="access_key" value="fb157b8a-ffa6-4107-9e88-68df3d19823b" />
      <input type="hidden" name="subject" value={`Acquisition offer: ${domainName}${domainTld}`} />
      <input type="hidden" name="domain" value={`${domainName}${domainTld}`} />
      <input type="hidden" name="redirect" value="https://praxitor.com/thank-you" />
      {/* Honeypot anti-spam */}
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

      <div className={styles.field}>
        <label className={styles.label} htmlFor="of-name">Name</label>
        <input className={styles.input} type="text" id="of-name" name="name" required autoComplete="name" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="of-email">Email</label>
        <input className={styles.input} type="email" id="of-email" name="email" required autoComplete="email" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="of-offer">Offer (USD)</label>
        <input className={styles.input} type="text" id="of-offer" name="offer" placeholder="e.g. 3,500" />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="of-message">
          Message <span className={styles.optional}>(optional)</span>
        </label>
        <textarea className={styles.textarea} id="of-message" name="message" rows={3} />
      </div>

      <button type="submit" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
        Submit offer
      </button>
    </form>
  )
}
