'use client'; // Add this at the top for Framer Motion

import { motion } from 'framer-motion';
import { ExperienceTimeline, EducationTimeline } from '../components/Timeline';
import { experiences, educations, certifications, projects, skills } from '../data/portfolioData';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import SkillBars from '../components/SkillBars';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      <header className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-4">
            Nihal Singh
          </h1>
          <h2 className="text-2xl text-cyan-300 mb-4">Software Development Engineer @ Moody's</h2>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://linkedin.com/in/nihals1011" className="text-cyan-400 hover:text-cyan-200 transition-colors">
              <FaLinkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/nnolas27" className="text-cyan-400 hover:text-cyan-200 transition-colors">
              <FaGithub className="h-8 w-8" />
            </a>
          </div>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 space-y-20">
        {/* Experience Section */}
        <section>
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">Professional Journey</h3>
          <ExperienceTimeline items={experiences} />
        </section>

        {/* Education Section */}
        <section>
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">Education</h3>
          <EducationTimeline items={educations} />
        </section>

        {/* Certifications Section */}
        <section>
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-800 rounded-lg p-6 shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <img src={cert.logo} className="h-12 w-12 mr-4" alt={cert.issuer} />
                  <div>
                    <h4 className="text-xl font-semibold text-cyan-300">{cert.title}</h4>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-4">{cert.description}</p>
                <div className="flex justify-between text-sm text-cyan-400">
                  <span>{cert.issued}</span>
                  <span>{cert.expires}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">Technical Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h3 className="text-3xl font-bold text-cyan-400 mb-8">Technical Expertise</h3>
          <SkillBars skills={skills} />
        </section>
      </main>
    </div>
  );
}
