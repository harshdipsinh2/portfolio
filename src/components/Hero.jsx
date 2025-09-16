import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import profileImg from "../assets/1739445467399 (1).jpg"

; // 👉 replace with your actual image path

const Hero = () => {
  const mountRef = useRef(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setClearColor(0x000000, 0); // transparent background
    currentMount.appendChild(renderer.domElement);

    // Create bouncing spheres
    const spheres = [];
    const sphereGeometry = new THREE.SphereGeometry(2, 16, 16);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      transparent: true,
      opacity: 0.6,
    });

    for (let i = 0; i < 30; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      sphere.userData.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1,
        (Math.random() - 0.5) * 0.1
      );
      spheres.push(sphere);
      scene.add(sphere);
    }

    // Create floating bubbles
    const bubbles = [];
    const bubbleGeometry = new THREE.SphereGeometry(1.5, 16, 16);
    const bubbleMaterial = new THREE.MeshPhongMaterial({
      color: 0x99ccff,
      transparent: true,
      opacity: 0.3,
      shininess: 100,
      specular: 0xffffff,
    });

    for (let i = 0; i < 20; i++) {
      const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
      bubble.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
      );
      bubble.userData.velocity = new THREE.Vector3(
        0,
        0.02 + Math.random() * 0.02,
        0
      );
      bubbles.push(bubble);
      scene.add(bubble);
    }

    // Create twinkling stars
    const stars = [];
    const starGeometry = new THREE.SphereGeometry(0.2, 8, 8);
    const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = 0; i < 100; i++) {
      const star = new THREE.Mesh(starGeometry, starMaterial.clone());
      star.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      star.material.transparent = true;
      star.material.opacity = 0.8;
      star.userData.twinkleSpeed = 0.01 + Math.random() * 0.02;
      stars.push(star);
      scene.add(star);
    }

    // Add light for bubbles
    const light = new THREE.PointLight(0xffffff, 1, 500);
    light.position.set(10, 10, 25);
    scene.add(light);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      spheres.forEach((sphere) => {
        sphere.position.add(sphere.userData.velocity);
        ["x", "y", "z"].forEach((axis) => {
          if (sphere.position[axis] > 25 || sphere.position[axis] < -25) {
            sphere.userData.velocity[axis] *= -1;
          }
        });
      });

      bubbles.forEach((bubble) => {
        bubble.position.add(bubble.userData.velocity);
        if (bubble.position.y > 25) {
          bubble.position.y = -25;
          bubble.position.x = (Math.random() - 0.5) * 50;
          bubble.position.z = (Math.random() - 0.5) * 50;
        }
      });

      stars.forEach((star) => {
        star.material.opacity =
          0.5 + 0.5 * Math.sin(Date.now() * star.userData.twinkleSpeed * 0.01);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center transition-colors duration-300"
      style={{
        backgroundColor: "#000000",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      {/* Background Canvas */}
      <div
        ref={mountRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{ pointerEvents: "none" }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10 flex-grow flex flex-col justify-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-blue-600 shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Harshdipsinh Gohil
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-blue-500 mb-6"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            I build scalable web applications with clean code & modern design
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mt-auto mb-6"
        >
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll down"
            className="text-white text-3xl animate-bounce"
          >
            ↓
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
