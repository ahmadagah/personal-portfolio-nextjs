// blog/[topic]/[slug] page component

import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";
import { fetchFromGitHub } from "lib/github";
import { BlogPost } from "@/components/BlogPost";

import dotenv from "dotenv";

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
    const fileContents = await fetchFromGitHub(filePath);

    // Parse frontmatter and content using gray-matter
    const { data, content } = matter(fileContents);

    // Convert Markdown to HTML using remark
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Transform the image path
    const imageURL = data.image?.startsWith("/")
      ? `${GITHUB_RAW_BASE_URL}${data.image}`
      : data.image;

    // Use the BlogPost component to render the post
    return (
      <BlogPost
        title={data.title}
        date={data.date}
        author={data.author}
        content={contentHtml}
        image={imageURL}
        tags={data.tags}
      />
    );
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return <div>Error loading blog post</div>;
  }
}

export async function generateStaticParams() {
  const response = await fetchFromGitHub("blogs");
  const topics = JSON.parse(response);

  const allPaths = await Promise.all(
    topics
      .filter((item: any) => item.type === "dir") // Only include directories
      .map(async (topic: any) => {
        const topicResponse = await fetchFromGitHub(`blogs/${topic.name}`);
        const files = JSON.parse(topicResponse);

        return files
          .filter((file: any) => file.name.endsWith(".md")) // Only include Markdown files
          .map((file: any) => ({
            topic: topic.name,
            slug: file.name.replace(".md", ""),
          }));
      }),
  );

  return allPaths.flat(); // Flatten nested arrays
}
