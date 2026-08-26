import type { ReactNode } from 'react'
import { site } from '../../config/site'
import { BeakerLogo } from '../BeakerLogo/BeakerLogo'
import { RequestAccessButton } from '../RequestAccess/RequestAccessButton'
import styles from './Hero.module.css'

export function Hero(): ReactNode {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{site.productName}</h1>
            <span className={styles.badge}>{site.status}</span>
          </div>
          <p className={styles.tagline}>{site.tagline}</p>
          <div className={styles.ctaRow}>
            <RequestAccessButton />
            <a className={styles.guideLink} href="#install">
              Installation guide ↓
            </a>
          </div>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <BeakerLogo className={styles.beaker} />
        </div>
      </div>
    </section>
  )
}
