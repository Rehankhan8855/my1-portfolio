import React from "react";
import { motion } from "framer-motion";
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, 
  SiNodedotjs, SiExpress, SiMongodb, SiSocketdotio, SiGithub,
  SiPostman, SiVite, SiNextdotjs, SiSupabase, SiTypescript,
  SiFirebase, SiGit, SiVisualstudiocode, SiOpenai, SiWordpress,
  SiChakraui
} from "react-icons/si";
import { Users, RefreshCw, Clock, Lightbulb } from "lucide-react";

function Experience() {
  const skills = [
    { name: "Languages", items: [
      { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "HTML/CSS", icon: <div className="flex gap-1"><SiHtml5 className="text-[#E34F26]" /><SiCss3 className="text-[#1572B6]" /></div> },
    ]},
    { name: "Frameworks", items: [
      { name: "Next JS", icon: <SiNextdotjs className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" /> },
      { name: "React JS", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Shadcn UI", icon: <SiTailwindcss className="text-white" /> },
      { name: "Chakra UI", icon: <SiChakraui className="text-[#319795]" /> },
      { name: "Prebuilt UI", icon: <SiReact className="text-indigo-400" /> },
      { name: "Express JS", icon: <SiExpress className="text-white" /> },
      { name: "Wordpress", icon: <SiWordpress className="text-[#21759B]" /> },
    ]},
    { name: "Backend & Databases", items: [
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E]" /> },
      { name: "Node JS", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="text-white" /> },
    ]},
    { name: "Tools", items: [
      { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "VS Code", icon: <SiVisualstudiocode className="text-[#007ACC]" /> },
      { name: "Antigravity", icon: <SiOpenai className="text-[#10a37f]" /> },
      { name: "Windsurf", icon: <SiVite className="text-[#646CFF]" /> },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Chatgpt", icon: <SiOpenai className="text-[#10a37f]" /> },
      { name: "Claude", icon: <SiOpenai className="text-[#D97757]" /> },
    ]},
    { name: "Soft Skills", items: [
      { name: "Teamwork & Collaboration", icon: <Users className="text-blue-400" /> },
      { name: "Adaptability", icon: <RefreshCw className="text-green-400" /> },
      { name: "Time Management", icon: <Clock className="text-yellow-400" /> },
      { name: "Creative Problem-Solving", icon: <Lightbulb className="text-orange-400" /> },
    ]}
  ];

  return (
    <section name="Experience" className="py-24 bg-slate-900/30">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-relaxed">
            I've built over 13+ projects using these technologies, focusing on 
            performance, scalability, and user experience. My expertise ranges 
            from crafting pixel-perfect frontends to robust backend architectures.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skills.map((category, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-xl font-bold text-slate-300 flex items-center gap-3">
                <span className="w-8 h-px bg-indigo-500/50"></span>
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.items.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5 }}
                    viewport={{ once: true }}
                    transition={{ delay: sIdx * 0.05 }}
                    className="glass-dark p-4 rounded-2xl flex flex-col items-center justify-center gap-3 group border border-slate-800/50 hover:border-indigo-500/30 transition-all"
                  >
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;

