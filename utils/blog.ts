import matter from 'gray-matter';
import { Buffer } from 'buffer';

export type BlogFrontmatter = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  tags?: string[];
  externalUrl?: string;
  authorBio?: string;
  draft?: boolean;
};

export type BlogPost = BlogFrontmatter & {
  content: string;
};

type RawModule = string;

// Ensure Buffer is available in the browser bundle for gray-matter.
if (typeof globalThis !== 'undefined' && (globalThis as any).Buffer === undefined) {
  (globalThis as any).Buffer = Buffer;
}

const markdownFiles = import.meta.glob<RawModule>('../content/blog/*.md', {
  as: 'raw',
  eager: true,
});

const parsedPosts: BlogPost[] = Object.entries(markdownFiles)
  .map(([path, rawContent]) => {
    const { data, content } = matter(rawContent);
    const frontmatter = data as Partial<BlogFrontmatter>;

    const inferredSlug =
      frontmatter.slug ||
      path
        .split('/')
        .pop()
        ?.replace(/\.md$/, '') ||
      '';

    if (
      !inferredSlug ||
      !frontmatter.title ||
      !frontmatter.excerpt ||
      frontmatter.draft
    ) {
      // Skip invalid entries quietly; keeps the UI resilient if a file is incomplete.
      return null;
    }

    return {
      slug: inferredSlug,
      title: frontmatter.title,
      excerpt: frontmatter.excerpt,
      date: frontmatter.date || '',
      author: frontmatter.author || '',
      readTime: frontmatter.readTime || '',
      image: frontmatter.image || '',
      tags: frontmatter.tags || [],
      externalUrl: frontmatter.externalUrl,
      authorBio: frontmatter.authorBio || '',
      content,
    };
  })
  .filter((post): post is BlogPost => Boolean(post))
  .sort((a, b) => {
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);
    if (Number.isNaN(aTime) || Number.isNaN(bTime)) return 0;
    return bTime - aTime;
  });

export const getAllPostsMeta = (): BlogFrontmatter[] =>
  parsedPosts.map(({ content: _content, ...meta }) => meta);

export const getPostBySlug = (slug?: string): BlogPost | undefined =>
  parsedPosts.find((post) => post.slug === slug);

