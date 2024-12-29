// blog/[topic]/[slug]/page.tsx

import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import { fetchFromGitHub } from 'lib/github';
import { BlogPost } from '@/components/BlogPost';
import dotenv from 'dotenv';

dotenv.config();

const REPO_OWNER = process.env.REPO_OWNER;
const REPO_NAME = process.env.REPO_NAME;
const GITHUB_RAW_BASE_URL = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/main/`;

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{
    topic: string;
    slug: string;
  }>;
}) {
  const { topic, slug } = await params;

  try {
    // Fetch the blog post content
    const filePath = `blogs/${topic}/${slug}.md`;
    const fileContents =
      await fetchFromGitHub(filePath);

    // Parse frontmatter and content using gray-matter
    const { data, content } =
      matter(fileContents);

    // Convert Markdown to HTML using remark
    const processedContent = await remark()
      .use(html)
      .process(content);
    const contentHtml =
      processedContent.toString();

    // Transform the image path
    const imageURL = data.image?.startsWith('/')
      ? `${GITHUB_RAW_BASE_URL}${data.image}`
      : data.image;

    // Render the blog post content
    return (
      <div className='max-w-4xl mx-auto p-6'>
        <BlogPost
          title={data.title}
          date={data.date}
          author={data.author}
          content={contentHtml}
          image={imageURL}
          tags={data.tags}
        />
      </div>
    );
  } catch (error) {
    console.error(
      'Error fetching blog post:',
      error
    );
    return <div>Error loading blog post</div>;
  }
}
