import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost } from '@/components/BlogPost';

interface BlogPageProps {
  params: Promise<{
    topic: string;
    slug: string;
  }>;
}

export default async function BlogPage({
  params,
}: BlogPageProps) {
  // Await resolved params if it's a promise
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

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(
      `Blog post not found for topic: ${topic}, slug: ${slug}`
    );
  }

  // Read and parse the blog file
  const fileContents = fs.readFileSync(
    filePath,
    'utf8'
  );
  const { data, content } = matter(fileContents);

  // Convert Markdown content to HTML
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();

  // Render the blog post
  return (
    <BlogPost
      title={data.title}
      author={data.author}
      date={data.date}
      content={contentHtml}
    />
  );
}

// Function to generate static params for dynamic routes
export async function generateStaticParams() {
  const blogsDirectory = path.join(
    process.cwd(),
    'content/blogs'
  );

  const getPaths = () => {
    const topics = fs.readdirSync(
      blogsDirectory,
      { withFileTypes: true }
    );
    const paths: {
      topic: string;
      slug: string;
    }[] = [];

    topics.forEach((topic) => {
      if (topic.isDirectory()) {
        const topicPath = path.join(
          blogsDirectory,
          topic.name
        );
        const slugs = fs
          .readdirSync(topicPath)
          .filter((file) => file.endsWith('.md'))
          .sort(
            (a, b) =>
              parseInt(a.split('-')[0]) -
              parseInt(b.split('-')[0])
          ); // Sort by numeric prefix

        slugs.forEach((slug) => {
          paths.push({
            topic: topic.name,
            slug: slug.replace('.md', ''),
          });
        });
      }
    });

    return paths;
  };

  return getPaths();
}
