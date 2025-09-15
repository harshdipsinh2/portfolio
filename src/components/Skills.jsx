  import { motion } from 'framer-motion';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'JavaScript', level: 85, icon: '🟨' },
      { name: 'HTML/CSS', level: 95, icon: '🌐' },
      { name: 'Tailwind CSS', level: 80, icon: '🎨' },
    ],
    backend: [
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'Express', level: 80, icon: '🚀' },
      { name: 'Python', level: 75, icon: '🐍' },
      { name: 'MongoDB', level: 70, icon: '🍃' },
    ],
    tools: [
      { name: 'Git', level: 90, icon: '📚' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'AWS', level: 65, icon: '☁️' },
      { name: 'VS Code', level: 95, icon: '💻' },
    ],
  };

  const SkillBar = ({ skill, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="mb-6"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <span className="text-2xl mr-3">{skill.icon}</span>
          <span className="text-gray-900 dark:text-white font-medium">{skill.name}</span>
        </div>
        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.5, delay: delay + 0.3, ease: 'easeOut' }}
          viewport={{ once: true }}
        className="bg-indigo-600 h-3 rounded-full transition-transform duration-300"
        whileHover={{ scaleX: 1.05 }}
        />
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 capitalize text-center">
                  {category}
                </h3>
                {skillList.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
