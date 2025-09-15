import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx- auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between"
        >
          {/* Left Section */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h2 className="text-2xl font-bold mb-3">
              Harshdipsinh <span className="text-blue-600">Gohil</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Full Stack Developer specializing in modern web technologies and responsive design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="mb-8 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-3">Contact</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600" />
                <span>harshdipsinhgohil260@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-600" />
                <span>+91 8128****18</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <hr className="my-8 border-gray-700" />

        <div className="flex justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Parth Panchal. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
