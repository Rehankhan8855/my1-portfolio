import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target, User } from "lucide-react";

function About() {
  const sections = [
    {
      title: "Education & Training",
      icon: <GraduationCap className="text-indigo-400" size={28} />,
      content: [
        "Bachelor of Computer Applications (BCA) - KBC NMU University (2024)",
        "Full Stack Development Training - WAE Academy (2024-2025)",
        "Advanced React & Node.js Certifications"
      ]
    },
    {
      title: "Experience",
      icon: <Briefcase className="text-emerald-400" size={28} />,
      content: [
        "Full Stack Developer Trainee at WAE Academy",
        "Built 5+ production-ready MERN applications",
        "Expertise in RESTful API design & integration"
      ]
    },
    {
      title: "Core Mission",
      icon: <Target className="text-rose-400" size={28} />,
      content: [
        "Delivering high-performance digital solutions",
        "Focusing on user-centric design & scalability",
        "Continuous learning and architectural excellence"
      ]
    }
  ];

  return (
    <section name="About" className="py-24 relative overflow-hidden">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2 text-indigo-400 font-bold tracking-wider uppercase text-sm">
              <User size={18} />
              <span>Who I am</span>
            </div>
            <h3 className="text-3xl font-bold text-white">
              A passionate developer based in Jalgaon, India.
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in the MERN stack (MongoDB, Express, React, Node.js), 
              creating seamless digital experiences that bridge the gap between 
              complex backend logic and intuitive frontend interfaces.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              With a background in Computer Applications and intensive training in 
              modern web technologies, I bring a structured approach to problem-solving 
              and a keen eye for detail in every project I undertake.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-dark p-6 rounded-3xl group hover:border-indigo-500/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{section.title}</h4>
                    <ul className="space-y-2">
                      {section.content.map((item, i) => (
                        <li key={i} className="text-slate-400 text-sm flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

