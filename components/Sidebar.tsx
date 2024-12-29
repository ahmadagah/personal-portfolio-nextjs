'use client';
import React from 'react';
import Link from 'next/link';

interface SidebarProps {
  sections: {
    id: string;
    title: string;
    slug?: string;
  }[];
  topic: string;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  sections,
  topic,
}) => {

  console.log('sections from Sidebar', sections);
  console.log('topic from Sidebar', topic);

  return (
    <aside className="sticky top-0   bg-gray-100 border-r border-gray-300 p-6 w-64">
  <h2 className="text-lg font-bold mb-4">Blog Sections</h2>
  <ul className="space-y-2">
    {sections.map((section) => (
      <li key={section.id}>
        <Link
          href={`/blog/${topic}/${section.slug}`}
          className="block hover:underline px-2 py-1 text-gray-700"
        >
          {section.title}
        </Link>
      </li>
    ))}
  </ul>
</aside>

  );
};

export default Sidebar;
