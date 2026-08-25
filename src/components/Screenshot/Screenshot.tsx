import type { ReactNode } from 'react'
import { BeakerLogo } from '../BeakerLogo/BeakerLogo'
import styles from './Screenshot.module.css'

export function Screenshot(): ReactNode {
  return (
    <section className={styles.section} aria-label="Screenshot">
      <div className="container">
        <figure className={styles.figure}>
          <div
            role="img"
            aria-label="Protocol Visualizer screenshot placeholder"
            className={styles.placeholder}
          >
            <BeakerLogo className={styles.beaker} />
          </div>
          <figcaption className={styles.caption}>Extension screenshot coming soon</figcaption>
        </figure>
      </div>
    </section>
  )
}
