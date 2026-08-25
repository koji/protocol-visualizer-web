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

  it('starts the download CTA in the disabled Coming soon state', () => {
    render(<App />)
    const cta = screen.getAllByRole('button', { name: /Download \.vsix/i })
    expect(cta.length).toBeGreaterThanOrEqual(2)
    for (const button of cta) {
      expect(button).toBeDisabled()
      expect(button).toHaveTextContent('Coming soon')
    }
  })
})
