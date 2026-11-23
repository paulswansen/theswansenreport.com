import { getCollection, type CollectionEntry } from 'astro:content';

export const SITE = {
  title: 'The Swansen Report',
  tagline: "Independent news from Wisconsin's north coast",
  description:
    'Independent Wisconsin news covering Bayfield County, the South Shore, and statewide politics and policy.',
  location: 'Bayfield, Wisconsin',
  social: {
    facebook: 'https://facebook.com/paulswansen',
    x: 'https://x.com/paulswansen',
    youtube: 'https://youtube.com/@PaulSwansen',
  },
};

export { BEATS, BEAT_SLUGS, beatName, type BeatSlug } from './beats';

/** Published posts, newest first. Drafts show in `npm run dev` only. */
export async function getPosts(): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getCollection('posts', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const postUrl = (post: CollectionEntry<'posts'>) => `/news/${post.id}/`;

const fmt = (opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', ...opts });

export const formatDate = (d: Date) => fmt({ month: 'long', day: 'numeric', year: 'numeric' }).format(d);
export const formatShortDate = (d: Date) => fmt({ month: 'short', day: 'numeric' }).format(d);
