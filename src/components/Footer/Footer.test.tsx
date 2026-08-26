import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the license line', () => {
    render(<Footer />)
    expect(screen.getByText('MIT License © 2026 Koji Kanao')).toBeInTheDocument()
  })

  it('hides GitHub while the repository URL is empty', () => {
    render(<Footer />)
    expect(screen.queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument()
  })

  it('links to the feedback form', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Feedback' })
    expect(link).toHaveAttribute('href', expect.stringContaining('docs.google.com/forms'))
    expect(link).toHaveAttribute('target', '_blank')
  })
})
