// This file lists all posts under a specific topic.

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface TopicPageProps {
  params: { topic: string };
}

export default function TopicPage({ params }: TopicPageProps) {
  const { topic } = params;

  const blogsDirectory = path.join(process.cwd(), 'content/blogs', topic);

  const getPosts = () => {
    const posts = fs.readdirSync(blogsDirectory).flatMap((file) => {
      if (file.endsWith('.md')) {
        const fileContents = fs.readFileSync(path.join(blogsDirectory, file), 'utf8');
        const { data } = matter(fileContents);
        return {
          slug: file.replace('.md', ''),
          title: data.title,
          date: data.date,
        };
      }
      return [];
    });

    return posts;
  };

  const posts = getPosts();

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 capitalize">{topic.replace('_', ' ')}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-2">
            <Link href={`/blog/${topic}/${post.slug}`}>
              {post.title} - <span className="text-sm text-gray-500">{post.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
