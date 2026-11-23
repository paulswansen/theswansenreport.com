import rss from '@astrojs/rss';
import { SITE, getPosts } from '../lib/site';

export async function GET(context) {
  const posts = (await getPosts()).filter((p) => !p.data.draft);
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.slice(0, 50).map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/news/${post.id}/`,
      author: post.data.author,
      categories: post.data.tags,
    })),
  });
}
