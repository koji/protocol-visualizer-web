import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the product headline', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Protocol Visualizer' }),
    ).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Hero />)
    expect(
      screen.getByText(/Simulate your Opentrons Python protocols/i),
    ).toBeInTheDocument()
  })

  it('contains the primary CTA in its disabled state', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /Download \.vsix/i })).toBeDisabled()
  })

  it('links down to the installation guide', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Installation guide/i })).toHaveAttribute(
      'href',
      '#install',
    )
  })
})
