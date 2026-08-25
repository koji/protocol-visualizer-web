import type { ReactNode } from 'react'
import type { Theme } from '../../hooks/useTheme'
import styles from './ThemeToggle.module.css'

interface ThemeToggleProps {
  theme: Theme
  onToggleTheme: () => void
}

const LABELS: Record<Theme, string> = {
  dark: 'Switch to light theme',
  light: 'Switch to dark theme',
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  )
}

export function ThemeToggle({ theme, onToggleTheme }: ThemeToggleProps): ReactNode {
  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={onToggleTheme}
      aria-label={LABELS[theme]}
      title={LABELS[theme]}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
