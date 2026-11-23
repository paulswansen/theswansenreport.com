export const BEATS = [
  { slug: 'bayfield-county', name: 'Bayfield County', blurb: 'County board, zoning, development and local government.' },
  { slug: 'south-shore', name: 'The South Shore', blurb: 'Communities, business and life along Lake Superior.' },
  { slug: 'statewide', name: 'Statewide', blurb: 'The Legislature, state agencies and the issues shaping Wisconsin.' },
] as const;

export const BEAT_SLUGS = ['bayfield-county', 'south-shore', 'statewide'] as const;
export type BeatSlug = (typeof BEAT_SLUGS)[number];

export const beatName = (slug: string) => BEATS.find((b) => b.slug === slug)?.name ?? slug;
