import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useTheme } from './useTheme'

function stubMatchMedia(scheme: 'light' | 'dark') {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query.includes(scheme),
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
}

beforeEach(() => {
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
  stubMatchMedia('dark')
})

describe('useTheme', () => {
  it('falls back to prefers-color-scheme when nothing is stored', () => {
    stubMatchMedia('light')
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')
  })

  it('defaults to dark when OS prefers dark', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
  })

  it('prefers the stored value over the OS setting', () => {
    stubMatchMedia('light')
    window.localStorage.setItem('theme', 'dark')
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
  })

  it('reflects the theme on documentElement', () => {
    stubMatchMedia('light')
    renderHook(() => useTheme())
    expect(document.documentElement.dataset.theme).toBe('light')
  })

  it('toggleTheme flips the theme and persists it', () => {
    const { result } = renderHook(() => useTheme())
    act(() => {
      result.current.toggleTheme()
    })
    expect(result.current.theme).toBe('light')
    expect(window.localStorage.getItem('theme')).toBe('light')
    expect(document.documentElement.dataset.theme).toBe('light')
  })
})
