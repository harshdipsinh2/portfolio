import { motion } from 'framer-motion';
import resumePDF from "../assets/Harshdipsinh_Gohil.pdf"; 

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Harshdipsinh_Gohil_Resume.pdf"; 
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="w-64 h-64 mx-auto mb-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center shadow-lg transition-shadow duration-300 hover:shadow-xl">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                I'm a passionate Full Stack Developer with 3+ years of experience building web applications.
                I specialize in React, Node.js, and modern web technologies. I love creating clean, efficient,
                and user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
              </p>
              <button
                onClick={handleDownloadResume}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Download Resume
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
