import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

function Portfolio() {
  const cardItem = [
    {
      id: 0,
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      name: "E-commerce Enterprise Dashboard",
      link: "https://github.com/Rehankhan8855/dashboard1",
      description: "A professional-grade Admin Dashboard for complex e-commerce operations. Features real-time Supabase integration, interactive Recharts analytics, and PDF invoice generation.",
      tags: ["Next.js 15", "Supabase", "TypeScript", "Recharts"]
    },
    {
      id: 1,
      logo: "/mern.webp",
      name: "SocialNest",
      link: "https://github.com/Rehankhan8855/socialNest",
      description: "A full-featured social media platform with real-time messaging using Socket.io and MERN stack.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"]
    },
    {
      id: 2,
      logo: "/reactjs.png",
      name: "College-Platform",
      link: "https://github.com/lokesh-developer/college-platform",
      description: "Built a high-performance, multi-role platform focusing on frontend development and Editorial UI/UX. Designed a custom design system inspired by a “literary salon” aesthetic with a refined, human-centric interface. Developed the complete frontend including a dynamic dashboard and event integration via APIs.",
      tags: ["React", "Vite", "Supabase", "Redux Toolkit", "Framer Motion", "Tailwind CSS", "Radix UI"]
    },
    {
      id: 3,
      logo: "/reactjs.png",
      name: "HR Community – Landing Page",
      link: "https://github.com/werengineer/hr-community",
      description: "Contributed to the frontend development of a premium HR Community platform, focusing on building high-impact UI sections and interactive storytelling. Developed and refined key components including the Hero Section, Intro Section, and Tools Grid.",
      tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Lucide React"]
    },
    {
      id: 4,
      logo: "/reactjs.png",
      name: "WAE Social Landing – Engineering Network",
      link: "https://github.com/werengineer/social-landing",
      description: "Modernized the UI/UX of the WAE Social landing page with a focus on clean, professional design and real-time functionality. Standardized typography using Inter for improved readability. Implemented a real-time newsletter system using Supabase.",
      tags: ["React 19", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "Radix UI", "Lucide React"]
    },
    {
      id: 5,
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      name: "WAE Projects Landing – Automation & Services Showcase",
      link: "https://github.com/werengineer/projects",
      description: "Focused on the UI/UX modernization of a comprehensive services showcase platform. Developed high-end visual components using Next.js 14 and Framer Motion, including particle backgrounds, dynamic modals, and interactive service grids.",
      tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "Firebase", "Supabase"]
    },
    {
      id: 6,
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      name: "WAE Web – Core Platform & Workshop Hub",
      link: "https://github.com/werengineer/web",
      description: "Executed a comprehensive UI/UX overhaul of the WAE Web platform, focusing on high-performance data integration and modern design aesthetics. Engineered a dynamic workshop event system by fetching real-time data from Supabase.",
      tags: ["Next.js 14", "Supabase", "Firebase", "GSAP", "Anime.js", "Framer Motion", "Tailwind CSS", "Lucide React"]
    },
    {
      id: 7,
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      name: "GrowthPartner",
      link: "https://github.com/lokesh-developer/career-growth-partner",
      description: "Developed a premium career-mentorship landing page with a focus on Editorial UI/UX and interactive frontend. Enhanced user journey with optimized CTA logic and ensured full responsiveness across devices.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Radix UI"]
    },
    {
      id: 8,
      logo: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
      name: "GrowatiApp",
      link: "https://github.com/Growati/frontend_v1",
      description: "Developed a comprehensive AI-driven creator platform with a scalable multi-page architecture. Built and structured 14+ internal pages, including free tools, comparison matrices, and legal sections.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Radix UI", "TanStack Query"]
    }
  ];

  return (
    <section name="Portfolio" className="py-24 relative">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            A selection of my recent works where I solve real-world problems 
            with code and creativity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardItem.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass-dark rounded-[2.5rem] overflow-hidden border border-slate-800/50 hover:border-indigo-500/30 transition-all duration-500"
            >
              {/* Project Image/Icon Area */}
              <div className="h-48 bg-slate-900/50 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img
                  src={item.logo}
                  className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-500"
                  alt={item.name}
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-slate-950/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={item.link} 
                    target="_blank" 
                    className="p-3 bg-white text-slate-950 rounded-full hover:scale-110 transition-transform shadow-xl"
                    title="View Source"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-indigo-600 text-white rounded-full hover:scale-110 transition-transform shadow-xl shadow-indigo-500/20"
                    title="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {item.name}
                  </h3>
                  <Code2 size={18} className="text-slate-600" />
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

