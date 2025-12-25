import React, { useState, useEffect, useRef } from 'react';
import { slideInLeft } from "../animations/gsapAnimations";
import { gsap } from "gsap";

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    gsap.set(section, { opacity: 0, x: -100 });
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          slideInLeft(section, 1.2);
        } else {
          gsap.to(section, { opacity: 0, x: -100, duration: 0.5 });
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={sectionRef} className="py-10 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-cyan-600">Me</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Let's work together on your next project
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:border-cyan-600 focus:outline-none focus:ring-1 focus:ring-cyan-600"
                placeholder="Your message here..."
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
