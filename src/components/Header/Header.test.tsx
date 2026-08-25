import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { Header } from './Header'

const setup = (theme: 'dark' | 'light' = 'dark') =>
  render(<Header theme={theme} onToggleTheme={vi.fn()} />)

describe('Header', () => {
  it('links the brand back to top of page', () => {
    setup()
    const brand = screen.getByRole('link', { name: 'Protocol Visualizer' })
    expect(brand).toHaveAttribute('href', '#top')
  })

  it('has section anchors for Features and Install', () => {
    setup()
    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '#features')
    expect(screen.getByRole('link', { name: 'Install' })).toHaveAttribute('href', '#install')
  })

  it('contains the download CTA in its disabled state', () => {
    setup()
    expect(screen.getByRole('button', { name: /Download \.vsix/i })).toBeDisabled()
  })

  it('contains the theme toggle', () => {
    setup()
    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument()
  })
})
