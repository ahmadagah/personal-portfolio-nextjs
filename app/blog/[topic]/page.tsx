import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import Link from 'next/link';

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;

  const blogsDirectory = path.join(
    process.cwd(),
    'content/blogs',
    topic
  );

  const getPosts = () => {
    if (!fs.existsSync(blogsDirectory)) return [];

    return fs
      .readdirSync(blogsDirectory)
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const fileContents = fs.readFileSync(
          path.join(blogsDirectory, file),
          'utf8'
        );
        const { data } = matter(fileContents);

        return {
          slug: file.replace('.md', ''),
          title: data.title,
          date: data.date,
        };
      });
  };

  const posts = getPosts();

  return (
    <section className='max-w-3xl mx-auto px-6 py-12'>
      <h1 className='text-4xl font-bold mb-6 capitalize'>
        {topic.replace('_', ' ')}
      </h1>
      <ul>
        {posts.map((post) => (
          <li
            key={post.slug}
            className='mb-2'
          >
            <Link
              href={`/blog/${topic}/${post.slug}`}
              className='text-blue-500'
            >
              {post.title}
            </Link>{' '}
            <span className='text-sm text-gray-500'>
              {post.date}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Generate static params for dynamic topic routes
export async function generateStaticParams() {
  const blogsDirectory = path.join(
    process.cwd(),
    'content/blogs'
  );

  const topics = fs
    .readdirSync(blogsDirectory, {
      withFileTypes: true,
    })
    .filter((dir) => dir.isDirectory())
    .map((dir) => ({ topic: dir.name }));

  return topics;
}

// Enable ISR to rebuild static pages periodically
export const revalidate = 60; // Rebuild every 60 seconds
