// components/Timeline.tsx
'use client';

import { motion } from 'framer-motion';

// Add proper TypeScript interfaces
interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  isLast: boolean;
}

export function TimelineItem({ title, subtitle, date, description, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8 border-l-2 border-cyan-500">
      {!isLast && <div className="absolute w-4 h-4 bg-cyan-500 rounded-full -left-[9px] top-0" />}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="pb-8"
      >
        <h4 className="text-xl font-semibold text-cyan-300">{title}</h4>
        <p className="text-gray-400">{subtitle}</p>
        <p className="text-sm text-cyan-400 mb-2">{date}</p>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    </div>
  );
}

// Add proper typing for the items prop
interface ExperienceItem {
  title: string;
  company: string;
  start: string;
  end: string;
  description: string;
}

export function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, idx) => (
        <TimelineItem
          key={idx}
          title={item.title}
          subtitle={item.company}
          date={`${item.start} - ${item.end}`}
          description={item.description}
          isLast={idx === items.length - 1}
        />
      ))}
    </div>
  );
}

// Add proper typing for education items
interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  gpa: string;
  coursework: string;
}

export function EducationTimeline({ items }: { items: EducationItem[] }) {
  return (
    <div className="space-y-8">
      {items.map((item, idx) => (
        <TimelineItem
          key={idx}
          title={item.degree}
          subtitle={item.institution}
          date={item.duration}
          description={`GPA: ${item.gpa} | ${item.coursework}`}
          isLast={idx === items.length - 1}
        />
      ))}
    </div>
  );
}