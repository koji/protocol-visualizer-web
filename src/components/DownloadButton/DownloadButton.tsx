import type { ReactNode } from 'react'
import { site } from '../../config/site'
import styles from './DownloadButton.module.css'

interface DownloadButtonProps {
  compact?: boolean
}

export function DownloadButton({ compact = false }: DownloadButtonProps): ReactNode {
  const className = compact ? `${styles.button} ${styles.compact}` : styles.button

  if (!site.download.available) {
    return (
      <button type="button" className={className} disabled>
        {site.download.label}
        <span className={styles.badge}>{site.download.comingSoonLabel}</span>
      </button>
    )
  }

  return (
    <a className={className} href={site.download.href} download>
      {site.download.label}
    </a>
  )
}
