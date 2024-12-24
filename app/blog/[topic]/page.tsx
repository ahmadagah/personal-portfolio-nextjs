// blog/[topic]/page.tsx

import { fetchFromGitHub } from "lib/github";
import Link from "next/link";
import matter from "gray-matter";

type Post = {
  slug: string;
  title: string;
};

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;

  try {
    // Fetch posts for the specific topic
    const filePath = `blogs/${topic}`;
    const response = await fetchFromGitHub(filePath);
    const files: { name: string }[] = JSON.parse(response);

    // Parse frontmatter to get titles
    const posts: Post[] = await Promise.all(
      files
        .filter((file) => file.name.endsWith(".md")) // Only include Markdown files
        .map(async (file) => {
          const slug = file.name.replace(".md", ""); // Remove `.md` extension
          const fileContent = await fetchFromGitHub(`${filePath}/${file.name}`);
          const { data } = matter(fileContent);
          return {
            slug,
            title: data.title || slug, // Use title from frontmatter or fallback to slug
          };
        }),
    );

    return (
      <section className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 capitalize">
          {topic.replace("_", " ")}
        </h1>
        <ul>
          {posts.map((post) => (
            <li key={post.slug} className="mb-2">
              <Link href={`/blog/${topic}/${post.slug}`} className="">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    );
  } catch (error) {
    console.error("Error fetching topic:", error);
    return <div>Error loading posts for {topic}</div>;
  }
}

export async function generateStaticParams() {
  const response = await fetchFromGitHub("blogs"); // Adjusted to match GitHub structure
  const topics = JSON.parse(response);

  return topics
    .filter((item: any) => item.type === "dir") // Ensure it's a directory
    .map((topic: any) => ({ topic: topic.name }));
}
