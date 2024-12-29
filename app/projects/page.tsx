export default function ProjectsPage() {
  const projects = [
    {
      title: 'Modify',
      description:
        'A web application using a Python backend (Flask), Vite React frontend, and integrations with Spotify and OpenAI APIs.',
      techStack: [
        'React',
        'Python',
        'Flask',
        'Vite',
        'Tailwind CSS',
        'Spotify API',
        'OpenAI API',
      ],
      gitLabLink:
        'https://gitlab.com/agah1/modify', // GitLab link
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio built using Next.js, showcasing projects, blogs, and a modern design.',
      techStack: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'Vercel',
      ],
      gitHubLink:
        'https://github.com/ahmadagah/personal-portfolio-nextjs', // GitHub link
    },
  ];

  return (
    <section className='min-h-screen py-16 px-8'>
      <div className='max-w-5xl mx-auto'>
        <h1 className='text-4xl font-bold text-center text-gray-800 mb-8'>
          Projects
        </h1>
        <p className='text-lg text-gray-600 text-center mb-12'>
          Here are some of the projects I’ve
          worked on.
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
              <div className='flex flex-wrap gap-2 mb-4'>
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
              <div className='flex gap-4'>
                {project.gitHubLink && (
                  <a
                    href={project.gitHubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-200 rounded-full px-4 py-2 text-sm font-medium'
                  >
                    View on GitHub
                  </a>
                )}
                {project.gitLabLink && (
                  <a
                    href={project.gitLabLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-block text-white bg-blue-600 hover:bg-blue-500 transition-colors duration-200 rounded-full px-4 py-2 text-sm font-medium'
                  >
                    View on GitLab
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
