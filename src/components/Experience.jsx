import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Hexadroit ',
      position: 'Full Stack Developer',
      duration: '2022 - Present',
      description: 'Developed Tailor Management System using React.js and .NET during training phase.',
      achievements: [
        'Improved application performance by 40%',
        'Mentored junior developers',
        'Implemented automated testing suite',
      ],
    },
    // {
    //   id: 2,
    //   company: 'StartupXYZ',
    //   position: 'Frontend Developer',
    //   duration: '2021 - 2022',
    //   description: 'Built responsive user interfaces for a fintech startup. Collaborated with UX designers to create intuitive user experiences.',
    //   achievements: [
    //     'Developed mobile-first responsive designs',
    //     'Integrated payment processing systems',
    //     'Reduced bounce rate by 25%',
    //   ],
    // },
    // {
    //   id: 3,
    //   company: 'Freelance',
    //   position: 'Web Developer',
    //   duration: '2020 - 2021',
    //   description: 'Worked on various freelance projects including e-commerce sites, blogs, and custom web applications for small businesses.',
    //   achievements: [
    //     'Completed 15+ projects successfully',
    //     'Maintained 100% client satisfaction rate',
    //     'Learned and implemented new technologies',
    //   ],
    // },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Experience
          </h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-600 dark:bg-indigo-400"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-20"
              >
                {/* Timeline dot */}
                <div className="absolute -left-16 top-6 w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full border-4 border-white dark:border-gray-900"></div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.position}
                    </h3>
                    <span className="text-indigo-600 dark:text-indigo-400 font-medium">
                      {exp.duration}
                    </span>
                  </div>
                  <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-3">
                    {exp.company}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Key Achievements:
                    </h5>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
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

export default Experience;
