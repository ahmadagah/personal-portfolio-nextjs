import { fetchFromGitHub } from "lib/github";
import Link from "next/link";

export default async function BlogIndexPage() {
  try {
    // Fetch topics from GitHub
    const response = await fetchFromGitHub("blogs");
    const topics = JSON.parse(response);

    return (
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics
          .filter((topic: any) => topic.type === "dir") // Only include directories
          .map((topic: any) => (
            <div
              key={topic.name}
              className="shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-bold capitalize mb-4">
                {topic.name.replace("_", " ")}
              </h2>
              <p className="mb-4">
                Explore posts under the {topic.name.replace("_", " ")} category.
              </p>
              <Link
                href={`/blog/${topic.name}`}
                className="text-blue-500 font-medium hover:underline"
              >
                View Posts →
              </Link>
            </div>
          ))}
      </section>
    );
  } catch (error) {
    console.error("Error fetching topics:", error);
    return <div>Error loading topics</div>;
  }
}
