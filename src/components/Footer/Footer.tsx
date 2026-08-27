import type { ReactNode } from 'react'
import { activeLinks, externalLinks } from '../../config/links'
import styles from './Footer.module.css'

export function Footer(): ReactNode {
  const links = activeLinks(externalLinks)

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <small>MIT License © 2026 Koji Kanao</small>
        {links.length > 0 ? (
          <nav className={styles.links} aria-label="External links">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}
      </div>
    </footer>
  )
}
