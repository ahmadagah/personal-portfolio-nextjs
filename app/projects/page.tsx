export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'An e-commerce website built for a local business, increasing sales by 30%.',
      techStack: ['React', 'Node.js', 'MongoDB'],
    },
  ];

  return (
    <section className='min-h-screen bg-gray-100 py-16 px-8'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>
          Projects
        </h1>
        <p className='text-lg text-gray-600 text-center mb-12'>
          Here are some of the projects I’ve
          worked on, showcasing my skills in
          development, design, and
          problem-solving.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <h3 className='text-2xl font-semibold text-gray-800 mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-600 mb-4'>
                {project.description}
              </p>
              <div className='flex flex-wrap gap-2'>
                {project.techStack.map(
                  (tech, i) => (
                    <span
                      key={i}
                      className='text-sm text-white bg-blue-500 rounded-full px-3 py-1'
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
