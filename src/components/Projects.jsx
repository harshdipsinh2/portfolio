import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Stationery E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, payment integration, and admin dashboard.',
      image: 'https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=E-Commerce',
      techStack: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveDemo: ' ',
      github: 'https://github.com/harshdipsinh2/stationery',
    },
    {
      id: 2,
      title: 'Personal Portfolio ',
      description: 'A modern, responsive portfolio website built with React . Features smooth animations, contact form integration, and optimized performance for showcasing professional work.',
      image: 'https://via.placeholder.com/400x250/059669/FFFFFF?text=Task+Manager',
      techStack: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      liveDemo: '#',
      github: 'https://github.com/harshdipsinh2/portfolio',
    },
    {
      id: 3,
      title: 'Tailor Management System',
      description: 'A Tailor-Management System with Manage order-customers-product-fabrics-employee with the admin panel.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Weather+App',
      techStack: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveDemo: 'https://tailor-git-main-tailor-management.vercel.app/',
      github: 'https://github.com/harshdipsinh2/tailor',
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts for multiple locations with beautiful data visualizations.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Weather+App',
      techStack: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      liveDemo: '#',
      github: 'https://github.com/harshdipsinh2',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform transition-shadow duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 transition-shadow shadow-md hover:shadow-lg"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 dark:bg-gray-600 hover:bg-gray-900 dark:hover:bg-gray-500 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 transition-shadow shadow-md hover:shadow-lg"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
