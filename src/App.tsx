import type { ReactNode } from 'react'
import { useTheme } from './hooks/useTheme'

export default function App(): ReactNode {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top">
      <main>
        Protocol Visualizer
        <button type="button" onClick={toggleTheme}>
          toggle ({theme})
        </button>
      </main>
    </div>
  )
}
