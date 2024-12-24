// componens/BlogPost.tsx
import React from 'react';
import Image from 'next/image';

interface BlogPostProps {
  title: string;
  date: string;
  author: string;
  content: string;
  image?: string;
  tags?: string[];
}

export const BlogPost: React.FC<
  BlogPostProps
> = ({
  title,
  date,
  author,
  content,
  image,
  tags,
}) => {
  return (
    <article className='max-w-4xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg'>
      {/* Cover Image */}
      {image && (
        <div className='mb-8'>
          <Image
            src={image}
            alt={title}
            width={1200}
            height={600}
            className='w-full h-auto object-cover rounded-lg'
          />
        </div>
      )}

      {/* Header */}
      <header className='mb-6'>
        <h1 className='text-4xl font-bold mb-4'>
          {title}
        </h1>
        <p className='text-sm text-gray-500'>
          {date} | By{' '}
          <span className='font-medium'>
            {author}
          </span>
        </p>
      </header>

      {/* Content */}
      <section
        dangerouslySetInnerHTML={{
          __html: content,
        }}
        className='prose prose-lg max-w-none'
      />

      {/* Share Buttons */}
      <footer className='mt-12 border-t pt-6'>
        <h3 className='text-lg font-medium mb-4'>
          Share this post:
        </h3>
        <div className='flex gap-4'>
          {/* <a
            href={``}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Twitter
          </a>
          <a
            href={``}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
          >
            LinkedIn
          </a>
          <a
            href={``}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Email
          </a> */}
        </div>
      </footer>
    </article>
  );
};
