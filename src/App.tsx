import type { ReactNode } from 'react'
import { useTheme } from './hooks/useTheme'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Features } from './components/Features/Features'
import { Screenshot } from './components/Screenshot/Screenshot'
import { Install } from './components/Install/Install'
import { Footer } from './components/Footer/Footer'

export default function App(): ReactNode {
  const { theme, toggleTheme } = useTheme()

  return (
    <div id="top">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Features />
        <Screenshot />
        <Install />
      </main>
      <Footer />
    </div>
  )
}
