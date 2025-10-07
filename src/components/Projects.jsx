import React from 'react';
import { Film, Server, GamepadIcon, Clock, Github, Newspaper, ClipboardList, Wrench } from 'lucide-react';

const projects = [
  {
    title: 'PII Redactor Tool',
    description:
      'A minimal web tool to detect and redact Personally Identifiable Information (PII) such as email addresses, phone numbers, names, and addresses from PDF and TXT files.',
    icon: Wrench,
    link: 'https://github.com/JaySoni1/PII-Redactor-Tool',
    tech: ['JavaScript'],
    color: 'from-primary to-secondary',
  },
  {
    title: 'Sprouty - Virtual Plant Caretaker WebApp',
    description:
      'A virtual plant care companion that provides care reminders, weather-based tips, and growth tracking features using React and MongoDB.',
    icon: Server,
    link: 'https://github.com/JaySoni1/Sprouty',
    tech: ['JavaScript', 'Node.js', 'React.js', 'MongoDB', 'Express.js'],
    color: 'from-secondary to-highlight',
  },
  {
    title: 'Crypto News Aggregator',
    description:
      'A real-time cryptocurrency news aggregator that fetches the latest updates from multiple sources, helping users stay informed about market trends.',
    icon: Newspaper,
    link: 'https://github.com/JaySoni1/Crypto-News',
    tech: ['React', 'Node.js', 'News API'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Taskboard Pro',
    description:
      'A modern project management and collaboration platform designed to help teams organize, track, and manage their tasks efficiently with real-time updates and workflow automation.',
    icon: ClipboardList, // ✅ fixed icon
    link: 'https://github.com/JaySoni1/taskboardpro',
    tech: ['JavaScript', 'TypeScript', 'HTML', 'CSS'], // ✅ fixed quotes
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Safety Makers',
    description:
      'Intimate Partner Violence (IPV) refers to abuse or aggression by a current or former partner or spouse. It can happen to anyone, but women are disproportionately affected. It includes: awareness, reporting tools, and safety resources.',
    icon: Film, // ✅ replaced invalid icon reference
    link: 'https://github.com/JaySoni1/safety_makers',
    tech: ['JavaScript', 'Python', 'HTML', 'CSS'],
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Guess the Number',
    description:
      '"Guess the Number" is a fun and challenging game where you test your intuition and logic to find the hidden number. Adjust difficulty levels and see how quickly you can guess correctly!',
    icon: GamepadIcon,
    link: 'https://github.com/JaySoni1/FirstGame',
    tech: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-highlight to-accent',
  },
];

const Projects = () => {
  return (
    <>
      {projects.map((project, index) => (
        <div
          key={index}
          className="project-card glass-panel rounded-xl p-6 group hover:transform hover:scale-105 transition-all duration-500"
        >
          <div
            className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} p-3 mb-6 group-hover:animate-float`}
          >
            <project.icon className="w-full h-full text-white" />
          </div>

          <h3 className="text-2xl font-bold mb-3 elegant-text">{project.title}</h3>

          <p className="text-text-secondary mb-6 line-clamp-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 text-sm rounded-full bg-surface text-highlight"
              >
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="elegant-button text-sm py-2 px-4 inline-flex items-center gap-2 hover:gap-3 transition-all w-full justify-center sm:w-auto"
          >
            <Github className="w-4 h-4" />
            View Code
          </a>
        </div>
      ))}
    </>
  );
};

export default Projects;
