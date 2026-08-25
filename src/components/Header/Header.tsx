import type { ReactNode } from 'react'
import type { Theme } from '../../hooks/useTheme'
import { site } from '../../config/site'
import { BeakerLogo } from '../BeakerLogo/BeakerLogo'
import { DownloadButton } from '../DownloadButton/DownloadButton'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import styles from './Header.module.css'

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Install', href: '#install' },
]

export function Header({ theme, onToggleTheme }: HeaderProps): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          {/* Decorative: the adjacent span already gives the link its accessible name. */}
          <BeakerLogo className={styles.logo} />
          <span>{site.productName}</span>
        </a>
        <nav className={styles.nav} aria-label="Section navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <DownloadButton compact />
          <ThemeToggle theme={theme} onToggleTheme={onToggleTheme} />
        </div>
      </div>
    </header>
  )
}
