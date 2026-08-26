import type { ReactNode } from 'react'
import { RequestAccessButton } from '../RequestAccess/RequestAccessButton'
import styles from './TryCta.module.css'

export function TryCta(): ReactNode {
  return (
    <section className={styles.band} aria-label="Request access">
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Want to try the extension?</h2>
        <p className={styles.body}>
          Request access via our form — requests are handled individually.
        </p>
        <RequestAccessButton />
      </div>
    </section>
  )
}
