export interface ExternalLink {
  label: string
  url: string
}

export const feedbackFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSee8RapmgEfDE2QQtonDNmai44tuyidFQx5A4CiPfXO7_lFgQ/viewform?usp=publish-editor'

// An empty url means "not published yet" — activeLinks filters those out.
export const externalLinks: ExternalLink[] = [
  { label: 'GitHub', url: '' },
  { label: 'Feedback', url: feedbackFormUrl },
]

export function activeLinks(links: ExternalLink[]): ExternalLink[] {
  return links.filter((link) => link.url !== '')
}
