import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaDatabase, 
  FaTools, 
  FaCloud, 
  FaUsers 
} from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: <FaCode className="text-2xl" />,
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      iconBg: 'bg-blue-100 dark:bg-blue-800',
      skills: [
        'React',
        'JavaScript/TypeScript', 
        'HTML5/CSS3',
        'Tailwind CSS',
        'Responsive Design'
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: <FaServer className="text-2xl" />,
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      iconBg: 'bg-indigo-100 dark:bg-indigo-800',
      skills: [
        'Node.js',
        'Express.js',
        'RESTful APIs',
        'Authentication',
        'Server Management'
      ]
    },
    {
      id: 'database',
      title: 'Database Management',
      icon: <FaDatabase className="text-2xl" />,
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      iconBg: 'bg-green-100 dark:bg-green-800',
      skills: [
        'MongoDB',
        'Supabase',
        'SQL',
        'Database Design',
        'Data Modeling'
      ]
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: <FaTools className="text-2xl" />,
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderColor: 'border-yellow-200 dark:border-yellow-800',
      iconBg: 'bg-yellow-100 dark:bg-yellow-800',
      skills: [
        'Git/GitHub',
        'VS Code',
        'Vite',
        'npm/yarn',
        'Linux Commands'
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & Deployment',
      icon: <FaCloud className="text-2xl" />,
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      borderColor: 'border-cyan-200 dark:border-cyan-800',
      iconBg: 'bg-cyan-100 dark:bg-cyan-800',
      skills: [
        'Vercel',
        'Netlify',
        'Cloud Services',
        'Domain Management',
        'Testing & Debugging'
      ]
    },
    {
      id: 'soft',
      title: 'Soft Skills',
      icon: <FaUsers className="text-2xl" />,
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      iconBg: 'bg-purple-100 dark:bg-purple-800',
      skills: [
        'Problem Solving',
        'Project Management',
        'Team Collaboration',
        'Communication',
        'Quick Learning'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              My technical proficiency and professional capabilities that I bring to every project
            </p>
          </div>
          
          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className={`
                  ${category.bgColor} ${category.borderColor}
                  p-8 rounded-2xl border-2 
                  shadow-lg hover:shadow-xl 
                  transition-all duration-300
                  backdrop-blur-sm
                  group cursor-pointer
                `}
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`
                    ${category.iconBg} 
                    w-14 h-14 rounded-xl 
                    flex items-center justify-center
                    group-hover:scale-110 transition-transform duration-300
                    text-gray-700 dark:text-gray-200
                  `}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <ul className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
