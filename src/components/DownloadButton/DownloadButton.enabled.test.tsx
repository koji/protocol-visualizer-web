import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { DownloadButton } from './DownloadButton'

vi.mock('../../config/site', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../../config/site')>()
  return {
    ...actual,
    site: {
      ...actual.site,
      download: { ...actual.site.download, available: true },
    },
  }
})

describe('DownloadButton (VSIX published)', () => {
  it('renders a download link to the fixed vsix path', () => {
    render(<DownloadButton />)
    const link = screen.getByRole('link', { name: /Download \.vsix/i })
    expect(link).toHaveAttribute('href', './downloads/protocol-visualizer.vsix')
    expect(link).toHaveAttribute('download')
  })
})
