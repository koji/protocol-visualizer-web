import type { ReactNode } from 'react'
import styles from './Features.module.css'

export interface Feature {
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    title: 'Real-time Deck Visualization',
    description:
      'Watch pipette moves, labware states, and liquid volume changes render as your protocol runs.',
  },
  {
    title: 'Auto-analysis on Save',
    description: 'Analysis reruns automatically every time you save your protocol file.',
  },
  {
    title: 'Runtime Parameters UI',
    description: 'Input fields are generated for runtime parameters; hit Analyze to apply them.',
  },
  {
    title: 'Custom Labware Support',
    description: 'Place custom labware JSON definitions next to your protocol file and they just work.',
  },
  {
    title: 'Pop-out Window',
    description: "Detach the visualizer to a separate window via VSCode's Auxiliary Window support.",
  },
  {
    title: 'Step Jumper',
    description: 'Jump straight to any protocol step by number from the Protocol Steps panel.',
  },
]

export function Features(): ReactNode {
  return (
    <section id="features" className={styles.section} aria-label="Features">
      <div className="container">
        <h2 className={styles.heading}>Everything you need to see your protocol run</h2>
        <ul className={styles.grid}>
          {FEATURES.map((feature) => (
            <li key={feature.title}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardBody}>{feature.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
