import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs 
} from 'react-icons/fa';
import { 
  SiExpress, 
  SiMongodb, 
  SiVite, 
  SiTailwindcss, 
  SiVercel, 
  SiTypescript 
} from 'react-icons/si';

const Technologies = () => {
  const technologies = [
    { icon: <FaReact className="text-4xl text-cyan-400" />, name: 'React' },
    { icon: <FaNodeJs className="text-4xl text-green-500" />, name: 'Node.js' },
    { icon: <SiExpress className="text-4xl text-gray-600 dark:text-gray-300" />, name: 'Express' },
    { icon: <SiMongodb className="text-4xl text-green-600" />, name: 'MongoDB' },
    { icon: <FaGitAlt className="text-4xl text-orange-500" />, name: 'Git' },
    { icon: <SiVite className="text-4xl text-purple-500" />, name: 'Vite' },
    { icon: <SiTailwindcss className="text-4xl text-cyan-500" />, name: 'Tailwind CSS' },
    { icon: <SiVercel className="text-4xl text-gray-900 dark:text-white" />, name: 'Vercel' },
    { icon: <FaHtml5 className="text-4xl text-orange-600" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-4xl text-blue-600" />, name: 'CSS3' },
    { icon: <FaJs className="text-4xl text-yellow-500" />, name: 'JavaScript' },
    { icon: <SiTypescript className="text-4xl text-blue-500" />, name: 'TypeScript' }
  ];

  // Duplicate the array to create seamless infinite scroll
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies I Work With
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Moving Technologies Carousel */}
        <div className="relative">
          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1200],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center justify-center min-w-[120px] p-4 bg-gray-50 dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-800 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-800 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;