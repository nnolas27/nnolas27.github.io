// components/SkillBars.tsx
'use client';

import { motion } from 'framer-motion';

export default function SkillBars({ skills }: { skills: { name: string; level: number }[] }) {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <div className="flex justify-between text-cyan-300">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-3 bg-gray-800 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-cyan-500 rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}