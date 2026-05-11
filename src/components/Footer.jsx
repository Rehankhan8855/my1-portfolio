import React from "react";
import { 
  Heart
} from "lucide-react";
import { 
  FaInstagram, 
  FaLinkedin, 
  FaXTwitter, 
  FaGithub 
} from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950/50">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight">
              <span className="text-gradient">Rehan</span> Khan
            </h2>
            <p className="text-slate-500 text-sm mt-1">Full Stack Developer & UI Enthusiast</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {[
              { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/rehan-khan-8855u" },
              { icon: <FaGithub size={20} />, url: "https://github.com/Rehankhan8855" },
              { icon: <FaXTwitter size={20} />, url: "#" },
              { icon: <FaInstagram size={20} />, url: "https://www.instagram.com/accounts/login/" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.url} 
                target="_blank" 
                className="text-slate-500 hover:text-white transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-slate-800"></div>

          {/* Copyright & Made with */}
          <div className="text-center space-y-2">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} Rehan Khan. Built with React & Tailwind.
            </p>
            <p className="text-slate-600 text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-1.5">
              Made with <Heart size={10} className="text-rose-500 fill-rose-500" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

