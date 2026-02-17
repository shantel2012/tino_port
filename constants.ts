import { Project, Experience, SkillCategory } from './types';

export const PORTFOLIO_DATA = {
  name: "Tinomudaishe Kutama",
  title: "Software Developer",
  tagline: "Innovative software solutions that make a difference.",
  about: "I am a passionate software engineer with a strong background in web development, UI/UX design, and digital marketing. I love creating applications that are not only functional but also visually stunning and user-friendly.",
  location: "Harare, Zimbabwe",
  email: "tino@example.com",
};

export const SKILLS: SkillCategory[] = [
  {
    name: "Software Development",
    skills: ["JavaScript", "React", "HTML/CSS", "Python", "Node.js"]
  },
  {
    name: "Design",
    skills: ["Figma", "UI/UX Principles"]
  },
  {
    name: "Marketing",
    skills: ["SEO", "Content Strategy", "Social Media", "Analytics"]
  },
  {
name: "AI & Tools",
    skills: ["Gemini API", "Git", "VS Code"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Senior Developer",
    company: "Tech Solutions",
    period: "2022 - Present",
    description: [
      "Leading frontend development teams.",
      "Implementing responsive designs.",
      "Optimizing web performance."
    ]
  },
  {
    id: "2",
    role: "UI/UX Designer",
    company: "Creative Studio",
    period: "2020 - 2022",
    description: [
      "Designed user interfaces for mobile and web.",
      "Conducted user research.",
      "Created high-fidelity prototypes."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p0",
    title: "Task Management App",
    description: "A productivity application for managing tasks and boosting personal efficiency.",
    tags: ["React", "Productivity", "Task Management"],
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78aa36f?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://task-omega-brown-70.vercel.app/"
  },
  {
    id: "p1",
    title: "Learning Platform",
    description: "An interactive platform for online learning and course management.",
    tags: ["React", "Education", "E-Learning"],
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop",
    liveUrl: "https://brave-new-learn.vercel.app/"
  },
  {
    id: "p2",
    title: "Blog CMS",
    description: "A full-featured content management system for managing and publishing blog posts.",
    tags: ["React", "CMS", "Blog"],
    imageUrl: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://blogcms-4xsp.vercel.app/"
  },
  {
    id: "p3",
    title: "Food Ordering Website",
    description: "A modern, responsive food ordering website with a clean UI and smooth user experience.",
    tags: ["React", "UI/UX", "Website"],
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877039348bf?q=80&w=2070&auto=format&fit=crop",
    liveUrl: "https://food-website-two-pi-59.vercel.app/"
  }
];

export const BLOGS = [
    {
        id: 1,
        title: "Better user interface",
        author: "Tino Kutama",
        time: "10 hours ago",
        desc: "Exploring the principles of modern UI design and how they impact user retention.",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "The Future of Web Dev",
        author: "Tino Kutama",
        time: "1 day ago",
        desc: "How AI tools like Gemini are reshaping the landscape of software development.",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Mastering React Hooks",
        author: "Tino Kutama",
        time: "2 days ago",
        desc: "A deep dive into useEffect, useState, and custom hooks for better state management.",
        img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop"
    }
];