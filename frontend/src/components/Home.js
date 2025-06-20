import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Hero3D from "./Hero3D";
import QuickLinks from "./QuickLinks";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1649061658110-b239d2cd1a51')`,
          }}
        />
        <div className="absolute inset-0 hero-bg" />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          {/* 3D Logo */}
          <div className="mb-12">
            <Hero3D />
          </div>
          
          {/* Tagline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-anton text-6xl md:text-8xl lg:text-9xl text-dreamland-gold mb-6 tracking-tight"
          >
            dreamland
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-bebas text-2xl md:text-3xl text-white mb-12 tracking-widest"
          >
            INSPIRATION IN EVERY CREATION.
          </motion.p>
          
          {/* Primary CTA */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-12 py-4 rounded-full font-bebas text-xl tracking-wide text-dreamland-black mb-16 animate-glow"
          >
            Explore Our World
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-dreamland-gold rounded-full flex justify-center">
            <div className="w-1 h-3 bg-dreamland-gold rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Quick Links Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-anton text-5xl md:text-6xl text-dreamland-black mb-6">
              Discover More
            </h2>
            <p className="font-inter text-xl text-dreamland-gray-600 max-w-2xl mx-auto">
              Explore our world of creativity, innovation, and inspiration through our carefully crafted experiences.
            </p>
          </motion.div>
          
          <QuickLinks />
        </div>
      </section>
    </motion.div>
  );
};

export default Home;