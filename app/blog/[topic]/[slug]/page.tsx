import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { BlogPost } from '@/components/BlogPost';

interface BlogPageProps {
  params: { topic: string; slug: string };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { topic, slug } = await params;

  const blogsDirectory = path.join(process.cwd(), 'content/blogs', topic);
  const filePath = path.join(blogsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Blog post not found for topic: ${topic}, slug: ${slug}`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <BlogPost
      title={data.title}
      date={data.date}
      author={data.author}
      content={contentHtml}
    />
  );
}

// Add generateStaticParams to fix the error
export async function generateStaticParams() {
  const blogsDirectory = path.join(process.cwd(), 'content/blogs');

  const getPaths = () => {
    const topics = fs.readdirSync(blogsDirectory, { withFileTypes: true });
    const paths: { topic: string; slug: string }[] = [];

    topics.forEach((topic) => {
      if (topic.isDirectory()) {
        const topicPath = path.join(blogsDirectory, topic.name);
        const slugs = fs.readdirSync(topicPath).filter((file) => file.endsWith('.md'));
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
