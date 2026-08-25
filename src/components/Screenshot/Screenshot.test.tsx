import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Screenshot } from './Screenshot'

describe('Screenshot', () => {
  it('shows a labelled placeholder figure', () => {
    render(<Screenshot />)
    expect(screen.getByRole('img', { name: /Protocol Visualizer screenshot placeholder/i }))
      .toBeInTheDocument()
    expect(screen.getByText(/Extension screenshot coming soon/i)).toBeInTheDocument()
  })
})
