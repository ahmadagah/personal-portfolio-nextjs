import React from "react";

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  content: string;
  image?: string;
}

export const BlogPost: React.FC<BlogPostProps> = ({
  title,
  date,
  author,
  content,
}) => {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-gray-500">
          {date} | By {author}
        </p>
      </header>
      <section
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};
