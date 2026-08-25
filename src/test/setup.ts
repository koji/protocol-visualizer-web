import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'

function stubMatchMedia(scheme: 'light' | 'dark') {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: query.includes(scheme),
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

stubMatchMedia('dark')

afterEach(() => {
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
  stubMatchMedia('dark')
})
