import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Stationery E-Commerce Platform',
      subtitle: 'Stationery E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React frontend and Node.js backend, featuring user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      sourceCode: 'https://github.com/harshdipsinh2/stationery ',
      liveDemo: 'https://www.therudranterprise.in/',
      icon: '🛒'
    },
    {
      id: 2,
      title: 'Personal Portfolio',
      subtitle: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with React. Features smooth animations, contact form integration, and optimized performance for showcasing professional work.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      sourceCode: 'https://github.com/harshdipsinh2/portfolio',
      liveDemo: '#',
      icon: '💼'
    },
    {
      id: 3,
      title: 'Tailor Management System',
      subtitle: 'Tailor Management System',
      description: 'A Tailor-Management System with Manage order-customers-product-fabrics-employee with the admin panel.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      sourceCode: 'https://github.com/harshdipsinh2/tailor',
      liveDemo: 'https://tailor-git-main-tailor-management.vercel.app/',
      icon: '✂️'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      subtitle: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather and forecasts for multiple locations with beautiful data visualizations.',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
      sourceCode: 'https://github.com/harshdipsinh2',
      liveDemo: '#',
      icon: '🌤️'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing my recent development work and creative solutions
            </p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Header */}
                <div className="bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-800 dark:to-gray-900 p-8 text-white relative overflow-hidden">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-sm">{project.icon}</span>
                  </div>
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {project.subtitle}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 text-sm font-medium"
                    >
                      <FaCode size={14} />
                      GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
                    >
                      <FaEye size={14} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Explore More Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="https://github.com/harshdipsinh2"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FaGithub size={20} />
              Explore More Projects
              <FaExternalLinkAlt size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
