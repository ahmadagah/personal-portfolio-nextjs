import { title } from '@/components/primitives';

export default function AboutPage() {
  return (
    <div className='min-h-screen'>
      <div className='container mx-auto px-6 py-12'>
        {/* Title Section */}
        <h1
          className={`${title()} text-6xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500`}
        >
          About Me
        </h1>
        <div className='space-y-8 p-6 lg:p-12'>
          <section>
            <p className='text-lg leading-relaxed text-gray-700'>
              I am a{' '}
              <span className='font-bold text-blue-600'>
                graduate student
              </span>{' '}
              in the
              <span className='font-bold text-purple-600'>
                {' '}
                Department of Computer Science{' '}
              </span>
              at{' '}
              <span className='italic text-indigo-500'>
                Portland State University
              </span>
              . Alongside my studies, I work as a
              tutor for various undergraduate
              courses, including:
            </p>
            <ul className='list-disc list-inside mt-4 text-gray-600'>
              <li>
                Introduction to Programming and
                Problem Solving
              </li>
              <li>
                Introduction to Computer Science
              </li>
              <li>Data Structures</li>
              <li>
                Programming Methods & Software
                Implementation
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
