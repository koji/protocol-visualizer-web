import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ThemeToggle } from './ThemeToggle'

describe('ThemeToggle', () => {
  it('offers switching to light when current theme is dark', () => {
    const onToggle = vi.fn()
    render(<ThemeToggle theme="dark" onToggleTheme={onToggle} />)
    expect(screen.getByRole('button', { name: 'Switch to light theme' })).toBeInTheDocument()
  })

  it('offers switching to dark when current theme is light', () => {
    const onToggle = vi.fn()
    render(<ThemeToggle theme="light" onToggleTheme={onToggle} />)
    expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toBeInTheDocument()
  })

  it('calls onToggleTheme when clicked', () => {
    const onToggle = vi.fn()
    render(<ThemeToggle theme="dark" onToggleTheme={onToggle} />)
    fireEvent.click(screen.getByRole('button'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })
})
