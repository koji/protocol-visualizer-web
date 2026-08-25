import type { ReactNode } from 'react'
import { useTheme } from './hooks/useTheme'
import { Header } from './components/Header/Header'

export default function App(): ReactNode {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>Protocol Visualizer</main>
    </div>
  )
}
