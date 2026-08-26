import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders every section of the landing page', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Protocol Visualizer' }))
      .toBeInTheDocument()
    expect(screen.getByLabelText('Features')).toBeInTheDocument()
    expect(screen.getByLabelText('Screenshot')).toBeInTheDocument()
    expect(screen.getByLabelText('Installation guide')).toBeInTheDocument()
  })

  it('points every call-to-action at the request form', () => {
    render(<App />)
    const ctas = screen.getAllByRole('link', { name: /request access/i })
    expect(ctas.length).toBeGreaterThanOrEqual(3)
    for (const link of ctas) {
      expect(link).toHaveAttribute('href', expect.stringContaining('docs.google.com/forms'))
    }
  })

  it('disclaims affiliation with Opentrons', () => {
    render(<App />)
    expect(screen.getByText(/not affiliated with or endorsed by Opentrons/i)).toBeInTheDocument()
  })
})
