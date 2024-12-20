import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export default function BlogIndexPage() {
  const blogsDirectory = path.join(process.cwd(), "content/blogs");

  const getPostsByTopic = () => {
    const entries = fs.readdirSync(blogsDirectory, { withFileTypes: true });
    const topics: Record<
      string,
      { slug: string; title: string; date: string }[]
    > = {};

    entries.forEach((entry) => {
      if (entry.isDirectory()) {
        const topicPath = path.join(blogsDirectory, entry.name);
        const posts = fs.readdirSync(topicPath).flatMap((file) => {
          if (file.endsWith(".md")) {
            const fileContents = fs.readFileSync(
              path.join(topicPath, file),
              "utf8",
            );
            const { data } = matter(fileContents);
            return {
              slug: file.replace(".md", ""),
              title: data.title,
              date: data.date,
            };
          }
          return [];
        });
        topics[entry.name] = posts;
      }
    });

    return topics;
  };

  const blogsByTopic = getPostsByTopic();

  return (
    <section>
      {Object.entries(blogsByTopic).map(([topic, posts]) => (
        <div key={topic} className="mb-8">
          <h2 className="text-2xl font-bold capitalize">
            {topic.replace("_", " ")}
          </h2>
          <ul>
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${topic}/${post.slug}`}>
                  {post.title} -{" "}
                  <span className="text-sm text-gray-500">{post.date}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
