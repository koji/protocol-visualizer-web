import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { DownloadButton } from './DownloadButton'

describe('DownloadButton (VSIX not yet published)', () => {
  it('renders a disabled button with Coming soon badge', () => {
    render(<DownloadButton />)
    const button = screen.getByRole('button', { name: /Download \.vsix/i })
    expect(button).toBeDisabled()
    expect(button).toHaveTextContent('Coming soon')
  })
})
