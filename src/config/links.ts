export interface ExternalLink {
  label: string
  url: string
}

// An empty url means "not published yet" — activeLinks filters those out.
export const externalLinks: ExternalLink[] = [{ label: 'GitHub', url: '' }]

export function activeLinks(links: ExternalLink[]): ExternalLink[] {
  return links.filter((link) => link.url !== '')
}
