// blog/[topic]/layout.tsx
import Sidebar from '@/components/Sidebar';
import { fetchFromGitHub } from 'lib/github';
import matter from 'gray-matter';

export default async function BlogTopicLayout({
  children,
  params: paramsPromise,
}: {
  children: React.ReactNode;
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await paramsPromise;

  let sections = [];

  try {
    // Fetch all Markdown files for the topic
    const filePath = `blogs/${topic}`;
    const response =
      await fetchFromGitHub(filePath);
    const files = JSON.parse(response);

    // Map files to sections for the sidebar
    sections = await Promise.all(
      files
        .filter((file: any) =>
          file.name.endsWith('.md')
        ) // Only Markdown files
        .map(async (file: any) => {
          const slug = file.name.replace(
            '.md',
            ''
          ); // Generate slug
          const fileContent =
            await fetchFromGitHub(
              `${filePath}/${file.name}`
            );
          const { data } = matter(fileContent); // Parse frontmatter

          return {
            id: slug,
            title: data.title || slug, // Use title from frontmatter or fallback to slug
            slug,
          };
        })
    );
  } catch (error) {
    console.error(
      'Error fetching sections:',
      error
    );
  }

  const hasSlug = sections.length > 0;

  return (
    <div className='flex min-h-screen'>
      <Sidebar
        sections={sections}
        topic={topic}
        className='fixed top-0 left-0 h-screen w-64 overflow-auto bg-gray-100 border-r border-gray-300 p-6'
      />
      <main className='flex-grow p-6'>
        {children}
      </main>
    </div>
  );
}
