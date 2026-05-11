import React, { useState, useEffect } from "react";
import pic from "../../public/mylogo.png";
import { Menu, X, Code2 } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4" : "py-6"
      }`}>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className={`flex justify-between items-center px-6 py-3 rounded-full transition-all duration-300 ${scrolled ? "glass-dark shadow-2xl backdrop-blur-xl" : "bg-transparent"
          }`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="relative">
              <img src={pic} className="h-10 w-10 rounded-full border-2 border-indigo-500/50 group-hover:border-indigo-400 transition-colors" alt="Logo" />
              <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-3 h-3 rounded-full border-2 border-slate-950"></div>
            </div>
            <h1 className="font-bold text-xl tracking-tight">
              <span className="text-gradient">Rehan</span>
              <span className="text-slate-500 text-xs block -mt-1 font-medium">Full Stack Dev</span>
            </h1>
          </motion.div>

          {/* Desktop Navbar */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li key={id} className="relative group">
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    activeClass="active"
                    className="text-slate-300 hover:text-white transition-colors cursor-pointer font-medium text-sm tracking-wide"
                  >
                    {text}
                  </Link>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <motion.a
              href="/Rehan_Resume_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-lg shadow-indigo-500/20"
            >
              Resume
            </motion.a>

            <div onClick={() => setMenu(!menu)} className="md:hidden text-slate-300 cursor-pointer p-2 hover:bg-white/10 rounded-full transition-colors">
              {menu ? <X size={24} /> : <Menu size={24} />}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2"
          >
            <div className="glass-dark rounded-3xl p-6 shadow-2xl backdrop-blur-2xl">
              <ul className="flex flex-col space-y-4">
                {navItems.map(({ id, text }) => (
                  <li key={id}>
                    <Link
                      onClick={() => setMenu(false)}
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className="text-slate-300 hover:text-white block text-lg font-medium py-2 px-4 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      {text}
                    </Link>
                  </li>
                ))}
                <a
                  href="/Rehan_Resume_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-semibold transition-colors"
                >
                  Download Resume
                </a>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;

