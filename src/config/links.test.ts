import { describe, expect, it } from 'vitest'
import { activeLinks, externalLinks } from './links'

describe('activeLinks', () => {
  it('filters out links without urls', () => {
    expect(activeLinks(externalLinks)).toEqual([])
  })

  it('keeps links that have urls', () => {
    const links = [
      { label: 'GitHub', url: 'https://github.com/example/repo' },
      { label: 'Docs', url: '' },
    ]
    expect(activeLinks(links)).toEqual([{ label: 'GitHub', url: 'https://github.com/example/repo' }])
  })
})
