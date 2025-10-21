import { Code2, Terminal, Briefcase, Database, Cloud } from 'lucide-react';

export const skills = [
  {
    category: 'Programming Languages',
    icon: Code2,
    items: [
      { name: 'Java', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'C', level: 75 }
    ]
  },
  {
    category: 'Frontend Development',
    icon: Terminal,
    items: [
      { name: 'React.js', level: 88 },
      { name: 'JavaFX', level: 80 },
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Tailwind CSS', level: 82 }
    ]
  },
  {
    category: 'Backend Development',
    icon: Briefcase,
    items: [
      { name: 'Spring Boot', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'PHP', level: 75 }
    ]
  },
  {
    category: 'Databases',
    icon: Database,
    items: [
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 88 },
      { name: 'PostgreSQL', level: 85 }
    ]
  },
  {
    category: 'DevOps & Cloud',
    icon: Cloud,
    items: [
      { name: 'Docker', level: 75 },
      { name: 'Jenkins', level: 70 },
      { name: 'AWS', level: 72 },
      { name: 'Google Cloud', level: 68 }
    ]
  }
];