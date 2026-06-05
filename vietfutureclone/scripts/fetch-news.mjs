import { writeFileSync } from 'fs';

const res = await fetch(
  'https://vietfuture.world/wp-json/wp/v2/posts?per_page=10&_embed=wp:featuredmedia',
);
const posts = await res.json();
const months = ['', 'Th1', 'Th2', 'Th3', 'Th4', 'Th5', 'Th6', 'Th7', 'Th8', 'Th9', 'Th10', 'Th11', 'Th12'];

function decodeHtml(html) {
  return html
    .replace(/&#0?38;/g, '&')
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#8230;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&hellip;/g, '…')
    .replace(/\[&#8230;\]/g, '[…]')
    .replace(/<[^>]+>/g, '');
}

const articles = posts.map((p) => {
  const d = new Date(p.date);
  const media = p._embedded?.['wp:featuredmedia']?.[0];
  return {
    title: decodeHtml(p.title.rendered),
    excerpt: decodeHtml(p.excerpt?.rendered ?? '').trim(),
    href: p.link,
    image: media?.source_url ?? '',
    day: String(d.getDate()),
    month: months[d.getMonth() + 1],
  };
});

const out = `import type { NewsArticle } from '../components/Media/NewsCard';

/** Synced from vietfuture.world WP API */
export const newsArticles: NewsArticle[] = ${JSON.stringify(articles, null, 2)};
`;

writeFileSync(new URL('../src/data/newsArticles.ts', import.meta.url), out);
console.log('Wrote', articles.length, 'articles');
