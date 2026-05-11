import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, MessageSquare } from "lucide-react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await axios.post("https://getform.io/f/bdrrnnkb", data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "rehankhan@example.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 1234567890" },
    { icon: <MapPin size={20} />, label: "Location", value: "Jalgaon, India" },
  ];

  return (
    <section name="Contact" className="py-24 relative overflow-hidden">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out. 
            I'm always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-dark p-8 rounded-[2.5rem] space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <MessageSquare className="text-indigo-400" />
                Contact Info
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{info.label}</p>
                      <p className="text-slate-200 font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-dark p-8 md:p-12 rounded-[2.5rem] space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Full Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className={`w-full bg-slate-950/50 border ${errors.name ? 'border-rose-500/50' : 'border-slate-800'} rounded-2xl px-5 py-4 text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-xs text-rose-500 ml-1">{errors.name.message}</span>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-400 ml-1">Email Address</label>
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                    })}
                    className={`w-full bg-slate-950/50 border ${errors.email ? 'border-rose-500/50' : 'border-slate-800'} rounded-2xl px-5 py-4 text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-xs text-rose-500 ml-1">{errors.email.message}</span>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-400 ml-1">Message</label>
                <textarea
                  rows="5"
                  {...register("message", { required: "Message is required" })}
                  className={`w-full bg-slate-950/50 border ${errors.message ? 'border-rose-500/50' : 'border-slate-800'} rounded-2xl px-5 py-4 text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <span className="text-xs text-rose-500 ml-1">{errors.message.message}</span>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full md:w-auto flex items-center justify-center space-x-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-indigo-500/25 active:scale-95"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

