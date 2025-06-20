import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [refHero, inViewHero] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refForm, inViewForm] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
    
    // Show success message (you could implement toast notifications here)
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const socialLinks = [
    { name: "Instagram", icon: "📷", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "LinkedIn", icon: "💼", url: "#" },
    { name: "Behance", icon: "🎨", url: "#" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20"
    >
      {/* Hero Section */}
      <section ref={refHero} className="relative py-20 bg-dreamland-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524274568576-60ae522c1719')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dreamland-black via-dreamland-black/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inViewHero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-anton text-6xl md:text-8xl text-dreamland-gold mb-8">
              Contact
            </h1>
            <p className="font-bebas text-2xl md:text-3xl tracking-widest opacity-80 mb-6">
              LET'S CREATE TOGETHER
            </p>
            <p className="font-inter text-lg max-w-3xl mx-auto opacity-90 leading-relaxed">
              Ready to bring your vision to life? We'd love to hear about your project and explore how we can collaborate to create something extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section ref={refForm} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inViewForm ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-anton text-4xl text-dreamland-black mb-8">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-bebas text-lg text-dreamland-gray-700 mb-2 tracking-wide">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-dreamland-gray-200 rounded-lg focus:border-dreamland-gold focus:outline-none transition-colors duration-300 font-inter"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-bebas text-lg text-dreamland-gray-700 mb-2 tracking-wide">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-dreamland-gray-200 rounded-lg focus:border-dreamland-gold focus:outline-none transition-colors duration-300 font-inter"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-bebas text-lg text-dreamland-gray-700 mb-2 tracking-wide">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-dreamland-gray-200 rounded-lg focus:border-dreamland-gold focus:outline-none transition-colors duration-300 font-inter"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block font-bebas text-lg text-dreamland-gray-700 mb-2 tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-dreamland-gray-200 rounded-lg focus:border-dreamland-gold focus:outline-none transition-colors duration-300 font-inter resize-vertical"
                    placeholder="Tell us about your project, ideas, or questions..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-bebas text-xl tracking-wide transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-dreamland-gray-400 text-white cursor-not-allowed'
                      : 'btn-primary text-dreamland-black hover:shadow-lg'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inViewForm ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Get in Touch */}
              <div>
                <h2 className="font-anton text-4xl text-dreamland-black mb-8">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dreamland-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-bebas text-xl text-dreamland-black tracking-wide">Email</h3>
                      <p className="font-inter text-dreamland-gray-600">hello@dreamland.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dreamland-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h3 className="font-bebas text-xl text-dreamland-black tracking-wide">Phone</h3>
                      <p className="font-inter text-dreamland-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-dreamland-gold rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-bebas text-xl text-dreamland-black tracking-wide">Location</h3>
                      <p className="font-inter text-dreamland-gray-600">
                        Creative District<br />
                        Innovation Hub, Suite 200<br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-anton text-3xl text-dreamland-black mb-6">
                  Follow Us
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inViewForm ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-4 bg-dreamland-gray-50 rounded-lg hover:bg-dreamland-gold/20 transition-colors duration-300"
                    >
                      <span className="text-2xl">{social.icon}</span>
                      <span className="font-bebas text-lg tracking-wide text-dreamland-black">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="font-anton text-3xl text-dreamland-black mb-6">
                  Business Hours
                </h3>
                <div className="space-y-3 font-inter text-dreamland-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-dreamland-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-anton text-5xl md:text-6xl text-dreamland-black mb-8">
              Stay Connected
            </h2>
            <p className="font-inter text-xl text-dreamland-black/80 mb-12 max-w-2xl mx-auto">
              Join our newsletter to receive updates about new projects, creative insights, and exclusive behind-the-scenes content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-dreamland-black/20 focus:border-dreamland-black focus:outline-none font-inter text-dreamland-black bg-white/80"
              />
              <button className="bg-dreamland-black text-dreamland-gold px-8 py-4 rounded-full font-bebas text-lg tracking-wide hover:bg-dreamland-darkred transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dreamland-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-dreamland-gold rounded-full flex items-center justify-center">
                  <span className="text-dreamland-black font-anton text-xl">d</span>
                </div>
                <span className="font-anton text-2xl text-white">dreamland</span>
              </div>
              <p className="font-inter text-dreamland-gray-400 mb-6">
                Inspiration in every creation. Transforming ideas into extraordinary experiences.
              </p>
              <p className="font-bebas text-dreamland-gold tracking-wide">
                INSPIRATION IN EVERY CREATION.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bebas text-xl text-dreamland-gold mb-4 tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2 font-inter text-dreamland-gray-400">
                <li><a href="/" className="hover:text-dreamland-gold transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-dreamland-gold transition-colors">About</a></li>
                <li><a href="/products" className="hover:text-dreamland-gold transition-colors">Products</a></li>
                <li><a href="/blog" className="hover:text-dreamland-gold transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bebas text-xl text-dreamland-gold mb-4 tracking-wide">
                Services
              </h4>
              <ul className="space-y-2 font-inter text-dreamland-gray-400">
                <li>Creative Solutions</li>
                <li>Digital Experiences</li>
                <li>Brand Storytelling</li>
                <li>Consultation</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bebas text-xl text-dreamland-gold mb-4 tracking-wide">
                Legal
              </h4>
              <ul className="space-y-2 font-inter text-dreamland-gray-400">
                <li><a href="#" className="hover:text-dreamland-gold transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-dreamland-gold transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-dreamland-gold transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-dreamland-gold transition-colors">Sitemap</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-dreamland-gray-800 mt-12 pt-8 text-center">
            <p className="font-inter text-dreamland-gray-400">
              © 2025 Dreamland. All rights reserved. Made with passion and purpose.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Contact;