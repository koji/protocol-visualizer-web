import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Disclaimer } from './Disclaimer'

describe('Disclaimer', () => {
  it('states the project is independent from Opentrons', () => {
    render(<Disclaimer />)
    expect(
      screen.getByText(/not affiliated with or endorsed by Opentrons/i),
    ).toBeInTheDocument()
  })
})
