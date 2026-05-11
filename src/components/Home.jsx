import React from "react";
import pic from "../../public/rehan.png";
import {
  Send,
  Mail,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript
} from "react-icons/si";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube
} from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section name="Home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">

          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="md:w-3/5 space-y-8 order-2 md:order-1 mt-12 md:mt-0"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <span className="inline-block px-4 py-1.5 rounded-full glass text-indigo-400 text-sm font-semibold tracking-wider uppercase">
                Available for hire
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm <span className="text-gradient">Rehan</span>
                <div className="flex items-center space-x-3 mt-2">
                  <span className="text-slate-400 text-4xl md:text-5xl">a</span>
                  <ReactTyped
                    className="text-white text-4xl md:text-5xl"
                    strings={["Full Stack Developer", "UI/UX Designer", "MERN Expert"]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </div>
              </h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed max-w-2xl">
              I craft high-performance, visually stunning web applications using the MERN stack.
              Specializing in building scalable solutions with React.js and Node.js,
              transforming complex ideas into elegant digital experiences.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Link to="Portfolio" smooth duration={500} offset={-100}>
                <button className="group flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-500/25 active:scale-95">
                  <span>View My Work</span>
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="Contact" smooth duration={500} offset={-100}>
                <button className="flex items-center space-x-2 glass hover:bg-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all active:scale-95">
                  <Mail size={20} />
                  <span>Contact Me</span>
                </button>
              </Link>
            </motion.div>

            {/* Tech Stack & Socials */}
            <motion.div variants={itemVariants} className="pt-8 flex flex-col md:flex-row md:items-center gap-8">
              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Connect with me</p>
                <div className="flex space-x-4">
                  {[
                    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/rehan-khan-8855u" },
                    { icon: <FaGithub size={20} />, url: "https://github.com/Rehankhan8855" },

                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-indigo-400 hover:scale-110 transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-12 w-px bg-slate-800 hidden md:block"></div>

              <div className="space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tech Stack</p>
                <div className="flex space-x-5 text-2xl text-slate-400">
                  <SiReact className="hover:text-[#61DAFB] transition-colors cursor-help" title="React" />
                  <SiNodedotjs className="hover:text-[#339933] transition-colors cursor-help" title="Node.js" />
                  <SiMongodb className="hover:text-[#47A248] transition-colors cursor-help" title="MongoDB" />
                  <SiTailwindcss className="hover:text-[#06B6D4] transition-colors cursor-help" title="Tailwind CSS" />
                  <SiJavascript className="hover:text-[#F7DF1E] transition-colors cursor-help" title="JavaScript" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-2/5 flex justify-center order-1 md:order-2"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              {/* Image Container */}
              <div className="relative glass p-3 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl bg-slate-800 flex items-center justify-center">
                  <img
                    src={pic}
                    alt="Rehan Profile"
                    className="w-full h-full object-contain scale-105"
                  />
                </div>
              </div>

              {/* Floating Card Top */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-2xl shadow-xl flex items-center space-x-2"
              >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
                <span className="text-xs font-bold">MERN Specialist</span>
              </motion.div>

              {/* Floating Card Bottom */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-2xl shadow-xl flex items-center space-x-2"
              >
                <SiReact className="text-indigo-400" />
                <span className="text-xs font-bold">9+ Projects</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;

