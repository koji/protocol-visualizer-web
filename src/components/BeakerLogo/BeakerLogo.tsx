import type { ReactNode } from 'react'

interface BeakerLogoProps {
  className?: string
  /** Accessible name. Omit for decorative usage. */
  label?: string
}

export function BeakerLogo({ className, label }: BeakerLogoProps): ReactNode {
  const a11y = label ? { role: 'img' as const, 'aria-label': label } : { 'aria-hidden': true }

  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...a11y}>
      {label ? <title>{label}</title> : null}
      <path
        d="M11 4h10M12 4v9.2L6.9 23.3A2.4 2.4 0 0 0 9.06 26.8h13.88a2.4 2.4 0 0 0 2.16-3.5L20 13.2V4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13.1 17.4h5.8l2.75 5.6H10.35l2.75-5.6Z" fill="currentColor" opacity="0.55" />
      <circle cx="14.6" cy="21.2" r="0.95" fill="currentColor" />
      <circle cx="18.1" cy="20.4" r="0.6" fill="currentColor" />
    </svg>
  )
}
