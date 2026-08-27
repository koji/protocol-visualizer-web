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
      'Deck state and liquid volume changes render in real time through an interactive panel while your protocol runs.',
  },
  {
    title: 'Auto-analysis on Save',
    description:
      'The simulation automatically reruns whenever you save changes (Ctrl+S / Cmd+S) to your protocol file.',
  },
  {
    title: 'Runtime Parameters UI',
    description:
      'Input fields are generated for Opentrons Runtime Parameters; hit Analyze to apply them — your original code is never modified.',
  },
  {
    title: 'Custom Labware Support',
    description:
      'Place custom labware definition files (.json) in the same directory as your protocol file and they just work.',
  },
  {
    title: 'Pop-out Window',
    description:
      "Pop the panel out to its own window or drag the tab to another monitor via VSCode's Auxiliary Window support.",
  },
  {
    title: 'Step Jumper',
    description:
      'Enter any step number under Protocol Steps and hit Enter to jump the visualization state instantly.',
  },
]

export function Features(): ReactNode {
  return (
    <section id="features" className={styles.section} aria-label="Features">
      <div className="container">
        <h2 className={styles.heading}>
          Everything you need to see your protocol run
        </h2>
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
