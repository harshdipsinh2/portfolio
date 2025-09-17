import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 overflow-hidden">
      {/* Subtle glow animation background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-[500px] h-[500px] bg-blue-500 rounded-full blur-3xl absolute -top-40 -left-40 animate-pulse"></div>
        <div className="w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl absolute -bottom-40 -right-40 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between"
        >
          {/* Left Section */}
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">
              Harshdipsinh <span className="text-blue-500">Gohil</span>
            </h2>
            <p className="text-gray-300 mb-6 max-w-md">
              Full Stack Developer specializing in modern web technologies and
              responsive design solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/harshdipsinh2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-110 duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/harshdipsinh-gohil-355aab288/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-110 duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com/harshdipsinh___"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-110 duration-300"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              {["Home", "About", "Skills", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-blue-400 transition-colors flex items-center space-x-2"
                    >
                      <span className="text-xs text-blue-500">›</span>
                      <span>{item}</span>
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </motion.div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {currentYear} Harshdipsinh Gohil. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="mt-4 sm:mt-0 bg-gray-800 p-3 rounded-full hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-110 duration-300"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
