// components/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProjectCard({ project }: { project: { 
  title: string; 
  description: string; 
  tech: string[];
  link: string;
}}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl p-6 shadow-xl"
    >
      <Link href={project.link} target="_blank" className="group">
        <h3 className="text-xl font-semibold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-cyan-900/30 text-cyan-300 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}