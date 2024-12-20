import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface TopicPageProps {
  params: Promise<{ topic: string }>;
}

export default async function TopicPage({
  params,
}: TopicPageProps) {
  const { topic } = await params; // Await the params if it's a promise

  const blogsDirectory = path.join(
    process.cwd(),
    'content/blogs',
    topic
  );

  const getPosts = () => {
    const posts = fs
      .readdirSync(blogsDirectory)
      .flatMap((file) => {
        if (file.endsWith('.md')) {
          const fileContents = fs.readFileSync(
            path.join(blogsDirectory, file),
            'utf8'
          );
          const { data } = matter(fileContents);
          return {
            slug: file.replace('.md', ''),
            title: data.title,
            date: data.date,
            prefix: parseInt(file.split('-')[0]), // Extract the numeric prefix
          };
        }
        return [];
      });

    // Sort posts by numeric prefix
    return posts.sort(
      (a, b) => a.prefix - b.prefix
    );
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
            >
              <span>{`${post.prefix} - ${post.title}`}</span>{' '}
              <span className='text-sm text-gray-500'>
                {post.date}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

// Add generateStaticParams to support static generation
export async function generateStaticParams() {
  const blogsDirectory = path.join(
    process.cwd(),
    'content/blogs'
  );

  const getTopics = () => {
    const topics = fs.readdirSync(
      blogsDirectory,
      { withFileTypes: true }
    );
    const paths: { topic: string }[] = [];

    topics.forEach((topic) => {
      if (topic.isDirectory()) {
        paths.push({ topic: topic.name });
      }
    });

    return paths;
  };

  return getTopics();
}
