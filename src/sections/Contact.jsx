/**
 * Contact Section
 * Features: Contact form with validation, social media links,
 * email/phone display, professional footer with animated elements
 */
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ArrowUpRight,
  MessageSquare,
  User,
  CheckCircle2,
  Heart,
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/resumeData';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-950">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/5 rounded-full blur-[150px]" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="mt-4 text-dark-400 max-w-2xl mx-auto text-balance">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            <div className="glass rounded-2xl p-6 gradient-border">
              <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>

              <div className="space-y-5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <Mail size={20} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs uppercase tracking-wider">Email</p>
                    <p className="text-white text-sm group-hover:text-primary-400 transition-colors">{personalInfo.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center group-hover:bg-accent-purple/20 transition-colors">
                    <Phone size={20} className="text-accent-purple" />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs uppercase tracking-wider">Phone</p>
                    <p className="text-white text-sm group-hover:text-accent-purple transition-colors">{personalInfo.phone}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-emerald/10 flex items-center justify-center">
                    <MapPin size={20} className="text-accent-emerald" />
                  </div>
                  <div>
                    <p className="text-dark-500 text-xs uppercase tracking-wider">Location</p>
                    <p className="text-white text-sm">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-2xl p-6 gradient-border">
              <h3 className="text-lg font-semibold text-white mb-4">Social Profiles</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'GitHub', url: "https://github.com/saramxhk10-coder", icon: Github, color: 'hover:text-white', bg: 'hover:bg-white/10' },
                  { name: 'LinkedIn', url: "https://www.linkedin.com/in/saram-sheikh10/", icon: Linkedin, color: 'hover:text-[#0A66C2]', bg: 'hover:bg-[#0A66C2]/10' },
                  { name: 'Twitter', url: socialLinks.twitter, icon: Twitter, color: 'hover:text-[#1DA1F2]', bg: 'hover:bg-[#1DA1F2]/10' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/5 ${social.bg} ${social.color} transition-all group`}
                  >
                    <social.icon size={22} />
                    <span className="text-xs text-dark-400 group-hover:text-current">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 sm:p-8 gradient-border">
              <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent-emerald/10 flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} className="text-accent-emerald" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-dark-400 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-dark-400 text-sm mb-2">Name</label>
                      <div className="relative">
                        <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-600" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className="w-full pl-10 pr-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-dark-400 text-sm mb-2">Email</label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-600" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full pl-10 pr-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-dark-400 text-sm mb-2">Message</label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-3 top-3 text-dark-600" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project or just say hi..."
                        className="w-full pl-10 pr-4 py-3 bg-dark-900/50 border border-white/10 rounded-xl text-white text-sm placeholder-dark-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-500/25 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-24 pt-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center text-white font-bold font-display">
                MS
              </div>
              <div>
                <p className="text-white font-semibold font-display">Muhammad Saram</p>
                <p className="text-dark-500 text-xs">Frontend React Engineer</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Skills', href: '#skills' },
                { name: 'Projects', href: '#projects' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-dark-500 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center gap-1 text-dark-500 text-sm">
              <span>Built with</span>
              <Heart size={14} className="text-accent-rose fill-accent-rose" />
              <span>by Muhammad Saram</span>
            </div>
          </div>

          <div className="mt-8 text-center text-dark-600 text-xs">
            <p> {new Date().getFullYear()} Muhammad Saram. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
