import { title } from '@/components/primitives';

export default function ServicesPage() {
  return (
    <div className='min-h-screen '>
      <div className='container mx-auto px-6 py-12'>
        {/* Title Section */}
        <h1
          className={`${title()} text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-8`}
        >
          Services
        </h1>

        {/* Services Section */}
        <div className='space-y-8 p-8 lg:p-12'>
          <p className='text-lg leading-relaxed text-gray-700'>
            I offer a range of professional
            services to meet your needs:
          </p>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <li className='p-6  hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                Web Design
              </h3>
              <p className='text-gray-600'>
                Creating modern, responsive, and
                user-friendly websites to help you
                establish your online presence.
              </p>
            </li>
            <li className='p-6hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                Tutoring
              </h3>
              <p className='text-gray-600'>
                Providing tutoring in computer
                science and mathematics for
                students of all levels.
              </p>
            </li>
            <li className='p-6h hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                Automation Systems
              </h3>
              <p className='text-gray-600'>
                Developing custom automation
                systems to streamline your
                processes and improve efficiency.
              </p>
            </li>
            <li className='p-6 hover:shadow-md transition-shadow'>
              <h3 className='text-xl font-semibold text-blue-600 mb-2'>
                Custom Web Applications
              </h3>
              <p className='text-gray-600'>
                Building tailored web applications
                designed to fit your specific
                business or personal needs.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
