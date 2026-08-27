import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { TryCta } from './TryCta'

describe('TryCta', () => {
  it('asks visitors to request access via the form', () => {
    render(<TryCta />)
    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'Want to try the extension?',
      }),
    ).toBeInTheDocument()
    const link = screen.getByRole('link', { name: /request access/i })
    expect(link).toHaveAttribute(
      'href',
      expect.stringContaining('docs.google.com/forms'),
    )
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('notes that requests are handled individually', () => {
    render(<TryCta />)
    expect(screen.getByText(/handled individually/i)).toBeInTheDocument()
  })
})
