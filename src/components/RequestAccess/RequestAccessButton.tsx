import type { ReactNode } from 'react'
import { feedbackFormUrl } from '../../config/links'
import styles from './RequestAccessButton.module.css'

interface RequestAccessButtonProps {
  compact?: boolean
}

export function RequestAccessButton({
  compact = false,
}: RequestAccessButtonProps): ReactNode {
  const className = compact
    ? `${styles.button} ${styles.compact}`
    : styles.button

  return (
    <a
      className={className}
      href={feedbackFormUrl}
      target="_blank"
      rel="noreferrer"
    >
      Request access
    </a>
  )
}
