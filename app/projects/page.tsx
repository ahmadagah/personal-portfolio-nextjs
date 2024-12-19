
export default function ProjectsPage() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'An e-commerce website built for a local business, increasing sales by 30%.',
      techStack: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio showcasing design and development projects.',
      techStack: ['Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Chat Application',
      description:
        'A real-time chat app with typing indicators and group chats.',
      techStack: [
        'Socket.io',
        'Express',
        'React',
      ],
    },
    {
      title: 'Health Services App',
      description:
        'A mobile app simplifying appointment booking for health services.',
      techStack: ['React Native', 'Firebase'],
    },
    {
      title: 'Weather Dashboard',
      description:
        'An interactive dashboard to display real-time weather data.',
      techStack: [
        'Vue.js',
        'OpenWeatherMap API',
        'Bootstrap',
      ],
    },
    {
      title: 'Task Management Tool',
      description:
        'A tool to manage tasks and projects for teams with kanban boards.',
      techStack: [
        'Angular',
        'NestJS',
        'PostgreSQL',
      ],
    },
    {
      title: 'Online Learning Platform',
      description:
        'A platform offering courses with video tutorials and progress tracking.',
      techStack: ['Django', 'React', 'SQLite'],
    },
    {
      title: 'Fitness Tracker',
      description:
        'An app to track workouts and fitness goals with real-time analytics.',
      techStack: [
        'Flutter',
        'Firebase',
        'Chart.js',
      ],
    },
    {
      title: 'Expense Tracker',
      description:
        'A web app to track daily expenses and generate monthly reports.',
      techStack: ['Vue.js', 'Express', 'MongoDB'],
    },
    {
      title: 'Social Media Clone',
      description:
        'A social media app with user profiles, posts, and messaging features.',
      techStack: [
        'Ruby on Rails',
        'React',
        'AWS S3',
      ],
    },
    {
      title: 'Food Delivery App',
      description:
        'A mobile app for ordering food from local restaurants.',
      techStack: [
        'Swift',
        'Firebase',
        'Stripe API',
      ],
    },
    {
      title: 'Travel Blog Website',
      description:
        'A blog platform for sharing travel experiences with an integrated map view.',
      techStack: [
        'Gatsby',
        'GraphQL',
        'Tailwind CSS',
      ],
    },
    {
      title: 'AI Chatbot',
      description:
        'An AI-powered chatbot for customer service with natural language processing.',
      techStack: [
        'Python',
        'Flask',
        'Dialogflow',
      ],
    },
    {
      title: 'Inventory Management System',
      description:
        'A system to manage inventory for small businesses with real-time updates.',
      techStack: ['Laravel', 'Vue.js', 'MySQL'],
    },
    {
      title: 'Streaming Service',
      description:
        'A video streaming platform with user subscriptions and playlists.',
      techStack: [
        'Express.js',
        'React',
        'AWS Media Services',
      ],
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
