import { describe, expect, it } from 'vitest'
import { activeLinks, externalLinks } from './links'

describe('externalLinks', () => {
  it('exposes the feedback form', () => {
    const feedback = externalLinks.find((link) => link.label === 'Feedback')
    expect(feedback?.url).toContain('https://docs.google.com/forms/')
  })
})

describe('activeLinks', () => {
  it('filters out links without urls', () => {
    const links = [
      { label: 'GitHub', url: '' },
      { label: 'Feedback', url: 'https://example.com/form' },
    ]
    expect(activeLinks(links)).toEqual([
      { label: 'Feedback', url: 'https://example.com/form' },
    ])
  })

  it('keeps links that have urls', () => {
    const links = [
      { label: 'GitHub', url: 'https://github.com/example/repo' },
      { label: 'Docs', url: '' },
    ]
    expect(activeLinks(links)).toEqual([
      { label: 'GitHub', url: 'https://github.com/example/repo' },
    ])
  })
})
