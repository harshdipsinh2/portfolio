import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Master of Science in Information Technology',
      institution: 'Silver Oak University',
      duration: '2018 - 2022',
      description: 'Graduated with honors. Specialized in web development and software engineering.',
    },
    {
      id: 2,
      degree: 'High School ',
      institution: 'Nalanda vidyalay',
      duration: '2016 - 2018',
      description: 'Completed high school with excellent grades in mathematics and computer science.',
    },
  ];

  const certifications = [
    {
      id: 1,
      name: 'Internship Completion Certificate',
      issuer: 'Hexadroit',
      date: 'Feb 2025 - Aug 2025',
      description: 'Demonstrated proficiency in developing and maintaining applications on AWS.',
    },
    // {
    //   id: 2,
    //   name: 'React Developer Certification',
    //   issuer: 'Meta (Facebook)',
    //   date: '2022',
    //   description: 'Certified in advanced React concepts and best practices.',
    // },
    // {
    //   id: 3,
    //   name: 'MongoDB Certified Developer',
    //   issuer: 'MongoDB Inc.',
    //   date: '2022',
    //   description: 'Proficient in MongoDB database design and development.',
    // },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Education & Certifications
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {edu.duration}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                      {cert.date}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {cert.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
