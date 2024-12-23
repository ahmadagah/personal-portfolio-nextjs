import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { BlogPost } from '@/components/BlogPost';

export default async function BlogPage({
  params,
}: {
  params: Promise<{
    topic: string;
    slug: string;
  }>;
}) {
  const { topic, slug } = await params;

  const blogsDirectory = path.join(
    process.cwd(),
    'content/blogs',
    topic
  );
  const filePath = path.join(
    blogsDirectory,
    `${slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    return { notFound: true }; // Handle missing files gracefully
  }

  const fileContents = fs.readFileSync(
    filePath,
    'utf8'
  );
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  return (
    <BlogPost
      author={data.author}
      content={contentHtml}
      date={data.date}
      title={data.title}
    />
  );
}

// Generate static params for dynamic blog post routes
export async function generateStaticParams() {
  const blogsDirectory = path.join(
    process.cwd(),
    'content/blogs'
  );

  const paths = fs
    .readdirSync(blogsDirectory, {
      withFileTypes: true,
    })
    .flatMap((topic) => {
      if (topic.isDirectory()) {
        const topicPath = path.join(
          blogsDirectory,
          topic.name
        );

        return fs
          .readdirSync(topicPath)
          .filter((file) => file.endsWith('.md'))
          .map((file) => ({
            topic: topic.name,
            slug: file.replace('.md', ''),
          }));
      }

      return [];
    });

  return paths;
}

// Enable ISR to rebuild static pages periodically
export const revalidate = 60; // Rebuild every 60 seconds
